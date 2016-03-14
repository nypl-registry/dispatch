var mmsIngest = require('nypl-registry-ingest-mms')
var cluster = require('cluster')

var queue = [mmsIngest.ingestCollections, mmsIngest.ingestContainers, mmsIngest.ingestItems, mmsIngest.ingestCaptures]

if (cluster.isMaster) {
  // fork for each ingest type
  queue.forEach(() => {
    cluster.fork()
  })

  // when we are done  (All the worker clusters have exited) then start the prune train
  cluster.on('exit', (worker, code, signal) => {
    if (Object.keys(cluster.workers).length === 0) {
      // when we are done ingesting we want to prune
      console.log('Pruning collections w/ out captures')
      mmsIngest.pruneCollectionsWithoutCaptures(() => {
        console.log('Pruning containers w/ out captures')
        mmsIngest.pruneContainersWithoutCaptures(() => {
          console.log('Pruning items w/ out captures')
          mmsIngest.pruneItemsWithoutCaptures(() => {
            console.log('Pruning manually defined collections')
            mmsIngest.pruneIgnoreCollections(() => {
              console.log('Removing items that have an invalid container.')
              mmsIngest.pruneItemsWithInvalidContainer(() => {
                process.exit()
              })
            })
          })
        })
      })
    }
  })
} else {
  // execute the function for this worker
  queue[cluster.worker.id - 1]()
}

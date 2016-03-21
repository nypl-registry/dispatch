var mmsMapping = require('nypl-registry-mapping-mms')

// this job has two modes, if passed 'hierarchy' it runs the cluster mmsToArchivesByHierarchy method
// node jobs/mapping_mms.js
// node jobs/mapping_mms.js hierarchy

if (process.argv[2] && process.argv[2] === 'hierarchy') {
  console.log('mmsToArchivesByHierarchy')
  mmsMapping.mmsToArchivesByHierarchy(() => {
    console.log('mmsToArchivesByHierarchy done')
    process.exit(0)
  })
} else {
  console.log('mmsCollectionsToArchivesCollections')
  mmsMapping.mmsCollectionsToArchivesCollections(() => {
    console.log('mmsCollectionsToArchivesCollectionsByTitle')
    mmsMapping.mmsCollectionsToArchivesCollectionsByTitle(() => {
      console.log('mmsItemCollectionsToArchivesCollections')
      mmsMapping.mmsItemCollectionsToArchivesCollections(() => {
        console.log('mmsItemsToArchivesComponents')
        mmsMapping.mmsItemsToArchivesComponents(() => {
          console.log('mmsContainerToArchivesComponents')
          mmsMapping.mmsContainerToArchivesComponents(() => {
            console.log('mmsItemsToArchivesComponentsByRepo')
            mmsMapping.mmsItemsToArchivesComponentsByRepo(() => {
              console.log('mmsItemsToTmsObjects')
              mmsMapping.mmsItemsToTmsObjects(() => {
                console.log('mmsItemsToTmsObjectsByImage')
                mmsMapping.mmsItemsToTmsObjectsByImage(() => {
                  console.log('Finished with MMS Mapping')
                  process.exit(0)
                })
              })
            })
          })
        })
      })
    })
  })
}

var serializeTerms = require('nypl-registry-serialization-terms')

if (process.argv[2] && process.argv[2].toLowerCase() === 'shadowcat') {
  console.log('shadowcatSerializeTerms')
  serializeTerms.shadowcatSerializeTerms(() => {
    console.log('shadowcatSerializeTerms done')
    process.exit(0)
  })
} else if (process.argv[2] && process.argv[2].toLowerCase() === 'archivescollections') {
  console.log('archivesCollectionsSerializeTerms')
  serializeTerms.archivesCollectionsSerializeTerms(() => {
    console.log('archivesCollectionsSerializeTerms done')
    process.exit(0)
  })
} else if (process.argv[2] && process.argv[2].toLowerCase() === 'archivescomponents') {
  console.log('archivesComponentsSerializeTerms')
  serializeTerms.archivesComponentsSerializeTerms(() => {
    console.log('archivesComponentsSerializeTerms done')
    process.exit(0)
  })
} else if (process.argv[2] && process.argv[2].toLowerCase() === 'mmscollections') {
  console.log('mmsCollectionsSerializeTerms')
  serializeTerms.mmsCollectionsSerializeTerms(() => {
    console.log('mmsCollectionsSerializeTerms done')
    process.exit(0)
  })
} else if (process.argv[2] && process.argv[2].toLowerCase() === 'mmscontainers') {
  console.log('mmsContainersSerializeTerms')
  serializeTerms.mmsContainersSerializeTerms(() => {
    console.log('mmsContainersSerializeTerms done')
    process.exit(0)
  })
} else if (process.argv[2] && process.argv[2].toLowerCase() === 'mmsitems') {
  console.log('mmsItemsSerializeTerms')
  serializeTerms.mmsItemsSerializeTerms(() => {
    console.log('mmsItemsSerializeTerms done')
    process.exit(0)
  })
} else if (process.argv[2] && process.argv[2].toLowerCase() === 'enumerate') {
  console.log('enumerateTerms')
  serializeTerms.enumerateTerms(() => {
    console.log('enumerateTerms done')
    process.exit(0)
  })
} else if (process.argv[2] && process.argv[2].toLowerCase() === 'prepare') {
  serializeTerms.prepareTerms(() => {
    process.exit(0)
  })
}

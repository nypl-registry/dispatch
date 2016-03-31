var serializeTerms = require('nypl-registry-serialization-terms')

serializeTerms.shadowcatSerializeTerms(() => {
  console.log('shadowcatSerializeTerms done')
  process.exit(0)
})
// if (process.argv[2] && process.argv[2].toLowerCase() === 'shadowcatviaf') {
//   console.log('shadowcatSerializeViafAgents')
//   serializeAgents.shadowcatSerializeViafAgents(() => {
//     console.log('shadowcatSerializeViafAgents done')
//     process.exit(0)
//   })
// } else if (process.argv[2] && process.argv[2].toLowerCase() === 'shadowcatnonviaf') {
//   console.log('shadowcatSerializeNonViafAgents')
//   serializeAgents.shadowcatSerializeNonViafAgents(() => {
//     console.log('shadowcatSerializeNonViafAgents done')
//     process.exit(0)
//   })
// } else if (process.argv[2] && process.argv[2].toLowerCase() === 'archivescollections') {
//   console.log('archivesSerializeCollectionAgents')
//   serializeAgents.archivesSerializeCollectionAgents(() => {
//     console.log('archivesSerializeCollectionAgents done')
//     process.exit(0)
//   })
// } else if (process.argv[2] && process.argv[2].toLowerCase() === 'archivescomponents') {
//   console.log('archivesSerializeComponentsAgents')
//   serializeAgents.archivesSerializeComponentsAgents(() => {
//     console.log('archivesSerializeComponentsAgents done')
//     process.exit(0)
//   })
// } else if (process.argv[2] && process.argv[2].toLowerCase() === 'mmscollections') {
//   console.log('mmsSerializeCollectionsAgents')
//   serializeAgents.mmsSerializeCollectionsAgents(() => {
//     console.log('mmsSerializeCollectionsAgents done')
//     process.exit(0)
//   })
// } else if (process.argv[2] && process.argv[2].toLowerCase() === 'mmscontainers') {
//   console.log('mmsSerializeContainerAgents')
//   serializeAgents.mmsSerializeContainerAgents(() => {
//     console.log('mmsSerializeContainerAgents done')
//     process.exit(0)
//   })
// } else if (process.argv[2] && process.argv[2].toLowerCase() === 'mmsitems') {
//   console.log('mmsSerializeItemsAgents')
//   serializeAgents.mmsSerializeItemsAgents(() => {
//     console.log('mmsSerializeItemsAgents done')
//     process.exit(0)
//   })
// } else if (process.argv[2] && process.argv[2].toLowerCase() === 'tmsobjects') {
//   console.log('tmsSerializeObjectsAgents')
//   serializeAgents.tmsSerializeObjectsAgents(() => {
//     console.log('tmsSerializeObjectsAgents done')
//     process.exit(0)
//   })
// } else if (process.argv[2] && process.argv[2].toLowerCase() === 'enumerate') {
//   console.log('enumerateAgents')
//   serializeAgents.enumerateAgents(() => {
//     console.log('enumerateAgents done')
//     process.exit(0)
//   })
// }

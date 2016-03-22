var tmsMapping = require('nypl-registry-mapping-tms')

// this job has two modes, if passed 'clean' it generates the material K lookup table first
// node jobs/mapping_tms.js
// node jobs/mapping_tms.js clean

if (process.argv[2] && process.argv[2] === 'clean') {
  tmsMapping.populateKLookup(() => {
    console.log('Done populateKLookup')
    tmsMapping.tmsAccessionToShadowcatCallnumber(() => {
      console.log('Done tmsAccessionToShadowcatCallnumber')
      tmsMapping.mmsItemsToTmsObjects(() => {
        console.log('Done mmsItemsToTmsObjects')
        process.exit(0)
      })
    })
  })
} else {
  tmsMapping.tmsAccessionToShadowcatCallnumber(() => {
    console.log('Done tmsAccessionToShadowcatCallnumber')
    tmsMapping.mmsItemsToTmsObjects(() => {
      console.log('Done mmsItemsToTmsObjects')
      process.exit(0)
    })
  })
}

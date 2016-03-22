var tmsIngest = require('nypl-registry-ingest-tms')

tmsIngest.asyncAllLookup((lookupTables) => {
  tmsIngest.tmsObjectsIngest(lookupTables, () => {
    console.log('tmsObjectsIngest Done')
    tmsIngest.ulan2viaf(() => {
      console.log('Done with ulan2viaf')
      tmsIngest.dropPotraitCollection(() => {
        console.log('Done with dropPotraitCollection')

        process.exit(0)
      })
    })
  })
})

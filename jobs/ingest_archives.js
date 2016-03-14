var archivesIngest = require('nypl-registry-ingest-archives')

archivesIngest.ingestCollections(() => {
  archivesIngest.ingestComponents()
})

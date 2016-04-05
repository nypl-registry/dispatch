var db = require('nypl-registry-utils-database')
var prompt = require('prompt')

prompt.start()
console.log('Dev IPs should be the public IP and Prod should be the private network IP')
prompt.get([ 'Registry Ingest Dev IP',
  'Registry Ingest Prod IP',
  'Registry Triple Store Dev IP',
  'Registry Triple Store Prod IP',
  'Shadowcat Dev IP',
  'Shadowcat Prod IP',
  'Elasticsearch Dev IP',
  'Elasticsearch Prod IP'], (err, result) => {
  if (err) console.log(err)
  var creds = {
    'rid': result['Registry Ingest Dev IP'],
    'rip': result['Registry Ingest Prod IP'],
    'rsd': result['Registry Triple Store Dev IP'],
    'rsp': result['Registry Triple Store Prod IP'],
    'sd': result['Shadowcat Dev IP'],
    'sp': result['Shadowcat Prod IP'],
    'ed': result['Elasticsearch Dev IP'],
    'ep': result['Elasticsearch Prod IP']
  }
  console.log('Encrypting:', creds)
  console.log('--------------------')
  console.log(db.buildServerConfig(creds))
})

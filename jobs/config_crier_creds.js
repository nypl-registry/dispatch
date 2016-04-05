var db = require('nypl-registry-utils-database')
var prompt = require('prompt')

prompt.start()
console.log('The Various keys needed by the utils-crier')
prompt.get(['Slack Registry Key'], (err, result) => {
  if (err) console.log(err)
  var creds = {
    'sr': result['Slack Registry Key']
  }
  console.log('Encrypting Crier Creds:', creds)
  console.log('--------------------')
  console.log(db.buildServerConfig(creds))
})

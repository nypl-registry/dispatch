var serializeAgents = require('nypl-registry-serialization-agents')

console.log(serializeAgents)
serializeAgents.shadowcatSerializeViafAgents(() => {
  console.log('shadowcatSerializeViafAgents done')
})

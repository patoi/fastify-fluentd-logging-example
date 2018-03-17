// Require the framework and instantiate it
const pino = require('pino')
const fastify = require('fastify')({
  logger: {
    base: null,
    timestamp: pino.stdTimeFunctions.unixTime
  }
})

// Declare a route
fastify.get('/', async (request, reply) => {
  // saved to journalDB (but not to logDB)
  fastify.log.info({dest: 'journal', msg:'journal message'})
  // others saved to logDB
  fastify.log.info({dest: 'log', msg:'log message'})
  fastify.log.info({msg:'log object, but no dest key'})
  fastify.log.info('string log message')
  return { hello: 'world' }
})

// Run the server!
const start = async () => {
  try {
    // you must specify 0.0.0.0
    // with docker the 127.0.0.1 (default) is unreachable
    await fastify.listen(4000, '0.0.0.0')
    fastify.log.info({
      dest: 'log',
      msg: `server listening on ${fastify.server.address().port}`
    })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

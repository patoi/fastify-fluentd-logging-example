const logger = require('pino')({
  base: null,
  useLevelLabels: true
})
function logging () {
  for (var i = 0; i < 1000; i++) {
    logger.info({ 'msg': i })
  }
}
setTimeout(logging, 5000)

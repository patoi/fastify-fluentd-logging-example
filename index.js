const fs = require('fs')
const logger = require('pino')({
  base: null,
  useLevelLabels: true
})

logger.info('endless logger')
let q = 1
setInterval(function () {
  logger.info({msg: q})
  q++
}, 2000)

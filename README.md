# Example fluentd configuration for message routing

Fastify logging with pino to standard out from a docker container.
Docker logging with docker fluentd logger settings into a fluentd instance.
This instance writes messages to the standard out.

*Goal: you don't need to add fluent dependency to your code,* just logging to standard output.
You can route your log messages with _dest: journal_ key, and it will be saved to journal database, any others will be saved to the log database.

Start with ```docker-compose up -d --build```

Tail fluentd log with ```docker logs --follow test_fluentd```

Stop with ```CTRL-C``` and ```docker-compose down --remove-orphans```

When you logging with _dest_ key with _journal_ value, then output wil be saved into the journal DB.

```javascript
// saved to journalDB (but not to logDB)
fastify.log.info({dest: 'journal', msg:'journal message'})
// others saved to logDB
fastify.log.info({dest: 'log', msg:'log message'})
fastify.log.info({msg:'log object, but no dest key'})
fastify.log.info('string log message')
```

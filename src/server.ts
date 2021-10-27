// @ts-nocheck
import "./app/services/tracer"; // must come before importing any instrumented module.


const { createLogger, format, transports } = require('winston');


const logger = createLogger({
  level: 'info',
  exitOnError: false,
  format: format.json(),
  transports: [
    new transports.File({ filename: `${process.env.PWD}/logs/winston_logs.log` }),
  ],
});

// Example logs
logger.log('info', 'Hello simple log!');
logger.info('Hello log with metas',{color: 'blue' });

function sendLog() {
    logger.log('info', 'this is the data: ' + new Date().toString(), { userId: 123456, isPaying: true });
}
console.log('Helo world2!');
/* eslint-disable global-require */
const express = require('express')
/* eslint-enable global-require */

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

setInterval(sendLog, 5000); //time is in ms

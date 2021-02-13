const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
  host: 'redis-server',
  port: 6379
});

client.set('noVisits', 1);

app.get('/', (req, res) => {
  client.get('noVisits', (err, noVisits) => {
    res.send('The number of visits is ' + noVisits)
    client.set('noVisits', parseInt(noVisits) + 1);
  });
});

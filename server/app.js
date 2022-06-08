const redis = require('redis');
const client = redis.createClient(6379);

async function connectRedis(){
  await client.connect();
  client.on('connect', () => {
    console.log('Connected!');
});
}
connectRedis()

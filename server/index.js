
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const main = require('./main');

const bodyParse = require('body-parser');


app.use(bodyParse.json())
app.set('port', port)

app.use('/api',main);

// route.get('/article',function(req,res,next){
//   console.log('get success');
//   res.send("get success");
// });
// route.use('/api',function(){
//   consola.log('route use');
// })
// app.use('/',route);
// app.get('/api/user', function (req, res) {
//   res.send('Hello World!')
// })



// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()

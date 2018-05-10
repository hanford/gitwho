const express = require('express')
const next = require('next')
const { join } = require('path')
const cors = require('cors')

const Trending = require('./routes/trending')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.use(cors())

    server.get('/trending', Trending)
    server.get('/service-worker.js', ServiceWorker(app))

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })


const ServiceWorker = app => (req, res) => {
  const filePath = join(__dirname, '../', '.next', 'service-worker.js')

  app.serveStatic(req, res, filePath)
}

const path = require('path')
const express = require('express')
const cors = require('cors')
const app = express()
const http = require('http')
const bodyParser = require('body-parser')
const router = require('./router')

const PORT = process.env.PORT || 5000

const server = http.createServer(app)

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

app.use(cors())

app.use('/api/v1/', router)

server.listen(PORT)
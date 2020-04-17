import express from 'express'
import cors from 'cors'
import http from 'http'
import bodyParser from 'body-parser'
import { connection} from './database'
import router from './router'
import config from './config'
const app = express()
connection()

const server = http.createServer(app)

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

app.use(cors())

app.use('/api/v1/', router)

const port = config.port
server.listen(port, () => console.log(`server on port ${port}`))
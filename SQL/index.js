import express, { json } from 'express'
import { router } from './Routes/Route.js'
import 'dotenv/config'

const server = express()

server.use(express.json())
server.use(router)
server.listen(process.env.PORT, () => console.log('Servidor em funcionamento'))
import express, { json } from 'express'
import { router } from './Routes/Route.js'

const server = express()

server.use(express.json())
server.use(router)
server.listen(3000, () => console.log('Servidor em funcionamento'))
import express from 'express';
import { router } from '../routes';
import cors from 'cors'
import { main } from '../database';

const server = express()

server.use(cors({
    origin: 'http://127.0.0.1:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
server.use(express.json())
main()
server.use(router)

export {server};
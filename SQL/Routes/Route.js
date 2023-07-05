import express from 'express'
import { helloWorld, posts } from '../Controllers/helloword.js'

const router = express()

router.get('/', helloWorld)
router.get('/postagens', posts)

export { router }
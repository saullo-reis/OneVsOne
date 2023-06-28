import {Router} from 'express'
import StatusCode from 'http-status-codes'

const router = Router()

router.get('/', (__, res) => {
    return res.status(StatusCode.ACCEPTED).send('Hello World')
})

router.post('/Teste/:name', (req, res) => {
    return res.status(StatusCode.CREATED).send(req.params.name)
})

export { router }
import {Router} from 'express'
import StatusCode from 'http-status-codes'
import { loginController } from '../controllers/login'
import { registerController } from '../controllers/register'

const router = Router()

router.get('/', (__, res) => {
    return res.status(StatusCode.ACCEPTED).send('Hello World')
})

router.post('/register', registerController)
router.get('/login', loginController)

export { router }
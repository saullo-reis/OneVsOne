import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import sha256 from 'sha256'
import { User } from '../../models/User'
import jwt from 'jsonwebtoken'

interface IUser {
    username: string,
    password: string,
}

export const loginController = async (req: Request<{}, {}, IUser>, res: Response) => {
    try{
        const loginUser = {
            username: req.body.username,
            password: sha256(req.body.password)
        }
        const user = await User.findOne({username: req.body.username}, {username: true, password: true})
        if(!user){
            res.status(StatusCodes.BAD_REQUEST).send({error: 'Usuário não registrado.'})
            return
        }
        if(loginUser.username === user.username && loginUser.password === sha256(user.password)){
            const token = jwt.sign({username: user.username}, '994625997')
            res.status(StatusCodes.ACCEPTED).send({
                sucess: 'Usuário logado',
                token: token
            })
        }else{
            res.status(StatusCodes.BAD_REQUEST).send({error: 'Credenciais incorretas'})
        }
    }catch(err){
        res.status(StatusCodes.BAD_GATEWAY).send({error: "Error lado servidor, reinicie a página"})
    }
}
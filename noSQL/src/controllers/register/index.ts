import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { User } from "../../models/User";
import sha256 from 'sha256'

interface IRegisterUser {
    username: string,
    password: string,
    name: string
}

export const registerController = async (req: Request<{}, {}, IRegisterUser>, res: Response) => {
    try {
        const user = {
            username: req.body.username,
            name: req.body.name,
            password: sha256(req.body.password)
        }
        const exist = await User.findOne({ username: user.username }).count()
        if(exist === 0){
            await User.create(user)
            res.status(StatusCodes.CREATED).json({ sucess: `Usuário ${user.username} registrado com sucesso` })
        }else{
            res.status(StatusCodes.BAD_REQUEST).send({error: 'Username ja está sendo usado, escolha outro'})
        }
    } catch (err) {
        res.status(StatusCodes.BAD_GATEWAY).send({error: 'Problema na parte servidor, espere ou recarregue a página.'})
        console.error(err)
    }

}
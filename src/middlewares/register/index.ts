import { Request, Response } from "express";
import {db} from '../../database/db'

interface IRegisterUser{
    username: string,
    password: string,
}

const register = (req: Request<{}, {}, IRegisterUser>, res: Response) => {
    const {username, password} = req.body
}
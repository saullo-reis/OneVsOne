import { Request, Response } from "express";

interface IRegisterUser{
    username: string,
    password: string,
}

const register = (req: Request<{}, {}, IRegisterUser>, res: Response) => {

}
import { Request, Response } from 'express'

interface IUser {
    username: string,
    password: string,
}

const login = (req: Request<{}, {}, IUser>, res: Response) => {
    
}
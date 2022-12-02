import { Request, Response } from 'express'
import connection from '../dataBase/connection'

export default async function deleteCharacter(req: Request, res: Response):Promise<void>{
    try{
        const { id } = req.params

        await connection("character")
            .delete()
            .where({id})

        res.status(201).end()

    }catch(err:any){
        res.status(401).end()
    }

}
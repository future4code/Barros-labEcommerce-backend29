import { Request, Response } from 'express'
import connection from '../dataBase/connection'

export default async function createCharacters(req: Request, res: Response):Promise<void>{
    
    try{
        const { name, gender, description } = req.body

        await connection("character")
            .insert({name, gender, description})

        res.status(201).end()

    }catch(err:any){
        res.status(401).end()
    }
}
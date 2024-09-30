import { Request, Response } from "express";
import { getPlayerServices } from "../services/players-services";


export const getPlayer = async (req: Request, res: Response) => {

    const httpResponse = await getPlayerServices()

    res.status( httpResponse.statusCode).json(httpResponse.body)
    
}
import { Request, Response } from "express";
import * as services from "../services/players-services";


export const getPlayer = async (req: Request, res: Response) => {

    const httpResponse = await services.getPlayerServices()

    res.status( httpResponse.statusCode).json(httpResponse.body)
    
}

export const getPlayerById = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id)

   const httpResponse = await services.getPlayerServicesById(id)

   res.status( httpResponse.statusCode).json(httpResponse.body)

}
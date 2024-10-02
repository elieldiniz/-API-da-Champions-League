import { Request, Response } from "express";
import * as services from "../services/players-services";
import { badyRequest } from "../utils/http-helpers";
import { Estatistics } from "../model/statistics-model";


export const getPlayer = async (req: Request, res: Response) => {

    const httpResponse = await services.getPlayerServices()

    res.status( httpResponse.statusCode).json(httpResponse.body)
    
}

export const getPlayerById = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id)

   const httpResponse = await services.getPlayerServicesById(id)

   res.status( httpResponse.statusCode).json(httpResponse.body)

}

export const postPlayers = async (req: Request, res: Response) => {

    const bodyValue = req.body
    const httpResponse = await services.createPlayerServices(bodyValue)

    if(httpResponse){
        res.status(httpResponse.statusCode).json(httpResponse.body)
    }else{
        const response = await badyRequest()
        res.status(response.statusCode).json(response.body)
    }

}

export const deletePlayer = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id)

   const httpResponse = await services.deletePlayerServece(id)

   res.status( httpResponse.statusCode).json(httpResponse.body)

}

export const patchPlayer = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id)

    const bodyValue: Estatistics = req.body

    const httpResponse = await services.updatePlayerServices(id, bodyValue)

    
    if(httpResponse){
    
        res.status(httpResponse.statusCode).json(httpResponse.body)
    }else{
        const response = await badyRequest()

        res.status(response.statusCode).json(response.body)
    }
    
}




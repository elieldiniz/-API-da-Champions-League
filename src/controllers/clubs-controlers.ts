import { Request, Response } from "express";
import * as Services from "../services/club-serveces";

export const getClubs = async (req: Request, res: Response) =>{

    const response = await Services.getClubsService()

    res.status(response.statusCode).json(response.body)
}

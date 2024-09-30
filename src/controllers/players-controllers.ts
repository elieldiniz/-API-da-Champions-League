import { Request, Response } from "express";
import { getPlayerServices } from "../services/players-services";
import { ok } from "../utils/http-helpers";

export const getPlayer = async (req: Request, res: Response) => {

    const data = await getPlayerServices()

    const Response = await ok(data)

    res.status( Response.statusCode).json(Response.body)
}
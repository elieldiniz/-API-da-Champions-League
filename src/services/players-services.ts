
import { playersModel } from "../model/player.model";
import { Estatistics } from "../model/statistics-model";
import * as PlayerRepository  from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helpers";


export const getPlayerServices = async () => {

    const data = await PlayerRepository.FindAllPlayer();

    if (data) {
        return await HttpResponse.ok(data);  
    } else {
        return await HttpResponse.noContent();  
    }

}

export const createPlayerServices = async (player: playersModel) => {

    let response = null
    
    if (Object.keys(player).length !== 0) {

        await PlayerRepository.CreatePlayer(player)

        
        response = await HttpResponse.Creat()
        
    } else {

        response = await HttpResponse.badyRequest();  
    }
    
    return response;

}


export const getPlayerServicesById = async (id: number) => {

    const data = await PlayerRepository.FindPlayerById(id)

    let response = null

    if (data) {
        response = HttpResponse.ok(data)  
    } else {
        response = HttpResponse.noContent();  
    }

    return response

}

export const deletePlayerServece =  async (id: number) => {

    let response = null

    const deleted = await PlayerRepository.deleteOnePlayer(id)

    if (deleted) {
        response = await HttpResponse.ok({messege:"deleted"})
    }  else {
        response = await HttpResponse.badyRequest()
    }

    return response

}

export const updatePlayerServices = async (id: number, statistics: Estatistics ) => {
    const data = await PlayerRepository.FindAndModifyPlayers(id, statistics)

    const response = await HttpResponse.ok(data)

    return response;
}

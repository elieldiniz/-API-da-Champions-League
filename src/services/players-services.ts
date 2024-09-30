
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
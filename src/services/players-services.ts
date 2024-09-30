import { FindAllPlayers } from "../repositories/players-repository"
import { noContent, ok } from "../utils/http-helpers"

export const getPlayerServices = async () => {
    const data =  FindAllPlayers()

    let Response = null

    if(data){
        Response = await ok(data)
    } else {
        Response = await noContent()
    }
    
    return Response
}


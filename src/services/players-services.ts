
import * as PlayerRepository  from "../repositories/players-repository";
import { ok, noContent } from "../utils/http-helpers";


export const getPlayerServices = async () => {

    const data = await PlayerRepository.FindAllPlayer();

    if (data) {
        return await ok(data);  
    } else {
        return await noContent();  
    }

}
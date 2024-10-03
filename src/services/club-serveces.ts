import * as HttpResponse from "../utils/http-helpers";
import * as PlayerRepository  from "../repositories/clubs-repository";

export const getClubsService = async () => {
    const clubRepository = await PlayerRepository.FindAllClub()

    if (clubRepository) {

        return await HttpResponse.ok(clubRepository);  
    } else {

        return await HttpResponse.noContent();  
    }
    

}

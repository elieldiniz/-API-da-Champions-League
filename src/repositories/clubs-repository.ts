import { ClubModel } from "../model/club-model"
import fs from "fs/promises"


export const FindAllClub =  async (): Promise<ClubModel[]> =>{

    const data = await fs.readFile('./src/data/clubs.json', 'utf8')

    const clubs: ClubModel[] = JSON.parse(data)
    
    return clubs
}
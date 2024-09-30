interface playersModel {
    id: string
    name: string
}

const database: playersModel[] = [
    { id: "1", name: "Rafinha" },
    { id: "2", name: "Youssef" },
    { id: "3", name: "Mohamed" }
]

export const FindAllPlayers =  async (): Promise<playersModel[]> =>{
    return database
}

export const FindPlayerById =  async (id: string): Promise<playersModel | undefined> =>{
    const player = database.find(player => player.id === id)
    return player || undefined
}
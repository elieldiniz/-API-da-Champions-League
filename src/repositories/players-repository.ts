import { playersModel } from "../model/player.model"
// import axios from "axios";
// import { retry, circuitBreaker } from "../middlewares/retry-circuit-breaker";

const database: playersModel[] = [
    { id: 1, name: "Rafinha" },
    { id: 2, name: "Youssef" },
    { id: 3, name: "Mohamed" }
]

// export const fetchDataFromExternalAPI = async (): Promise<playersModel[]> => {
//     const config = {
//         method: 'get',
//         url: process.env.URL,
//         headers: {
//             'x-rapidapi-key': process.env.API_KEY,
//             'x-rapidapi-host': process.env.API_HOST
//         }
//     }

//     try {
//         const data = await retry(() => 
//             circuitBreaker(async () => {
//                 console.log("Fazendo chamada para a API externa...");
//                 const response = await axios(config);
//                 console.log("Resposta recebida da API externa.");
//                 const externalPlayers: playersModel[] = response.data.response.map((player: any) => ({
//                     id: player.player.id.toString(),
//                     name: player.player.name
//                 }));
//                 return externalPlayers;
//             })
//         , { retries: 3, delay: 1000 });
//         return data;
//     } catch (error) {
//         console.error("Erro na função fetchDataFromExternalAPI:");
//         throw error;
//     }
// };

 export const FindAllPlayer =  async (): Promise<playersModel[]> =>{
    return database
}

export const FindPlayerById =  async (id: number): Promise<playersModel | undefined> =>{
    return  database.find(player => player.id === id)
}
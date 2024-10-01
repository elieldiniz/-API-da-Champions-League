import { playersModel } from "../model/player.model"
// import axios from "axios";
// import { retry, circuitBreaker } from "../middlewares/retry-circuit-breaker";

const database: playersModel[] = [
        {
            id: 1,
            nome: "Rafael Leão",
            clube: "AC Milan",
            nacionalidade: "Portugal",
            posicao: "Atacante",
            estatisticas: {
                overall: 85,
                pace: 90,
                shooting: 82,
                passing: 78,
                dribbling: 88,
                defending: 40,
                physical: 75
            }
        },
        {
            id: 2,
            nome: "Kevin De Bruyne",
            clube: "Manchester City",
            nacionalidade: "Bélgica",
            posicao: "Meio-campo",
            estatisticas: {
                overall: 91,
                pace: 78,
                shooting: 85,
                passing: 94,
                dribbling: 87,
                defending: 60,
                physical: 78
            }
        },
        {
            id: 3,
            nome: "Virgil van Dijk",
            clube: "Liverpool",
            nacionalidade: "Holanda",
            posicao: "Zagueiro",
            estatisticas: {
                overall: 90,
                pace: 75,
                shooting: 60,
                passing: 70,
                dribbling: 65,
                defending: 90,
                physical: 88
            }
        },
        {
            id: 4,
            nome: "Lionel Messi",
            clube: "Paris Saint-Germain",
            nacionalidade: "Argentina",
            posicao: "Atacante",
            estatisticas: {
                overall: 93,
                pace: 85,
                shooting: 92,
                passing: 90,
                dribbling: 95,
                defending: 40,
                physical: 70
            }
        },
        {
            id: 5,
            nome: "Cristiano Ronaldo",
            clube: "Al Nassr",
            nacionalidade: "Portugal",
            posicao: "Atacante",
            estatisticas: {
                overall: 88,
                pace: 80,
                shooting: 90,
                passing: 75,
                dribbling: 85,
                defending: 35,
                physical: 80
            }
        },
        {
            id: 6,
            nome: "N'Golo Kanté",
            clube: "Chelsea",
            nacionalidade: "França",
            posicao: "Meio-campo",
            estatisticas: {
                overall: 87,
                pace: 78,
                shooting: 65,
                passing: 75,
                dribbling: 70,
                defending: 85,
                physical: 80
            }
        },
        {
            id: 7,
            nome: "Karim Benzema",
            clube: "Real Madrid",
            nacionalidade: "França",
            posicao: "Atacante",
            estatisticas: {
                overall: 90,
                pace: 76,
                shooting: 89,
                passing: 80,
                dribbling: 87,
                defending: 45,
                physical: 76
            }
        },
        {
            id: 8,
            nome: "Kylian Mbappé",
            clube: "Paris Saint-Germain",
            nacionalidade: "França",
            posicao: "Atacante",
            estatisticas: {
                overall: 91,
                pace: 97,
                shooting: 88,
                passing: 82,
                dribbling: 90,
                defending: 30,
                physical: 78
            }
        },
        {
            id: 9,
            nome: "Robert Lewandowski",
            clube: "FC Barcelona",
            nacionalidade: "Polônia",
            posicao: "Atacante",
            estatisticas: {
                overall: 92,
                pace: 82,
                shooting: 95,
                passing: 75,
                dribbling: 85,
                defending: 40,
                physical: 80
            }
        },
        {
            id: 10,
            nome: "Alisson Becker",
            clube: "Liverpool",
            nacionalidade: "Brasil",
            posicao: "Goleiro",
            estatisticas: {
                overall: 89,
                pace: 60,
                shooting: 20,
                passing: 70,
                dribbling: 50,
                defending: 85,
                physical: 80
            }
        }
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

export const CreatePlayer = async (player: playersModel): Promise<playersModel> => {
    database.push(player)
    return player
}
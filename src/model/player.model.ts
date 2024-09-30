export interface playersModel {
    id: number
    nome: string
    clube: string
    nacionalidade: string
    posicao: string
    estatisticas: {
        overall: number
        pace: number
        shooting: number
        passing: number
        dribbling: number
        defending: number
        physical: number
    }
}

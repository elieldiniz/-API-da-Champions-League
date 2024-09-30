import { HttpResponse } from "../model/HttpResponse.model"

export const ok = async (data: any ): Promise<HttpResponse> =>{
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}

export const noContent = async (): Promise<HttpResponse> =>{
    return {
       statusCode: 204,
       body: ''
    }
}
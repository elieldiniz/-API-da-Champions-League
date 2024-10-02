import { HttpResponse } from "../model/HttpResponse.model"

export const ok = async (data: any ): Promise<HttpResponse> =>{
    return {
        statusCode: 200,
        body: data
    }
}

export const noContent = async (): Promise<HttpResponse> =>{
    return {
       statusCode: 204,
       body: ''
    }
}

export const badyRequest = async (): Promise<HttpResponse> =>{
    return {
       statusCode: 400,
       body: null
    }
}

export const Creat = async (): Promise<HttpResponse> =>{
    return {
       statusCode: 201,
       body: {
         message: "Created Successfully"
       }
    }
}

export function notFound(p0: string): any {
    throw new Error("Function not implemented.")
}

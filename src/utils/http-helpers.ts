interface HttpResponse {
    statusCode: number,
    body: string
}

export const ok = async (data: any ): Promise<HttpResponse> =>{
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}
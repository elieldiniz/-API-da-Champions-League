
interface RetryOptions {
    retries: number;
    delay: number;
}

let failureCount = 0;
const MAX_FAILURES = 5;
let circuitOpen = false;

export const retry = async (fn: () => Promise<any>, options: RetryOptions): Promise<any> => {
    let attempt = 0;
    
    while (attempt < options.retries) {
        try {
            return await fn();
        } catch (error) {
            attempt++;
            if (attempt >= options.retries) {
                throw new Error('Maximum retries exceeded');
            }
            await new Promise(res => setTimeout(res, options.delay));
        }
    }
};

export const circuitBreaker = async (fn: () => Promise<any>): Promise<any> => {
    if (circuitOpen) {
        throw new Error('Circuit is open. Please try again later.');
    }

    try {
        const response = await fn();
        failureCount = 0;
        return response;
    } catch (error) {
        failureCount++;
        if (failureCount >= MAX_FAILURES) {
            circuitOpen = true;
            setTimeout(() => { circuitOpen = false; }, 30000); 
        }
        throw error;
    }
};

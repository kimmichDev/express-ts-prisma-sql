export class HttpException extends Error {
    public success: boolean;
    public code: ErrorCode;
    public message: string;


    constructor(success: boolean = false, code: ErrorCode, message: any) {
        super(message);
        this.success = success;
        this.code = code;
        this.message = message;
    }
}

export enum ErrorCode {
    'NOT_FOUND' = 404,
    'BAD_REQUEST' = 400
}
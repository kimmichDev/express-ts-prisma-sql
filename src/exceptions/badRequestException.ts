import { ErrorCode, HttpException } from ".";

export class BadRequestException extends HttpException {
    constructor(success: boolean = false, code: ErrorCode = ErrorCode.BAD_REQUEST, message: any = 'bad request') {
        super(success, code, message)
    }
}
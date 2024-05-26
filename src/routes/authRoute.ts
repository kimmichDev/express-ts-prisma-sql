import { NextFunction, Request, Response, Router } from "express";
import { matchedData } from "express-validator";
import { hashSync } from 'bcrypt';
import { signup } from "../services/authService";
import { UserType } from "../types/userType";
import { validateSignupUserRequest } from "../validations/signupUser";
import { BadRequestException } from "../exceptions/badRequestException";
import { ErrorCode } from "../exceptions";

const router = Router();

router.post('/signup', validateSignupUserRequest, async function (req: Request, res: Response, next: NextFunction) {
    const data: UserType = matchedData(req);
    data.password = hashSync(data.password, 8);
    const user = await signup(data);
    if (!user)
        return next(new BadRequestException(false, ErrorCode.BAD_REQUEST, 'User already exist'))
    return res.json(user)
})

export { router as authRoutes }
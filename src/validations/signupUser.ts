import { UserGender } from '@prisma/client'
import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { BadRequestException } from '../exceptions/badRequestException';
import { ErrorCode } from '../exceptions';

export const validateSignupUserRequest = [
    body('name').isString(),
    body('email').isEmail().isString(),
    body('gender').isIn([UserGender.FEMALE, UserGender.MALE]),
    body('age').isNumeric().optional(),
    body('password').isString(),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new BadRequestException(false, ErrorCode.BAD_REQUEST, errors.array()))
        }
        next();
    }
]
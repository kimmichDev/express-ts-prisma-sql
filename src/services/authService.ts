import { User } from "@prisma/client";
import { db } from "../db";
import { UserType } from "../types/userType";
import { BadRequestException } from "../exceptions/badRequestException";
import { ErrorCode } from "../exceptions";

export async function signup(data: UserType): Promise<User | null> {
    const isUserExist = await db.user.findFirst({
        where: { email: data.email }
    })
    if (isUserExist) {
        return null;
    }
    return await db.user.create({
        data
    })
}
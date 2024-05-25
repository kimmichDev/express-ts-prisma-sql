import { User } from "@prisma/client";
import { db } from "../db";

export async function getAllUsers(): Promise<User[]> {
    const users = await db.user.findMany();
    return users;
}
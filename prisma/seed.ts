import { db } from "../src/db"
import { UserType } from "../src/types/userType";

const users: Omit<UserType, 'id'>[] = [
    {
        name: 'James',
        email: 'james@gmail.com',
        gender: 'MALE',
        age: 23
    },
    {
        name: 'Kim',
        email: 'kim@gmail.com',
        gender: 'MALE',
        age: 25
    }
];

async function main(): Promise<void> {
    users.forEach(async (user) => {
        await db.user.create({ data: user })

    })
}
main()
    .then(async () => {
        await db.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await db.$disconnect()
        process.exit(1)
    })
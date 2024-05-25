import { NextFunction, Request, Response, Router } from "express";
import { getAllUsers } from "../services/userService";

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const users = await getAllUsers();
    return res.json(users);
})

export { router as userRoutes }
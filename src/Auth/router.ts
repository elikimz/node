import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { registerUser, loginUser, getOneUserData } from './controller'
import { registerUserSchema, loginUserSchema } from '../validators'
import { usersRouter } from '../users/user.router';

export const authRouter = new Hono();


authRouter.post('/register', zValidator('json', registerUserSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), registerUser)


usersRouter.get("/Users/:id",getOneUserData)

authRouter.post('/login', zValidator('json', loginUserSchema, (result, c) => {
    if (!result.success) {
        return c.json(result.error, 400)
    }
}), loginUser)
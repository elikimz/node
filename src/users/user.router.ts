import { Hono } from "hono";
import { deleteUsersData, getAllUsersData,getOneUserData,InsertUsersData} from "./user.controller";

export const usersRouter = new Hono()

usersRouter.get("/Users", getAllUsersData)
usersRouter.get("/Users/:id",getOneUserData)
usersRouter.delete("/Users/:id",deleteUsersData)
usersRouter.post("/insert",InsertUsersData)
// usersRouter.post("/login",loginUsersData)
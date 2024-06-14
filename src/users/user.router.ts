import { Hono } from "hono";
import { deleteUsersData, getAllUsersData,getOneUserData,InsertUsersData,updateUsersData} from "./user.controller";
export const usersRouter = new Hono();
import { adminRoleAuthorisation } from "../middleware/Authorisation";

usersRouter.get("/users",adminRoleAuthorisation, getAllUsersData)
usersRouter.get("/users/:id",getOneUserData)
usersRouter.delete("/users/:id",adminRoleAuthorisation,deleteUsersData)
usersRouter.post("/users",InsertUsersData)
usersRouter.put("/users/:id",updateUsersData)
// usersRouter.post("/login",loginUsersData)
import { Hono } from "hono";
import { deleteUsersData, getAllUsersData,getOneUserData,InsertUsersData,updateUsersData} from "./user.controller";
export const usersRouter = new Hono();
import { Authorisation } from "../middleware/Authorisation";

usersRouter.get("/Users",Authorisation, getAllUsersData)
usersRouter.get("/Users/:id",getOneUserData)
usersRouter.delete("/Users/:id",deleteUsersData)
usersRouter.post("/insert",InsertUsersData)
usersRouter.put("/update/:id",updateUsersData)
// usersRouter.post("/login",loginUsersData)
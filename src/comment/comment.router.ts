import { Hono } from "hono";
import { InsertcommentData, deletecommentData, getAllcommentData, getOnecommentData, updatecommentData } from "./comment.controller";
import { adminRoleAuthorisation } from "../middleware/Authorisation";
 export const commentRouter=new Hono()

 commentRouter.get("/comment",adminRoleAuthorisation,getAllcommentData)
 commentRouter.get("/comment/:id",getOnecommentData)
 commentRouter.post("/insert",InsertcommentData)
 commentRouter.delete("/delete/:id",adminRoleAuthorisation,deletecommentData)
 commentRouter.put("/update/:id",updatecommentData)
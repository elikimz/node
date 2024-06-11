import { Hono } from "hono";
import { InsertcommentData, deletecommentData, getAllcommentData, getOnecommentData, updatecommentData } from "./comment.controller";


 export const commentRouter=new Hono()

 commentRouter.get("/comment",getAllcommentData)
 commentRouter.get("/comment/:id",getOnecommentData)
 commentRouter.post("/insert",InsertcommentData)
 commentRouter.delete("/delete/:id",deletecommentData)
 commentRouter.put("/update/:id",updatecommentData)
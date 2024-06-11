import { Hono } from "hono";
import { InsertordersData, deleteordersData, getAllordersData, getOneordersData, updateordersData } from "./orders.controller";


 export const ordersRouter=new Hono()

 ordersRouter.get("/orders",getAllordersData)
 ordersRouter.get("/orders/:id",getOneordersData)
 ordersRouter.post("/insert",InsertordersData)
 ordersRouter.delete("/delete/:id",deleteordersData)
 ordersRouter.put("/update/:id",updateordersData)
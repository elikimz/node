import { Hono } from "hono";
import { InsertordersData, deleteordersData, getAllordersData, getOneordersData, updateordersData } from "./orders.controller";


 export const ordersRouter=new Hono()

 ordersRouter.get("/orders",getAllordersData)
 ordersRouter.get("/orders/:id",getOneordersData)
 ordersRouter.post("/orders",InsertordersData)
 ordersRouter.delete("/orders/:id",deleteordersData)
 ordersRouter.put("/orders/:id",updateordersData)
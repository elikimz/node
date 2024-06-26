import { Hono } from "hono";
import { Insertorder_statusData, deleteorder_statusData, getAllorder_statusData, getOneorder_statusData, updateorder_statusData } from "./order_status.controller";


 export const order_statusRouter=new Hono()

 order_statusRouter.get("/order_status",getAllorder_statusData)
 order_statusRouter.get("/order_status/:id",getOneorder_statusData)
 order_statusRouter.post("/order_status",Insertorder_statusData)
 order_statusRouter.delete("/order_status/:id",deleteorder_statusData)
 order_statusRouter.put("/order_status/:id",updateorder_statusData)
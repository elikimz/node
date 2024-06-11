import { Hono } from "hono";
import { InsertdriverData, deletedriverData, getAlldriverData, getOnedriverData, updatedriverData } from "./driver.controller";


 export const driverRouter=new Hono()

 driverRouter.get("/driver",getAlldriverData)
 driverRouter.get("/driver/:id",getOnedriverData)
 driverRouter.post("/insert",InsertdriverData)
 driverRouter.delete("/delete/:id",deletedriverData)
 driverRouter.put("/update/:id",updatedriverData)
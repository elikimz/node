import { Hono } from "hono";
import { InsertdriverData, deletedriverData, getAlldriverData, getOnedriverData, updatedriverData } from "./driver.controller";


 export const driverRouter=new Hono()

 driverRouter.get("/driver",getAlldriverData)
 driverRouter.get("/driver/:id",getOnedriverData)
 driverRouter.post("/driver",InsertdriverData)
 driverRouter.delete("driver/:id",deletedriverData)
 driverRouter.put("/driver/:id",updatedriverData)
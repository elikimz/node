import { Hono } from "hono";
import { deletestatus_catalogData, getAllstatus_catalogData,getOnestatus_catalogData,Insertstatus_catalogData} from "./status_catalog.controller";

export const  status_catalogRouter = new Hono()

status_catalogRouter.get("/status_catalog", getAllstatus_catalogData)
status_catalogRouter.get("/status_catalog/:id",getOnestatus_catalogData)
status_catalogRouter.delete("/status_catalog/:id",deletestatus_catalogData)
status_catalogRouter.post("/status_catalog",Insertstatus_catalogData)
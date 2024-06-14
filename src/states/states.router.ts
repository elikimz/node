import { Hono } from "hono";
import { InsertStateData, deleteStateData, getAllStatesData, getOneStateData, updateStateData } from "./states.controller";


 export const stateRouter=new Hono()

stateRouter.get("/states",getAllStatesData)
stateRouter.get("/states/:id",getOneStateData)
stateRouter.post("/states",InsertStateData)
stateRouter.delete("/states/:id",deleteStateData)
stateRouter.put("/states/:id",updateStateData)
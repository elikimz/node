import { Hono } from "hono";
import { InsertStateData, deleteStateData, getAllStatesData, getOneStateData, updateStateData } from "./states.controller";


 export const stateRouter=new Hono()

stateRouter.get("/states",getAllStatesData)
stateRouter.get("/state/:id",getOneStateData)
stateRouter.post("/insert",InsertStateData)
stateRouter.delete("/delete/:id",deleteStateData)
stateRouter.put("/update/:id",updateStateData)
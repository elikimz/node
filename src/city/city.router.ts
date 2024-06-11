import { Hono } from "hono";
import {getAllcityData,getOnecityData ,deletecityData,InsertcityData} from "./city.controller";

export const cityRouter = new Hono()

cityRouter.get("/city", getAllcityData)
cityRouter.get("/city/:id",getOnecityData)
cityRouter.delete("/city/:id",deletecityData)
cityRouter.post("/insert",InsertcityData)
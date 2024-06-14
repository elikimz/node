import { Hono } from "hono";
import { Insertrestaurant_ownerData, deleterestaurant_ownerData, getAllrestaurant_ownerData, getOnerestaurant_ownerData, updaterestaurant_ownerData } from "./restaurant_owner.controller";


 export const restaurant_ownerRouter=new Hono()

restaurant_ownerRouter.get("/restaurant_owner",getAllrestaurant_ownerData)
restaurant_ownerRouter.get("/restaurant_owner/:id",getOnerestaurant_ownerData)
restaurant_ownerRouter.post("/restaurant_owner",Insertrestaurant_ownerData)
restaurant_ownerRouter.delete("/restaurant_owner/:id",deleterestaurant_ownerData)
restaurant_ownerRouter.put("/restaurant_owner/:id",updaterestaurant_ownerData)
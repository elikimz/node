import { Hono } from "hono";
import { InsertrestaurantData, deleterestaurantData, getAllrestaurantData, getOnerestaurantData, updaterestaurantData } from "./restaurant.controller";


 export const restaurantRouter=new Hono()

restaurantRouter.get("/restaurant",getAllrestaurantData)
restaurantRouter.get("/restaurant/:id",getOnerestaurantData)
restaurantRouter.post("/restaurant",InsertrestaurantData)
restaurantRouter.delete("/restaurant/:id",deleterestaurantData)
restaurantRouter.put("/restaurant/:id",updaterestaurantData)
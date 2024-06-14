import { Hono } from "hono";
import { InsertcategoryData, deletecategoryData, getAllcategoryData, getOnecategoryData, updatecategoryData,getcategoryrelation } from "./category.controller";


 export const categoryRouter=new Hono()

 categoryRouter.get("/category",getAllcategoryData)
 categoryRouter.get("/category/:id",getOnecategoryData)
 categoryRouter.post("/category",InsertcategoryData)
 categoryRouter.delete("/category/:id",deletecategoryData)
 categoryRouter.put("/category/:id",updatecategoryData)
 
 categoryRouter.get("/categoryrelation", getcategoryrelation)
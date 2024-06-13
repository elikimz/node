import { Hono } from "hono";
import { InsertcategoryData, deletecategoryData, getAllcategoryData, getOnecategoryData, updatecategoryData,getcategoryrelation } from "./category.controller";


 export const categoryRouter=new Hono()

 categoryRouter.get("/category",getAllcategoryData)
 categoryRouter.get("/category/:id",getOnecategoryData)
 categoryRouter.post("/insert",InsertcategoryData)
 categoryRouter.delete("/delete/:id",deletecategoryData)
 categoryRouter.put("/update/:id",updatecategoryData)
 
 categoryRouter.get("/categoryrelation", getcategoryrelation)
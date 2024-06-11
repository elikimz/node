import { Hono } from "hono";
import {deleteAddressData, getAllAddressData, getOneAddressData,InsertAddressData,updateAddressData} from "./address.controller";

export const addressRouter=new Hono()


addressRouter.get("/address",getAllAddressData)
addressRouter.get("/address/:id",getOneAddressData)
addressRouter.delete("/address/:id",deleteAddressData)
addressRouter.post("/insert",InsertAddressData)
addressRouter.put("/update/:id",updateAddressData)
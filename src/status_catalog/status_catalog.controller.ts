import { Context } from "hono";
import {  Insertstatus_catalog, deletestatus_catalog, getAllstatus_catalog, getOnestatus_catalog } from "./status_catalog.service";
import { any, number } from "zod";

export const getAllstatus_catalogData = async(c: Context) => {
    try {
        const data = await getAllstatus_catalog()
        return c.json(data, 200)
    } catch (err) {
        return c.json({ "message": err },500)
    }
}
export const getOnestatus_catalogData =async(c: Context)=>{
    const id = c.req.param("id");
    const data=await getOnestatus_catalog(Number(id))
    return c.json(data,200)


}

export const deletestatus_catalogData =async(c: Context)=>{
    const id=c.req.param("id")
    const data=await deletestatus_catalog(Number(id))
    return c.json(data,200)
    
}
export const Insertstatus_catalogData =async(c: Context)=>{
   

    try{
        const data=await c.req.json();
        const result = await Insertstatus_catalog(data);
        return c.json(result,200)
    }catch(err) {
    
        return c.json({"message":err},400)
    }
}
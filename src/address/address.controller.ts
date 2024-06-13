import { Context } from "hono";
import {  getAllAddress,getOneAddress,deleteAddress,InsertAddress, updateaddress,getAllAddressWithRelationservice } from "./address.service";
import { any, number } from "zod";

export const getAllAddressData = async(c: Context) => {
    try {
        const data = await getAllAddress()
        return c.json(data, 200)
    } catch (err) {
        return c.json({ "message": err },500)
    }
} 
export const getOneAddressData = async(c:Context)=>{
    const id = c.req.param("id");
    const data=await getOneAddress(Number(id))
    return c.json(data,200)
}
export const deleteAddressData=async(c:Context)=>{
    const id=c.req.param("id")
    const data=await deleteAddress(Number(id))
    return c.json(data,200)
}
export const InsertAddressData = async(c:Context)=>{
    
    try {
        const data=await c.req.json();
        const result = await InsertAddress(data);
        return c.json(result,200)
    }catch(err) {
    
        return c.json({"message":err},400)
    }
}
    

export const updateAddressData = async (c: Context) => {
    const id = c.req.param("id");
    try {
        const data = await c.req.json();
        const result = await updateaddress(Number(id), data);   
             return c.json(result, 200);
    } catch (err) {
        return c.json({ "message": err }, 400);
    }
}


export const getAllAddressWithRelation = async(c:Context)=>{
    const id = c.req.param("id");
    const data=await getAllAddressWithRelationservice();
    return c.json(data,200)
}
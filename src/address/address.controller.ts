import { Context } from "hono";
import {  getAllAddress,getOneAddress,deleteAddress,InsertAddress, updateaddress } from "./address.service";
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
    

export const updateAddressData =async(c: Context)=>{
    const id=c.req.param("id")
    const data=await updateaddress(Number(id))
    return c.json(data,200)
}
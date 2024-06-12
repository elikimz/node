import { Context } from "hono";
import {  getAllcity, getOnecity ,deletecity,insertcity,updatecity} from "./city.service";
import { any, number } from "zod";

export const getAllcityData = async(c: Context) => {
    try {
        const data = await getAllcity()
        return c.json(data, 200)
    } catch (err) {
        return c.json({ "message": err },500)
    }
}
export const getOnecityData =async(c: Context)=>{
    const id = c.req.param("id");
    const data=await getOnecity(Number(id))
    return c.json(data,200)


}

export const deletecityData =async(c: Context)=>{
    const id=c.req.param("id")
    const data=await deletecity(Number(id))
    return c.json(data,200)
    
}
export const InsertcityData =async(c: Context)=>{
   

    try{
        const data=await c.req.json();
        const result = await insertcity(data);
        return c.json(result,200)
    }catch(err) {
    
        return c.json({"message":err},400)
    }
}
export const updatecityData = async (c: Context) => {
    const id = c.req.param("id");
    try {
        const data = await c.req.json();
        const result = await updatecity(Number(id), data);   
             return c.json(result, 200);
    } catch (err) {
        return c.json({ "message": err }, 400);
    }
}
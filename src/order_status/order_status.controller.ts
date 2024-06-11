import { Context } from "hono";
import { Insertorder_status, deleteorder_status, getAllorder_status, getOneorder_status, updateorder_status} from "./order_status.service";
import { any } from "zod";

export const getAllorder_statusData =async(c: Context)=>{
    const data=await getAllorder_status()
    return c.json(data,200)

}
export const getOneorder_statusData =async(c: Context)=>{
    const id = c.req.param("id");
    const data=await getOneorder_status(Number(id))
    return c.json(data,200)


}
export const Insertorder_statusData =async(c: Context)=>{
   

    try{
        const data=await c.req.json();
        const result = await Insertorder_status(data);
        return c.json(result,200)
    }catch(err) {
    
        return c.json({"message":err},400)
    }
}
export const deleteorder_statusData =async(c: Context)=>{
    const id=c.req.param("id")
    const data=await deleteorder_status(Number(id))
    return c.json(data,200)
    
}
export const updateorder_statusData =async(c: Context)=>{
    const id=c.req.param("id")
    const data=await updateorder_status(Number(id))
    return c.json(data,200)
}
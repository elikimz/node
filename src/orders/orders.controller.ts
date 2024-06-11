import { Context } from "hono";
import { Insertorders, deleteorders, getAllorders, getOneorders, updateorders} from "./orders.service";
import { any } from "zod";

export const getAllordersData =async(c: Context)=>{
    const data=await getAllorders()
    return c.json(data,200)

}
export const getOneordersData =async(c: Context)=>{
    const id = c.req.param("id");
    const data=await getOneorders(Number(id))
    return c.json(data,200)


}
export const InsertordersData =async(c: Context)=>{
   

    try{
        const data=await c.req.json();
        const result = await Insertorders(data);
        return c.json(result,200)
    }catch(err) {
    
        return c.json({"message":err},400)
    }
}
export const deleteordersData =async(c: Context)=>{
    const id=c.req.param("id")
    const data=await deleteorders(Number(id))
    return c.json(data,200)
    
}
export const updateordersData =async(c: Context)=>{
    const id=c.req.param("id")
    const data=await updateorders(Number(id))
    return c.json(data,200)
}
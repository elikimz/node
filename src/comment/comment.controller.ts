import { Context } from "hono";
import { Insertcomment, deletecomment, getAllcomment, getOnecomment, updatecomment} from "./comment.service";
import { any } from "zod";

export const getAllcommentData =async(c: Context)=>{
    const data=await getAllcomment()
    return c.json(data,200)

}
export const getOnecommentData =async(c: Context)=>{
    const id = c.req.param("id");
    const data=await getOnecomment(Number(id))
    return c.json(data,200)


}
export const InsertcommentData =async(c: Context)=>{
   

    try{
        const data=await c.req.json();
        const result = await Insertcomment(data);
        return c.json(result,200)
    }catch(err) {
    
        return c.json({"message":err},400)
    }
}
export const deletecommentData =async(c: Context)=>{
    const id=c.req.param("id")
    const data=await deletecomment(Number(id))
    return c.json(data,200)
    
}
export const updatecommentData =async(c: Context)=>{
    const id=c.req.param("id")
    const data=await updatecomment(Number(id))
    return c.json(data,200)
}
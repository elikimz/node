import { Context } from "hono";
import { Insertcategory, deletecategory, getAllcategory, getOnecategory, updatecategory} from "./category.service";
import { any } from "zod";

export const getAllcategoryData =async(c: Context)=>{
    const data=await getAllcategory()
    return c.json(data,200)

}
export const getOnecategoryData =async(c: Context)=>{
    const id = c.req.param("id");
    const data=await getOnecategory(Number(id))
    return c.json(data,200)


}
export const InsertcategoryData =async(c: Context)=>{
   

    try{
        const data=await c.req.json();
        const result = await Insertcategory(data);
        return c.json(result,200)
    }catch(err) {
    
        return c.json({"message":err},400)
    }
}
export const deletecategoryData =async(c: Context)=>{
    const id=c.req.param("id")
    const data=await deletecategory(Number(id))
    return c.json(data,200)
    
}
export const updatecategoryData =async(c: Context)=>{
    const id=c.req.param("id")
    const data=await updatecategory(Number(id))
    return c.json(data,200)
}
import { Context } from "hono";
import { Insertrestaurant_owner, deleterestaurant_owner, getAllrestaurant_owner, getOnerestaurant_owner, updaterestaurant_owner} from "./restaurant_owner.service";
import { any } from "zod";

export const getAllrestaurant_ownerData =async(c: Context)=>{
    const data=await getAllrestaurant_owner()
    return c.json(data,200)

}
export const getOnerestaurant_ownerData =async(c: Context)=>{
    const id = c.req.param("id");
    const data=await getOnerestaurant_owner(Number(id))
    return c.json(data,200)


}
export const Insertrestaurant_ownerData =async(c: Context)=>{
   

    try{
        const data=await c.req.json();
        const result = await Insertrestaurant_owner(data);
        return c.json(result,200)
    }catch(err) {
    
        return c.json({"message":err},400)
    }
}
export const deleterestaurant_ownerData =async(c: Context)=>{
    const id=c.req.param("id")
    const data=await deleterestaurant_owner(Number(id))
    return c.json(data,200)
    
}
export const updaterestaurant_ownerData = async (c: Context) => {
    const id = c.req.param("id");
    try {
        const data = await c.req.json();
        const result = await updaterestaurant_owner(Number(id), data);   
             return c.json(result, 200);
    } catch (err) {
        return c.json({ "message": err }, 400);
    }
}
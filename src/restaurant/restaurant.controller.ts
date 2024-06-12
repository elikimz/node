import { Context } from "hono";
import { Insertrestaurant, deleterestaurant, getAllrestaurant, getOnerestaurant, updaterestaurant} from "./restaurant.service";
import { any } from "zod";

export const getAllrestaurantData =async(c: Context)=>{
    const data=await getAllrestaurant()
    return c.json(data,200)

}
export const getOnerestaurantData =async(c: Context)=>{
    const id = c.req.param("id");
    const data=await getOnerestaurant(Number(id))
    return c.json(data,200)


}
export const InsertrestaurantData =async(c: Context)=>{
   

    try{
        const data=await c.req.json();
        const result = await Insertrestaurant(data);
        return c.json(result,200)
    }catch(err) {
    
        return c.json({"message":err},400)
    }
}
export const deleterestaurantData =async(c: Context)=>{
    const id=c.req.param("id")
    const data=await deleterestaurant(Number(id))
    return c.json(data,200)
    
}
export const updaterestaurantData = async (c: Context) => {
    const id = c.req.param("id");
    try {
        const data = await c.req.json();
        const result = await updaterestaurant(Number(id), data);   
             return c.json(result, 200);
    } catch (err) {
        return c.json({ "message": err }, 400);
    }
}
import { Context } from "hono";
import { Insertdriver, deletedriver, getAlldriver, getOnedriver, updatedriver} from "./driver.service";
import { any } from "zod";

export const getAlldriverData =async(c: Context)=>{
    const data=await getAlldriver()
    return c.json(data,200)

}
export const getOnedriverData =async(c: Context)=>{
    const id = c.req.param("id");
    const data=await getOnedriver(Number(id))
    return c.json(data,200)


}
export const InsertdriverData =async(c: Context)=>{
   

    try{
        const data=await c.req.json();
        const result = await Insertdriver(data);
        return c.json(result,200)
    }catch(err) {
    
        return c.json({"message":err},400)
    }
}
export const deletedriverData =async(c: Context)=>{
    const id=c.req.param("id")
    const data=await deletedriver(Number(id))
    return c.json(data,200)
    
}
export const updatedriverData =async(c: Context)=>{
    const id=c.req.param("id")
    const data=await updatedriver(Number(id))
    return c.json(data,200)
}
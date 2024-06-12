import { Context } from "hono";
import { InsertState, deleteState, getAllStates, getOneState, updatestates } from "./states.services";
import { any } from "zod";

export const getAllStatesData =async(c: Context)=>{
    const data=await getAllStates()
    return c.json(data,200)

}
export const getOneStateData =async(c: Context)=>{
    const id = c.req.param("id");
    const data=await getOneState(Number(id))
    return c.json(data,200)


}
export const InsertStateData =async(c: Context)=>{
   

    try{
        const data=await c.req.json();
        const result = await InsertState(data);
        return c.json(result,200)
    }catch(err) {
    
        return c.json({"message":err},400)
    }
}
export const deleteStateData =async(c: Context)=>{
    const id=c.req.param("id")
    const data=await deleteState(Number(id))
    return c.json(data,200)
    
}
export const updateStateData = async (c: Context) => {
    const id = c.req.param("id");
    try {
        const data = await c.req.json();
        const result = await updatestates(Number(id), data);  
     return c.json(result, 200);
    } catch (err) {
        return c.json({ "message": err }, 400);
    }
}

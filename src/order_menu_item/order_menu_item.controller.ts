import { Context } from "hono";
import { Insertorder_menu_item, deleteorder_menu_item, getAllorder_menu_item, getOneorder_menu_item, updateorder_menu_item} from "./order_menu_item.service";
import { any } from "zod";

export const getAllorder_menu_itemData =async(c: Context)=>{
    const data=await getAllorder_menu_item()
    return c.json(data,200)

}
export const getOneorder_menu_itemData =async(c: Context)=>{
    const id = c.req.param("id");
    const data=await getOneorder_menu_item(Number(id))
    return c.json(data,200)


}
export const Insertorder_menu_itemData =async(c: Context)=>{
   

    try{
        const data=await c.req.json();
        const result = await Insertorder_menu_item(data);
        return c.json(result,200)
    }catch(err) {
    
        return c.json({"message":err},400)
    }
}
export const deleteorder_menu_itemData =async(c: Context)=>{
    const id=c.req.param("id")
    const data=await deleteorder_menu_item(Number(id))
    return c.json(data,200)
    
}
export const updateorder_menu_itemData =async(c: Context)=>{
    const id=c.req.param("id")
    const data=await updateorder_menu_item(Number(id))
    return c.json(data,200)
}
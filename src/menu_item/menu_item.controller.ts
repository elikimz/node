import { Context } from "hono";
import { Insertmenu_item, deletemenu_item, getAllmenu_item, getOnemenu_item, updatemenu_item} from "./menu_item.services";
import { any } from "zod";

export const getAllmenu_itemData =async(c: Context)=>{
    const data=await getAllmenu_item()
    return c.json(data,200)

}
export const getOnemenu_itemData =async(c: Context)=>{
    const id = c.req.param("id");
    const data=await getOnemenu_item(Number(id))
    return c.json(data,200)


}
export const Insertmenu_itemData =async(c: Context)=>{
   

    try{
        const data=await c.req.json();
        const result = await Insertmenu_item(data);
        return c.json(result,200)
    }catch(err) {
    
        return c.json({"message":err},400)
    }
}
export const deletemenu_itemData =async(c: Context)=>{
    const id=c.req.param("id")
    const data=await deletemenu_item(Number(id))
    return c.json(data,200)
    
}
export const updatemenu_itemData =async(c: Context)=>{
    const id=c.req.param("id")
    const data=await updatemenu_item(Number(id))
    return c.json(data,200)
}
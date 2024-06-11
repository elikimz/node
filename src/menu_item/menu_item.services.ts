import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { menu_item, menu_itemInsert, menu_itemSelect } from "../drizzle/schema";

export const getAllmenu_item= async (): Promise<menu_itemSelect[] | null>=>{
    
    return await db.query.menu_item.findMany()

}
export const getOnemenu_item= async (id:number):Promise<menu_itemSelect | undefined> =>{
    
 return await db.query.menu_item.findFirst({where:eq(menu_item.id,id)})
} 
export const Insertmenu_item= async (data: menu_itemInsert)=>{
   await db.insert(menu_item).values(data)
   return "state inserted"
} 
export const deletemenu_item= async (id:number)=>{

await db.delete(menu_item).where(eq( menu_item.id,id))
return "deleted successifully"
} 
export const updatemenu_item= async (id:number)=>{
    
    return "updated successfully"

} 
 
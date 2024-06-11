import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { order_menu_item, order_menu_itemInsert, order_menu_itemSelect } from "../drizzle/schema";

export const getAllorder_menu_item= async (): Promise<order_menu_itemSelect[] | null>=>{
    
    return await db.query.order_menu_item.findMany()

}
export const getOneorder_menu_item= async (id:number):Promise<order_menu_itemSelect | undefined> =>{
    
 return await db.query.order_menu_item.findFirst({where:eq(order_menu_item.id,id)})
} 
export const Insertorder_menu_item= async (data: order_menu_itemInsert)=>{
   await db.insert(order_menu_item).values(data)
   return "order inserted"
} 
export const deleteorder_menu_item= async (id:number)=>{

await db.delete(order_menu_item).where(eq( order_menu_item.id,id))
return "deleted successifully"
} 
export const updateorder_menu_item= async (id:number)=>{
    
    return "updated successfully"

} 
 
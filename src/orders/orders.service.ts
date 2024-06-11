import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { orders, ordersInsert, ordersSelect } from "../drizzle/schema";

export const getAllorders= async (): Promise<ordersSelect[] | null>=>{
    
    return await db.query.orders.findMany()

}
export const getOneorders= async (id:number):Promise<ordersSelect | undefined> =>{
    
 return await db.query.orders.findFirst({where:eq(orders.id,id)})
} 
export const Insertorders= async (data: ordersInsert)=>{
   await db.insert(orders).values(data)
   return "state inserted"
} 
export const deleteorders= async (id:number)=>{

await db.delete(orders).where(eq( orders.id,id))
return "deleted successifully"
} 
export const updateorders= async (id:number)=>{
    
    return "updated successfully"

} 
 
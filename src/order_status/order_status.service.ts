import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { order_status, order_statusInsert, order_statusSelect } from "../drizzle/schema";

export const getAllorder_status= async (): Promise<order_statusSelect[] | null>=>{
    
    return await db.query.order_status.findMany()

}
export const getOneorder_status= async (id:number):Promise<order_statusSelect | undefined> =>{
    
 return await db.query.order_status.findFirst({where:eq(order_status.id,id)})
} 
export const Insertorder_status= async (data: order_statusInsert)=>{
   await db.insert(order_status).values(data)
   return "state inserted"
} 
export const deleteorder_status= async (id:number)=>{

await db.delete(order_status).where(eq( order_status.id,id))
return "deleted successifully"
} 
export const updateorder_status= async (id:number)=>{
    
    return "updated successfully"

} 
 
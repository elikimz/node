import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { restaurant_owner, restaurant_ownerInsert, restaurant_ownerSelect } from "../drizzle/schema";

export const getAllrestaurant_owner= async (): Promise<restaurant_ownerSelect[] | null>=>{
    
    return await db.query.restaurant_owner.findMany()

}
export const getOnerestaurant_owner= async (id:number):Promise<restaurant_ownerSelect | undefined> =>{
    
 return await db.query.restaurant_owner.findFirst({where:eq(restaurant_owner.id,id)})
} 
export const Insertrestaurant_owner= async (data: restaurant_ownerInsert)=>{
   await db.insert(restaurant_owner).values(data)
   return "state inserted"
} 
export const deleterestaurant_owner= async (id:number)=>{

await db.delete(restaurant_owner).where(eq( restaurant_owner.id,id))
return "deleted successifully"
} 
export const updaterestaurant_owner= async (id:number,data:Partial<restaurant_ownerInsert>)=>{
    await db.update(restaurant_owner).set(data).where(eq(restaurant_owner.id,id));
       return "updated successfully"
   
  }
 
 
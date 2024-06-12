import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { restaurant, restaurantInsert, restaurantSelect } from "../drizzle/schema";

export const getAllrestaurant= async (): Promise<restaurantSelect[] | null>=>{
    
    return await db.query.restaurant.findMany()

}
export const getOnerestaurant= async (id:number):Promise<restaurantSelect | undefined> =>{
    
 return await db.query.restaurant.findFirst({where:eq(restaurant.id,id)})
} 
export const Insertrestaurant= async (data: restaurantInsert)=>{
   await db.insert(restaurant).values(data)
   return "restaurant inserted successifuly"
} 
export const deleterestaurant= async (id:number)=>{

await db.delete(restaurant).where(eq( restaurant.id,id))
return "deleted successifully"
} 
export const updaterestaurant= async (id:number,data:Partial<restaurantInsert>)=>{
    await db.update(restaurant).set(data).where(eq(restaurant.id,id));
       return "updated successfully"
   
  }
 
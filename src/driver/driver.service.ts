import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { driver,  driverInsert,  driverSelect } from "../drizzle/schema";

export const getAlldriver= async (): Promise<driverSelect[] | null>=>{
    
    return await db.query.driver.findMany()

}
export const getOnedriver= async (id:number):Promise<driverSelect | undefined> =>{
    
 return await db.query.driver.findFirst({where:eq(driver.id,id)})
} 
export const Insertdriver= async (data: driverInsert)=>{
   await db.insert(driver).values(data)
   return "driver inserted successfully"
} 
export const deletedriver= async (id:number)=>{

await db.delete(driver).where(eq( driver.id,id))
return "deleted successifully"
} 
export const updatedriver= async (id:number)=>{
    
    return "updated successfully"

} 
 
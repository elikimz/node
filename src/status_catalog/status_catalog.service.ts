
import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { status_catalog,  status_catalogInsert,  status_catalogSelect } from "../drizzle/schema";

export const getAllstatus_catalog= async (): Promise< status_catalogSelect[] | null>=>{
    
    return await db.query. status_catalog.findMany()

}
export const getOnestatus_catalog= async (id:number):Promise< status_catalogSelect | undefined> =>{
    
 return await db.query. status_catalog.findFirst({where:eq( status_catalog.id,id)})
} 
export const Insertstatus_catalog= async (data:  status_catalogInsert)=>{
   await db.insert( status_catalog).values(data)
   return "state inserted"
} 
export const deletestatus_catalog= async (id:number)=>{

await db.delete( status_catalog).where(eq(  status_catalog.id,id))
return "deleted successifully"
} 
export const updatestatus_catalog= async (id:number)=>{
    
    return "updated successfully"

} 
 
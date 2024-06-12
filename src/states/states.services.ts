
import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { address, state, stateInsert, stateSelect } from "../drizzle/schema";

export const getAllStates= async (): Promise<stateSelect[] | null>=>{
    
    return await db.query.state.findMany()

}
export const getOneState= async (id:number):Promise<stateSelect | undefined> =>{
    
 return await db.query.state.findFirst({where:eq(state.id,id)})
} 
export const InsertState= async (data: stateInsert)=>{
   await db.insert(state).values(data)
   return "state inserted"
} 
export const deleteState= async (id:number)=>{

await db.delete(state).where(eq(state.id,id))
return "deleted successifully"
} 



export const updatestates= async (id:number,data:Partial<stateInsert>)=>{
    await db.update(state).set(data).where(eq(state.id,id));
       return "updated successfully"
   
   } 
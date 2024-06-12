import { eq } from "drizzle-orm";
import db from "../drizzle/db";

import { address, addressInsert, addressSelect } from "../drizzle/schema";

export const getAllAddress = async (): Promise<addressSelect[] | null> => {
  return await db.query.address.findMany()
}
export const getOneAddress = async (id:number): Promise<addressSelect | undefined> => {
  return await db.query.address.findFirst({where:eq(address.id,id)})
} 
export const deleteAddress= async (id:number)=>{

await db.delete(address).where(eq(address.id,id))
return "deleted successifully"
} 
export const InsertAddress= async (data:addressInsert)=>{
   await db.insert(address).values(data)
   return "address inserted"
} 

export const updateaddress= async (id:number,data:Partial<addressInsert>)=>{
  await db.update(address).set(data).where(eq(address.id,id));
     return "updated successfully"
 
} 
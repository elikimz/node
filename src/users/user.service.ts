import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { users, usersInsert, usersSelect } from "../drizzle/schema";
import { Context } from "hono";

export const getAllUsers = async (): Promise<usersSelect[] | null> => {
    return await db.query.users.findMany()
}
export const getOneUsers= async (id:number):Promise<usersSelect | undefined> =>{
    
      return await db.query.users.findFirst({where:eq(users.id,id)})
} 
 
export const deleteusers= async (id:number)=>{

await db.delete(users).where(eq( users.id,id))
return "deleted successifully"
}
 
export const insertusers= async (data: usersInsert)=>{
   await db.insert(users).values(data)
   return "user inserted successifully"
} 

export const updateusers= async (id:number,data:Partial<usersInsert>)=>{
 await db.update(users).set(data).where(eq(users.id,id));
    return "updated successfully"

} 
// export const loginusers= async (c:Context)=>{
//     const details= await caches.req.json()
//     const users
// }
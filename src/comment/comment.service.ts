import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { comment,  commentInsert,  commentSelect } from "../drizzle/schema";

export const getAllcomment= async (): Promise<commentSelect[] | null>=>{
    
    return await db.query.comment.findMany()

}
export const getOnecomment= async (id:number):Promise<commentSelect | undefined> =>{
    
 return await db.query.comment.findFirst({where:eq(comment.id,id)})
} 
export const Insertcomment= async (data: commentInsert)=>{
   await db.insert(comment).values(data)
   return "state inserted"
} 
export const deletecomment= async (id:number)=>{

await db.delete(comment).where(eq( comment.id,id))
return "deleted successifully"
} 
export const updatecomment= async (id:number)=>{
    
    return "updated successfully"

} 
 
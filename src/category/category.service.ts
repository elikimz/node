import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { category, categoryInsert, categorySelect} from "../drizzle/schema";

export const getAllcategory= async (): Promise<categorySelect[] | null>=>{
    
    return await db.query.category.findMany()

}
export const getOnecategory= async (id:number):Promise<categorySelect | undefined> =>{
    
 return await db.query.category.findFirst({where:eq(category.id,id)})
} 
export const Insertcategory= async (data: categoryInsert)=>{
   await db.insert(category).values(data)
   return "state inserted"
} 
export const deletecategory= async (id:number)=>{

await db.delete(category).where(eq( category.id,id))
return "deleted successifully"
} 
export const updatecategory= async (id:number)=>{
    
    return "updated successfully"

} 

export const getAllcategoryrelation= async (): Promise<categorySelect[] | null>=>{
    
    return await db.query.category.findMany({
        with: {
            menu_item: {
              columns: {
                name:true,
                ingredients:true
              }
            }
        }
    })

}
 
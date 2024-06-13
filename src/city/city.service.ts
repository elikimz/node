import { eq, relations } from "drizzle-orm";
import db from "../drizzle/db";
import { address, city, cityInsert, citySelect, restaurant } from "../drizzle/schema";

export const getAllcity = async (): Promise<citySelect[] | null> => {
    return await db.query.city.findMany()
}
export const getOnecity= async (id:number):Promise<citySelect | undefined> =>{
    
      return await db.query.city.findFirst({where:eq(city.id,id)})
} 
 
export const deletecity= async (id:number)=>{

await db.delete(city).where(eq( city.id,id))
return "deleted successifully"
}
 
export const insertcity= async (data: cityInsert)=>{
   await db.insert(city).values(data)
   return "user inserted successifully"
} 
export const updatecity= async (id:number,data:Partial<cityInsert>)=>{
    await db.update(city).set(data).where(eq(city.id,id));
       return "updated successfully"
   
  } 
//relations

 

export const getAllcityrelation = async (): Promise<citySelect[] | null> => {
    return await db.query.city.findMany({
        with: {
            state: {
                columns: {
                    name: true,
                    code: true
                },
            },
            address: {
                columns: {
                    street_address_1: true,
                    city_id: true
                },
            },
            restaurant:{
                columns: {
                    name:true,
                    street_address:true,
                    zip_code:true
                }
            }
        },
    });
}

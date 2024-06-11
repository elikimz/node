import { Context } from "hono";
import {  insertusers, deleteusers, getAllUsers, getOneUsers } from "./user.service";
import { any, number } from "zod";
import*as bcrypt from "bcrypt";

export const getAllUsersData = async(c: Context) => {
    try {
        const data = await getAllUsers()
        return c.json(data, 200)
    } catch (err) {
        return c.json({ "message": err },500)
    }
}
export const getOneUserData =async(c: Context)=>{
    const id = c.req.param("id");
    const data=await getOneUsers(Number(id))
    return c.json(data,200)


}

export const deleteUsersData =async(c: Context)=>{
    const id=c.req.param("id")
    const data=await deleteusers(Number(id))
    return c.json(data,200)
    
}
export const InsertUsersData =async(c: Context)=>{
   

    try{
        const data=await c.req.json();
        // const password=data.password;
        // const hashedPassword=await bcrypt.hash(password,10);
        // data.password = hashedPassword ;
        const result = await insertusers(data);
        return c.json(result,200)
    }catch(err) {
    
        return c.json({"message":err},400)
    }
}


// export const loginUsers =async(c: Context)=>{
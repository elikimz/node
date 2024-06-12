import { Auth ,AuthOnUser,authOnUser, users, usersSelect} from "../drizzle/schema";
import db from "../drizzle/db";
import { eq, sql } from "drizzle-orm";

export const createAuthUserService = async (user: AuthOnUser): Promise<string | null> => {
    await db.insert(Auth).values(user)
    return "User created successfully";
}


export const getOneUsers= async (id:number):Promise<usersSelect | undefined> =>{
    
    return await db.query.users.findFirst({where:eq(users.id,id)})
} 

export const userLoginService = async (user: AuthOnUser) => {
    const { username, password } = user;
    return await db.query.Auth.findFirst({
        columns: {
            username: true,
            role: true,
            password: true
        }, where: sql` ${Auth.username} = ${username}`,
        with: {
            user: {
                columns: {
                    name: true,
                    contact_phone: true,
                   // address: true,
                    id: true
                }
            }
        }
    })
}
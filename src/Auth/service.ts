import { Auth ,TIAuthOnUser,TSAuthOnUser} from "../drizzle/schema";
import db from "../drizzle/db";
import { sql } from "drizzle-orm";

export const createAuthUserService = async (user: TIAuthOnUser): Promise<string | null> => {
    await db.insert(Auth).values(users)
    return "User created successfully";
}

export const userLoginService = async (user: TSAuthOnUser) => {
    const { username, password } = users;
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
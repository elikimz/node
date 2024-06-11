// import "dotenv/config";
// //import { migrate } from "drizzle-orm/node-postgres/migrator";
// import { migrate } from "drizzle-orm/neon-http/migrator";
// import db, { client } from "./db";

// async function migration() {
//     console.log("====== Migration started =====");
//     await migrate(db, { migrationsFolder: __dirname + "/migrations" });
//     await client.end();
//     console.log("===== Migration ended =====");
//     process.exit(0);
// }

// migration().catch((err) => {
//     console.error("Error during migration:");
//     console.error(err);
//     process.exit(1);
// });

import "dotenv/config";
import pg from "pg";

const { Pool, Client } = pg;
const connectionString = process.env.DATABASE_URL;

export const pool = new Pool({
  allowExitOnIdle: true,
  connectionString,
});

try {
  await pool.query("SELECT NOW()");
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

await pool.end();

export const client = new Client({
  allowExitOnIdle: true,
  connectionString,
});

try {
  await client.connect();
  await client.query("SELECT NOW()");
  console.log(client.connectionParameters);
} catch (error) {
  console.error(error);
}

await client.end();

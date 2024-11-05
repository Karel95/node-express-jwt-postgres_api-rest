import { pool } from "../database/connection.db.js";

const createUser = async ({ username, email, password }) => {
  const query = {
    text: "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
    values: [username, email, password],
  };
  const { rows } = await pool.query(query);
  return rows[0];
};

const getUserByEmail = async (email) => {
  const query = {
    text: "SELECT * FROM users WHERE email = $1",
    values: [email],
  };
  const { rows } = await pool.query(query);
  return rows[0];
}

export const UserModel = {
  createUser,
  getUserByEmail,
};

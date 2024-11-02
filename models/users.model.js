import { pool } from "../database/connection.db.js";

const createUser = async ({ username, useremail, password }) => {
  const query = {
    text: "INSERT INTO users (username, useremail, password) VALUES ($1, $2, $3) RETURNING *",
    values: ["testuser", "test@test.com", "12qwerty"],
  };
  const { rows } = await pool.query(query);
  return rows[0];
};

const getUserByEmail = async (email) => {
  const query = {
    text: "SELECT * FROM users WHERE useremail = $1",
    values: [email],
  };
  const { rows } = await pool.query(query);
  return rows[0];
}

export const UserModel = {
  createUser,
  getUserByEmail,
};

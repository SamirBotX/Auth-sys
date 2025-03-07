import pool from '../config/UserDB.js';


export const AllUser =  async () => {
    const users = await pool.query(`SELECT * FROM users`);
    return users.rows;    
}

const CreateUser = async (username, email, password) => {
    const user = await pool.query(`INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING userid, username, email`, [username, email, password]);
    return user.rows[0];
}
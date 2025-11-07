import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST!,
  user: process.env.DB_USER!,
  password: process.env.DB_PASS!,
  database: process.env.DB_NAME!,
  waitForConnections: true,
});

export const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Conexão com MySQL estabelecida com sucesso!');
    connection.release();
    return true;
  } catch (error: any) {
    console.error('Erro ao conectar ao MySQL:', error.message);
    return false;
  }
};
// src/database/mysql.ts
import mysql from 'mysql2/promise';
import type { Pool, PoolConnection } from 'mysql2/promise';

export const MySQLClient = {
    pool: undefined as unknown as Pool,

    async connect(): Promise<void> {
        const host = process.env.MYSQL_HOST!;
        const port = Number(process.env.MYSQL_PORT!);
        const user = process.env.MYSQL_USER!;
        const password = process.env.MYSQL_PASSWORD!;
        const database = process.env.MYSQL_DATABASE!;

        // Cria o pool de conexões
        this.pool = mysql.createPool({ host, port, user, password, database, waitForConnections: true, connectionLimit: 10, queueLimit: 0 });

        // Testa a conexão
        const connection: PoolConnection = await this.pool.getConnection();
        await connection.ping();
        connection.release();

        console.log('MySQL conectado com sucesso!');
    },

    async query(sql: string, values?: any[]) {
        if (!this.pool) throw new Error('MySQL não conectado');
        const [rows] = await this.pool.query(sql, values);
        return rows;
    },
};

import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import pg from 'pg';

config({ path: resolve(dirname(fileURLToPath(import.meta.url)), '../../.env') });

const pool = new pg.Pool({
    host: process.env.psqlGiggoHost,
    port: process.env.psqlGiggoPort,
    user: process.env.psqlGiggoUser,
    password: process.env.psqlGiggoPassword,
    database: process.env.psqlGiggoDatabase
});

const query = `select 
                    * 
                from 
                    weather
                WHERE date BETWEEN $1 AND $2
                order 
                    by date
                 `;


const executeQuery = async (query, params) => {
    const client = await pool.connect();
    try {
        const result = await client.query(query, params);
        return result.rows;
    } catch (error) {
        console.error('Error executing query:', error);
        throw error; // Rethrow the error for the caller to handle
    } finally {
        client.release();
    }
};

const weatherTimePicker = async (params) => {
    try {
        const data = await executeQuery(query,params);
        //console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error; // Rethrow the error for the caller to handle
    }
};
    
export default weatherTimePicker;



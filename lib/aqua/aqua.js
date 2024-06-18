import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import pg from 'pg';
import { error } from 'console';

config({ path: resolve(dirname(fileURLToPath(import.meta.url)), '../../.env') });

const pool = new pg.Pool({
    host: process.env.psqlGiggoHost,
    port: process.env.psqlGiggoPort,
    user: process.env.psqlGiggoUser,
    password: process.env.psqlGiggoPassword,
    database: process.env.psqlGiggoDatabase
});

const executeQuery = async (query, params = []) => {
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

const MarCont = async () => {
    try {
        const data = await executeQuery('select brand, count(meters_id) from meters where local != 0 group by brand order by count desc');
        //console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching meters data:', error);
        throw error; // Rethrow the error for the caller to handle
    }
};

const SitCont = async () => {
    try {
        const data = await executeQuery('select situation, count(infocontrato_id) from infocontrato group by situation');
        //console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching contracts data:', error);
        throw error; // Rethrow the error for the caller to handle
    }
};

const Client = async (client) => {
    try {
        const query = `SELECT clients.ramal, clients.local, clients.client, clients.building, clients.zone, clients.area, 
                              clients.sequence, clients.sensitivity, clients.situation, clients.date_sit, clients.name, clients.phone, 
                              infocontrato.locality, infocontrato.client_group, infocontrato.client_tariff, infocontrato.year, 
                              infocontrato.estimated, infocontrato.zone, infocontrato.area, infocontrato.sequence, 
                              ramaisrua.zmc, 
                              coord.lat, coord.lon, 
                              meters.device, meters.date_inst, meters.dn, meters.class, meters.brand, meters.model, 
                              meters.volume, meters.date_leit, meters.street, meters.num_pol, meters.floor
                       FROM clients
                       LEFT JOIN infocontrato ON clients.client = infocontrato.client
                       LEFT JOIN ramaisrua ON clients.ramal = ramaisrua.ramal
                       LEFT JOIN coord ON clients.local = coord.local
                       LEFT JOIN meters ON clients.local = meters.local
                       WHERE clients.client = $1`;
        const data = await executeQuery(query, [client]);
        //console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching aqua data:', error);
        throw error; // Rethrow the error for the caller to handle
    }
};
    
export { MarCont, SitCont, Client };

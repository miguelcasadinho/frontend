import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import axios from 'axios';
import https from 'https';
import { app } from './applications.js';
import { readFile } from 'fs/promises';
import * as XLSX from 'xlsx';

// Load environment variables from .env file
config({ path: resolve(dirname(fileURLToPath(import.meta.url)), '../../.env') });

// Construct the Basic Authentication header
const auth = 'Basic ' + Buffer.from(`${process.env.chirpUsername}:${process.env.chirpPassword}`).toString('base64');

// Construct the Bearer token for Grpc-Metadata-Authorization header
const metadata_auth = 'Bearer ' + process.env.chirpToken;

// Create an https.Agent with rejectUnauthorized set to false
const httpsAgent = new https.Agent({ rejectUnauthorized: false });

const filePath = './devices.xlsx';

/*
const readExcel = async () => {
    try {
    // Read the Excel file as a binary string
    const fileContent = await readFile(filePath);
    // Convert the binary string to a workbook object
    const workbook = XLSX.read(fileContent, { type: 'buffer' });
    // Get the first sheet's name
    const sheetName = workbook.SheetNames[0];
    // Get the first sheet
    const sheet = workbook.Sheets[sheetName];
    // Convert the sheet to JSON format
    const data = XLSX.utils.sheet_to_json(sheet);
    //console.log(data);
    return data;
    } catch (error) {
        console.error('Error:', error);
    } 
};
*/

const readExcel = async (file) => {
    try {
        // Convert file object to buffer
        const fileBuffer = await file.arrayBuffer();

        // Convert the buffer to a workbook object
        const workbook = XLSX.read(fileBuffer, { type: 'array' });

        // Get the first sheet's name
        const sheetName = workbook.SheetNames[0];

        // Get the first sheet
        const sheet = workbook.Sheets[sheetName];

        // Convert the sheet to JSON format
        const data = XLSX.utils.sheet_to_json(sheet);

        //console.log(data);
        return data;
    } catch (error) {
        console.error('Error reading Excel file:', error);
    }
};


const getData = async (data) => {
    try {
        let details = [];
        for (const record of data) {
            const device = app.find(app => app.type === record.type);
            if (device) {
                const deviceDetails = {
                    data: {
                        device: {
                            name: record.device.toString(),
                            devEUI: record.devEUI,
                            applicationID: device.applicationID,
                            description: device.description,
                            deviceProfileID: device.deviceProfileID,
                            isDisabled: device.isDisabled,
                            referenceAltitude: device.referenceAltitude,
                            skipFCntCheck: device.skipFCntCheck,
                            tags: device.tags,
                            variables: device.variables
                        }
                    },
                    keys: {
                        deviceKeys: {
                            nwkKey: record.appKey,
                            devEUI: record.devEUI
                        }
                    }
                };
                details.push(deviceDetails);
            }
        }
        //console.log(details);
        return details;
    } catch (error) {
        console.error('Error:', error);
    }               
};

const createDevice = async (data) => {
    try {
        // Await the axios post request to ensure the response is handled correctly
        const response = await axios.post('https://iot-infra.emas-beja.pt/api/devices', data, {
            headers: {
                Accept : 'application/json',
                'Content-Type' : 'application/json',
                'Grpc-Metadata-Authorization' : metadata_auth,
                Authorization: auth
            },
            httpsAgent: httpsAgent  // Pass the httpsAgent to axios
        });
        // Log the response from the API
        console.log('Create device response status:', response.status, '-', response.statusText);
    } catch (error) {
        // Log any errors that occur during the request
        console.error('Error:', error.response ? error.response.data : error.message);
    }
};

const insertKeys = async (data) => {
    try {
        // Await the axios post request to ensure the response is handled correctly
        const response = await axios.post('https://iot-infra.emas-beja.pt/api/devices/'+data.deviceKeys.devEUI+'/keys', data, {
            headers: {
                Accept : 'application/json',
                'Content-Type' : 'application/json',
                'Grpc-Metadata-Authorization' : metadata_auth,
                Authorization: auth
            },
            httpsAgent: httpsAgent  // Pass the httpsAgent to axios
        });
        // Log the response from the API
        console.log('Insert Keys response status:', response.status, '-', response.statusText);
    } catch (error) {
        // Log any errors that occur during the request
        console.error('Error:', error.response ? error.response.data : error.message);
    }
};

const insertDevices = async (xlsx) => {
    try {
        const devices = await readExcel(xlsx);
        const details = await getData(devices);
        for (const record of details) {
            try {
                await createDevice(record.data);
                await insertKeys(record.keys);
            } catch (error) {
                console.error(`Failed to process device ${record.data.device.devEUI}:`, error.message);
            }
        }
    } catch (error) {
        console.error('Error processing devices:', error.message);
    }     
};

export { insertDevices };




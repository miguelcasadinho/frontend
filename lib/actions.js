'use server';

//import { slugFormData } from "./slugify";

async function getFormData(prevState, formData){
    const client = {
        client: formData.get('client')
    };
    //console.log(client.client);
    return client.client;
    //await slugFormData(client);
};

export { getFormData };
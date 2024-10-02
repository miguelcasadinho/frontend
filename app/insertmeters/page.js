import XlsxPicker from '../../components/buttons/xlsx-picker';
import classes from './page.module.css';
import { insertDevices } from '@/lib/chirpstack/insert-devices';
import FormSubmit from '@/components/forms/form-submit';
//import { redirect } from 'next/navigation';



export default function InsertMeters () {

    async function GetXlsx(formData) {
    'use server';
    const xlsx = {
        file: formData.get('xlsx')
    }
    //console.log(xlsx.file);
    await insertDevices(xlsx.file);

    //redirect('/about');
    };

    

    return (
        <form action={GetXlsx}>
            <div className={classes.container}>
                <h1 className={classes.header}>
                    Chirpstack - Inserir dispositivos LoRaWAN 
                </h1>
                <XlsxPicker label={"xlsx"} name={"xlsx"}/>
                <div>
                    <FormSubmit className={"classes.button"} name="Submeter"/>
                </div>
            </div>
        </form>          
    )   
}
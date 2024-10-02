

import classes from './page.module.css';
import FormSubmit from '@/components/forms/form-submit';
import TextOutput from '@/components/forms/text-output';
import { Client } from '@/lib/aqua/aqua';

const DataDisplay = ({ data }) => {
    return (
      <div>
        {Object.entries(data).map(([key, value]) => (
          <div key={key}>
            <strong>{key}:</strong> {String(value)}
          </div>
        ))}
      </div>
    );
  };

export default async function Dashboards () {
    async function GetClient(formData) {
        'use server';
        const client = {
            id: formData.get('client')
        }
        //const data = await Client(client.id);
        //console.log(data);


        };


    return (
        <form action={GetClient}>
            <div className={classes.container}>
                <h1 className={classes.header}>
                    Dashboards
                </h1>
                <main className={classes.main}>
                <div className={classes.form}>
                    <p>
                        <label htmlFor="client">Número de cliente</label>
                        <input type="text"  id="client" name="client" required/>
                    </p>
                </div>
                <FormSubmit name="Submeter"/>
                <TextOutput>
                   
                </TextOutput>
                </main>
            </div>
        </form>   
    )
};
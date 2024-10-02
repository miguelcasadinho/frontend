
import StatCard from '@/components/dashboards/stat-card/stat-card';
import TextSubmit from '@/components/forms/text-submit';
import TextOutput from '@/components/forms/text-output';

import {SitCont, Client} from '@/lib/aqua/aqua';

import classes from './page.module.css';

async function Situation(){
    const data = await SitCont();
    const contratos = data.reduce((acc, { situation, count }) => {
        acc[situation] = count;
        return acc;
      }, {});
    
    return (
            <div className={classes.container_dash}>
                <StatCard title = 'Contratos ativos' value = {`${parseInt(contratos['EM CONDIÇÕES DE FACTURAR'])}`}/>
                <StatCard title = 'Contratos novos' value = {`${parseInt(contratos['CONTRATO NOVO'])}`}/>
                <StatCard title = 'Suspensos (Pagamento)' value = {`${parseInt(contratos['SUSPENSÃO CONSUMO FALTA PAG.'])}`}/>
                <StatCard title = 'Suspensos (Leitura)' value = {`${parseInt(contratos['SUSPENSÃO CONSUMO FALTA ML/SRV'])}`}/>
                <StatCard title = 'Suspensos (Requisição)' value = {`${parseInt(contratos['SUSPENSÃO CONSUMO A PEDIDO'])}`}/>
            </div>
    )
};

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

export default async function Clients () {

  async function GetClient(formData) {
    'use server';
    const client = {
        id: formData.get('client')
    }
    //console.log(client.id);
    const data = await Client(client.id);
    console.log(data);
    };

  return (
      <div className={classes.container}>
          <h1 className={classes.header}>
              Clientes
          </h1>
          <Situation />
          <main className={classes.main}>
              <h1 className={classes.header}>
                  Pesquisa de Cliente
              </h1>
              <form action={GetClient}>
                <TextSubmit htmlFor="client" name="client" label="Número de Cliente">Pesquisar</TextSubmit>

                <TextOutput>
               
                </TextOutput>

              </form>
          </main>
      </div>                 
  )
    
}
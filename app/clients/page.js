import StatCard from '@/components/dashboards/stat-card/stat-card';

import SitCont from '@/lib/aqua/contratos/groupbysit';

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

export default async function Clients () {
    return (
        <div className={classes.container}>
            <h1 className={classes.header}>
                Clientes
            </h1>
            <Situation />
        </div>
    )
    
}
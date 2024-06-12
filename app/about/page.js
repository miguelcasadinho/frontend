import classes from './page.module.css';

export default function About () {
    return (
        <div className={classes.container}>
            <h1 className={classes.header}>
                O Projecto NeoH<sub>2</sub>O
            </h1>
            <p className={classes.main}>
                A palavra neo é um prefixo de origem grega que significa novo,
                significa algo novo ou uma versão nova de algo existente. <br/>
                O NeoH<sub>2</sub>O é uma plataforma inovadora desenvolvida para entidades gestoras de sistemas de abastecimento de água, 
                destinada à análise e monitorização de dados recolhidos por dispositivos IoT. 
                A plataforma é uma solução robusta para a gestão eficiente do ciclo urbano da água.
            </p>
        </div>
    )
    
}

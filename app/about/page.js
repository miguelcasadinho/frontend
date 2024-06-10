import classes from './page.module.css';

export default function About () {
    return (
        <div className={classes.container}>
            <h1 className={classes.header}>
                About the Project
            </h1>
            <p className={classes.main}>
                O Neo IoT é uma plataforma inovadora desenvolvida para entidades gestoras de sistemas de abastecimento de água, 
                destinada à análise e monitorização de dados recolhidos por dispositivos IoT. 
                A plataforma é uma solução robusta para a gestão eficiente do ciclo urbano da água.
            </p>
        </div>
    )
    
}

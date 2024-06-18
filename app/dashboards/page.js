
import TextSubmit from '@/components/forms/text-submit';
import classes from './page.module.css';



export default async function Login () {
    return (
        <div className={classes.container}>
            <h1 className={classes.header}>
                Dashboards
            </h1>
            <main className={classes.main}>
                <TextSubmit htmlFor="client" label="Número de Cliente" type="text" id="client" name="client">Pesquisar</TextSubmit>
            </main>
        </div>
    )
    
}
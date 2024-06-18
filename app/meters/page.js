import StatCard from '@/components/dashboards/stat-card/stat-card';

import {MarCont} from '@/lib/aqua/aqua';

import classes from './page.module.css';


async function Brand(){
    const data = await MarCont();
    
    return (
            <div className={classes.container_dash}>
                {data.map((data) => (
                <StatCard key = {data.brand} title = {data.brand} value = {`${parseInt(data.count)}`}/>
                ))}
            </div>
    )
};

export default function Meters () {
    
    return (
        <>
        <div className={classes.container}>
    
            <h1 className={classes.header}>
                Contadores de água
            </h1>
                <Brand />   
        </div>
        </>
    )
    
}
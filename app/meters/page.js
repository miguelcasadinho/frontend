

import StatCard from '@/components/dashboards/stat-card/stat-card';

import wheather from '@/lib/weather/weather';

import classes from './page.module.css';


async function GetWheather(){
    const data = await wheather();
    return (<>
                <StatCard title = 'Temperatura' value = { `${parseFloat(data[0].air_temperature).toFixed(1)} º` }/>
            </>
        )

};

export default function Meters () {
    
    return (
        <div className={classes.container}>

            <h1 className={classes.header}>
                Contadores de água
            </h1>
                <GetWheather />   
        </div>
    )
    
}
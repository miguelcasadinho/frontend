import StatCard from '@/components/dashboards/stat-card/stat-card';

import wheather from '@/lib/weather/weather';

import classes from './page.module.css';

export default async function Meters () {
    const data = await wheather();

    return (
        <div className={classes.container}>

            <h1 className={classes.header}>
                Water Meters
            </h1>
            <StatCard title = 'Luminosidade' value = { `${parseInt(data[0].light_intensity)} lux` }/>
        </div>
    )
    
}
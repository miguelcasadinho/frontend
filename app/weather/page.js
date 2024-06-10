import moment from 'moment';

import StatCard from '@/components/dashboards/stat-card/stat-card';
import TimePicker from '@/components/time-piker/timePicker';

import wheather from '@/lib/weather/weather';

import classes from './page.module.css';

export default async function weatherData () {
    const data = await wheather();

    return (
        <div className={classes.container}>
            <StatCard title = 'Temperatura' value = { `${parseFloat(data[0].air_temperature).toFixed(1)} º` }/>
            <StatCard title = 'Humidade' value = { `${parseInt(data[0].air_humidity)} %` }/>
            <StatCard title = 'Precipitação' value = { `${parseFloat(data[0].rain_gauge).toFixed(2)} mm` }/>
            <StatCard title = 'Vento' value = { `${parseFloat(data[0].wind_speed*3.6).toFixed(2)} km/h` }/>
            <StatCard title = 'Direção do Vento' value = { `${parseInt(data[0].wind_direction)} º` }/>
            <StatCard title = 'Pressão Barométrica' value = { `${parseInt(data[0].barometric_pressure*0.01)} hPa` }/>
            <StatCard title = 'Índice Ultravioleta' value = { parseFloat(data[0].uv_index).toFixed(1) }/>
            <StatCard title = 'Luminosidade' value = { `${parseInt(data[0].light_intensity)} lux` }/>

            <TimePicker />

            <time className={classes.description}> Última atualização: {moment(data[0].date).format('YYYY-MM-DD HH:mm:ss')}</time>
        </div>
    )
    
}
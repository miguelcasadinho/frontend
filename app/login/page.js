import TimePicker from '@/components/time-piker/timePicker';

import classes from './page.module.css';

export default function Login () {
    return (
        <div className={classes.container}>
            <h1 className={classes.header}>
                Log In
            </h1>
            <TimePicker />
        </div>
    )
    
}
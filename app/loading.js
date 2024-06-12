import classes from './loading.module.css';

export default function LoadingPage() {
    return(
            <div className={classes.container}>
                <div className={classes.spinner}></div>
                <p className={classes.loading}>Loading...</p>           
            </div>
        
    )
}
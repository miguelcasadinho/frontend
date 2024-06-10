import classes from './stat-card.module.css';

const StatCard = ({title, value}) => {
  return (
    <div className={classes.card}>
        <p className={classes.title}>
            {title}
        </p>
        <p className={classes.value}> 
            {value}
        </p>
    </div>
  );
};

export default StatCard;
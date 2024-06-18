import classes from './submit.module.css';

const Button = ({ children, onClick, type }) => {
  return (
    <button className={classes.button} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
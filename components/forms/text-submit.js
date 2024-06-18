import classes from './text-submit.module.css';

const TextSubmit = ({ htmlFor, label, children, type, name, onChange, onClick }) => {
  return (
    <form className={classes.form}>
        <div className={classes.row}>
            <p>
                <label htmlFor={htmlFor}>{label}</label>
                <input type={type} id={htmlFor} name={name} onChange={onChange} required/>
            </p>
        </div>
        <button className={classes.button} onClick={onClick} type="submit">
            {children}
        </button>
    </form>
  );
};

export default TextSubmit;
import classes from './text-input.module.css';

const TextInput = ({ htmlFor, children, type, id,  name, onChange }) => {
  return (
    <form className={classes.form}>
        <div className={classes.row}>
            <p>
                <label htmlFor={htmlFor}>{children}</label>
                <input type={type} id={id} name={name} onChange={onChange} required/>
            </p>
        </div>
    </form>
  );
};

export default TextInput;
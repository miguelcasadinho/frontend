'use client'


import classes from './text-input.module.css';

const TextInput = ({ htmlFor, children, id,  name }) => {

  return (
    <form className={classes.form}>
        <div className={classes.row}>
            <p>
                <label htmlFor={htmlFor}>{children}</label>
                <input type="text"  id={id} name={name} required/>
            </p>
        </div>
    </form>
  );
};

export default TextInput ;
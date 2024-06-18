import classes from './text-output.module.css';

const TextOutput= ({ children, onChange }) => {
  return (
    <div className={classes.textbox}>
        <p>
            {children}
        </p>
    </div>
  );
};

export default TextOutput;


import classes from './text-output.module.css';

const TextOutput= ({ children, onChange }) => {
  return (
    <div className={classes.textbox}>
        <div>
            {children}
        </div>
    </div>
  );
};

export default TextOutput;


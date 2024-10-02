'use client';

import {useFormState} from 'react-dom';

import { getFormData } from '@/lib/actions';
import FormSubmit from '@/components/forms/form-submit';

import classes from './text-submit.module.css';

const TextSubmit = ({ htmlFor, name, label, children}) => {

 
  return (
    <div className={classes.form}>
        <div className={classes.row}>
            <p>
                <label htmlFor={htmlFor}>{label}</label>
                <input 
                  type="text" 
                  id={name} 
                  name={name}  
                  required
                />
            </p>
        </div>
          <FormSubmit className={classes.button} name={children}/>
          
    </div>
  );
};

export default TextSubmit;
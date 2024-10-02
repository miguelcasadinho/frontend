'use client';
import { useState, useEffect } from 'react';
import {useFormStatus} from 'react-dom';

import classes from './form-submit.module.css';

export default function FormSubmit({name, className}){
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [message, setMessage] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
      
        // Perform form validation or data submission here
      
        // Set the message based on the submission outcome
        setMessage('Form submitted successfully!');
      };

    const { pending } = useFormStatus();

    return <button className={classes.button} disabled={pending} >
        {pending ? 'A Submeter...' : name}
    </button>
}
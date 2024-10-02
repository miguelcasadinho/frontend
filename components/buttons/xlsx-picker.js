'use client';

import { useRef, useState } from 'react';
import classes from './xlsx-picker.module.css';

export default function XlsxPicker({label, name}) {
    const [pickedXlsx, setPickedXlsx] = useState(null);
    const xlsxInput = useRef();
    
    function handlePickClick() {
        xlsxInput.current.click();
    }

    function handleXlsxChange(event) {
        const file = event.target.files[0];

        if (!file) {
            setPickedXlsx(null);
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedXlsx({
                data: fileReader.result,
                fileName: file.name
        });
        };
        fileReader.readAsDataURL(file);
    }

      // Handle display logic
  function displayFileName() {
    if (pickedXlsx) {
      return <p>{pickedXlsx.fileName}</p>;
    } else {
      return <p>Nenhum ficheiro carregado ainda.</p>;
    }
  }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}></label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {displayFileName()}
                </div>
                <input 
                    className={classes.input} 
                    type="file" 
                    id={name} 
                    accept=".xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
                    name={name}
                    ref={xlsxInput}
                    onChange={handleXlsxChange}
                    required 
                />
                <button className={classes.button} type="button" onClick={handlePickClick}>
                    Carregar ficheiro .xlsx
                </button>
            </div>
        </div>
    )



}
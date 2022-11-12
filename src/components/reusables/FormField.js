import React from 'react'
import './reusables.css'

const FormField = ({ name, label, inputValue, setInputValue}) => {
    return (
        <div className="form-field">
            <label htmlFor="">{label}</label>
            <input type="text" name={name} onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
        </div>
    )
}

export default FormField
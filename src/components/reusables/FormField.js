import React from 'react'
import './reusables.css'

const FormField = ({ name, label, inputValue, setInputValue, placeholder}) => {
    return (
        <div className="form-field">
            <label htmlFor="">{label}</label>
            <input  type="text" name={name} onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder={placeholder}/>     
        </div>
    )
}

export default FormField
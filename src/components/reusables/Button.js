import React from 'react'

const Button = ({ handleSubmit, buttonLabel, buttonStyle }) => {
    return (
        <button onClick={handleSubmit} className={buttonStyle}>{buttonLabel}</button>
    )
}

export default Button
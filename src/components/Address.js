import React, { useState } from 'react'
import FormField from './reusables/FormField'
import Button from './reusables/Button'
import './reusables/reusables.css'

const Address = () => {

    const [country, setCountry] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [streetName, setStreetName] = useState("")
    const [streetNo2, setStreetNo2] = useState("")
    const [buttonName, setButtonName] = useState("Save")
    const [buttonStyle, setButtonStyle] = useState("button-style-two")

    
    const handleSubmit = (e) => {
        e.preventDefault()
        setButtonName("Saving...")
        setButtonStyle("button-style-three")

        setTimeout(() => {
            alert("Your details have been saved successfully!")
        }, 2000)


        setTimeout(() => {
            const addressData = {
                country: country,
                state: state,
                city: city,
                postalCode: postalCode,
                streetName: streetName,
                streetNo2: streetNo2,
            }
    
            console.log(addressData);
            setButtonName("Save")
            setButtonStyle("button-style-two")
            setCountry("")
            setState("")
            setCountry("")
            setState("")
            setCity("")
            setPostalCode("")
            setStreetName("")
            setStreetNo2("")
        }, 3000)

    }


    return (
        <form >
            <FormField 
                inputValue={country}
                setInputValue={setCountry}
                label={"Country"}
            />
            <FormField 
                inputValue={state}
                setInputValue={setState}
                label={"State"}

            />
            <FormField 
                inputValue={city}
                setInputValue={setCity}
                label={"City"}

            />
            <FormField 
                inputValue={postalCode}
                setInputValue={setPostalCode}
                label={"Postal Code"}

            />
            <FormField 
                inputValue={streetName}
                setInputValue={setStreetName}
                label={"Street Name"}

            />
            <FormField 
                inputValue={streetNo2}
                setInputValue={setStreetNo2}
                label={"Street Number"}
            />
            <div className="button-holder">
                <Button 
                    handleSubmit={handleSubmit}
                    buttonLabel={buttonName}
                    buttonStyle={buttonStyle}
                />
            </div>
        </form>
    )
}

export default Address
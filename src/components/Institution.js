import React, { useState } from "react";
import FormField from "./reusables/FormField";
import Button from "./reusables/Button";
import "./reusables/reusables.css";

const Institution = () => {
  const [institutionName, setInstitutionName] = useState("");
  const [email, setEmail] = useState("");
  const [tin, setTin] = useState("");
  const [rcNo, setRcNo] = useState("");
  const [lop, setLop] = useState("");
  const [streetNo, setStreetNo] = useState("");
  const [curriculum, setCurriculum] = useState("");
  const [currentSof, setCurrentSof] = useState("");
  const [auFiStatement, setAuFiStatement] = useState("");
  const [partner, setPartner] = useState("");
  const [buttonName, setButtonName] = useState("Save");
  const [buttonNameOne, setButtonNameOne] = useState("Edit");
  const [buttonStyle, setButtonStyle] = useState("button-style-two");

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonName("Saving...");
    setButtonStyle("button-style-three");

    setTimeout(() => {
      alert("Your details have been saved successfully!");
    }, 2000);

    setTimeout(() => {
      const institutionData = {
        institutionName: institutionName,
        email: email,
        tin: tin,
        rcNo: rcNo,
        lop: lop,
        streetNo: streetNo,
        curriculum: curriculum,
        currentSof: currentSof,
        auFiStatement: auFiStatement,
        partner: partner,
      };

      console.log(institutionData);
      setButtonName("Save");
      setButtonStyle("button-style-two");
      setInstitutionName("");
      setEmail("");
      setTin("");
      setRcNo("");
      setLop("");
      setStreetNo("");
      setCurriculum("");
      setCurrentSof("");
      setAuFiStatement("");
      setPartner("");
    }, 3000);
  };

  return (
    <form>
      <FormField
        inputValue={institutionName}
        setInputValue={setInstitutionName}
        label={"Institution Name"}
        // placeholder={"institution"}
      />
      <FormField inputValue={email} setInputValue={setEmail} label={"Email"} />
      <FormField inputValue={tin} setInputValue={setTin} label={"TIN"} />
      <FormField
        inputValue={rcNo}
        setInputValue={setRcNo}
        label={"RC Number"}
      />
      <FormField
        inputValue={lop}
        setInputValue={setLop}
        label={"Length of Operation"}
      />
      <FormField
        inputValue={streetNo}
        setInputValue={setStreetNo}
        label={"Street Number"}
      />
      <FormField
        inputValue={curriculum}
        setInputValue={setCurriculum}
        label={"Curriculum"}
      />
      <FormField
        inputValue={currentSof}
        setInputValue={setCurrentSof}
        label={"Current Source of Fund"}
      />
      <FormField
        inputValue={auFiStatement}
        setInputValue={setAuFiStatement}
        label={"Audicated Financial Statement"}
      />
      <FormField
        inputValue={partner}
        setInputValue={setPartner}
        label={"Partner"}
      />
      <div className="button-holder">
        <Button
          handleSubmit={handleSubmit}
          buttonLabel={buttonNameOne}
          buttonStyle={"button-style-one"}
        />
        <Button
          handleSubmit={handleSubmit}
          buttonLabel={buttonName}
          buttonStyle={buttonStyle}
        />
      </div>
    </form>
  );
};

export default Institution;

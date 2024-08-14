import React, { useState } from "react";
import InputType from "./InputType";
const Form = ({submitBtn,formTitle}) => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [role, setRole] = useState("donar");
const [name, setName] = useState("");
const [organisationName, setOrganisationName] = useState("");
const [hospitalName, setHospitalName] = useState("");
const [website, setWebsite] = useState("");
const [address, setAddress] = useState("");
const [phone, setPhone] = useState("");



  return (
    <>
      <form>
        <h1 className="text-center">{formTitle}</h1>
        <hr />
        <InputType
          labelText={"Email"}
          labelFor={"forEmail"}
          inputType={"email"}
          name={"email"}
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <InputType
          labelText={"Password"}
          labelFor={"forpassword"}
          inputType={"password"}
          name={"password"}
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
         <InputType
          labelText={"Name"}
          labelFor={"forName"}
          inputType={"text"}
          name={"name"}
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
         <InputType
          labelText={"Organisation Name"}
          labelFor={"fororganisationName"}
          inputType={"text"}
          organisationName={"organisationName"}
          value={organisationName}
          onChange={(e)=>setOrganisationName(e.target.value)}
        />
         <InputType
          labelText={"Hospital Name"}
          labelFor={"forhospitalName"}
          inputType={"text"}
          HospitalName={"hospitalName"}
          value={hospitalName}
          onChange={(e)=>setHospitalName(e.target.value)}
        />
         <InputType
          labelText={"Website"}
          labelFor={"forwebsite"}
          inputType={"text"}
          website={"website"}
          value={website}
          onChange={(e)=>setWebsite(e.target.value)}
        />
         <InputType
          labelText={"Address"}
          labelFor={"foraddress"}
          inputType={"text"}
          address={"address"}
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
        />
         <InputType
          labelText={"Phone"}
          labelFor={"forphone"}
          inputType={"text"}
          phone={"phone"}
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
        />
        <div className="d-flex">
          <button className="btn btn-primary" type="submit">{submitBtn}</button>
        </div>
      </form>
    </>
  );
};

export default Form;

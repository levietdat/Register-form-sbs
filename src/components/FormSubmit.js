import React from "react";
import Form from "./Form";
import { Outlet, Link } from "react-router-dom";
const FormSubmit = (props) => {
  const isValiEmail = (email) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email);
  };
  const previous = () => {
    let pre = props.step - 1;
    props.setStep(pre);
  };
  const CheckEmailAndPassword = (email, password) => {
    if (!isValiEmail(props.email) && props.password === "") {
      props.setErrorEmail("Email are not available");
      props.setErrorPassword("This field cannot be left blank");
      props.setStep(1);
    } else if (!isValiEmail(props.email) && props.password !== "") {
      props.setErrorEmail("Email are not available");
      props.setErrorPassword("");

      props.setStep(1);
    } else if (props.password === "" && isValiEmail(props.email)) {
      props.setErrorEmail("");
      props.setErrorPassword("This field cannot be left blank");
      props.setStep(1);
    } else {
      let pre = props.step + 1;
      props.setErrorEmail("");
      props.setErrorPassword("");
      props.setStep(pre);
    }
  };
  const next = () => {
    CheckEmailAndPassword();
  };
  const submit = (e) => {
    e.preventDefault();
    alert("Complete Register")
    props.setAccount([...props.account,{
      Email:props.email,
      Password:props.password,
      username:props.username,
      firstName:props.firstName,
      lastName:props.lastName,
      address:props.address,
      zipcode:props.zipcode
    }])

  };
  return (
    <form onSubmit={submit} className="form">
      <h1 className="title">Register</h1>
      <Form
        setEmail={props.setEmail}
        email={props.email}
        setPassword={props.setPassword}
        password={props.password}
        step={props.step}
        errorPassword={props.errorPassword}
        setErrorPassword={props.setErrorPassword}
        errorEmail={props.errorEmail}
        setErrorEmail={props.setErrorEmail}
        username={props.username}
        setUserName={props.setUserName}
        firstName={props.firstName}
        setFirstName={props.setFirstName}
        lastName={props.lastName}
        setLastName={props.setLastName}
        address={props.address}
        setAddress={props.setAddress}
        zipcode={props.zipcode}
        setZipcode={props.setZipcode}
        account={props.account}
      />
      <div className="btn-group">
        <button
          onClick={previous}
          className={
            props.step !== parseInt(1)
              ? "btn btn-previous active"
              : "btn btn-previous"
          }
          type="button"
        >
          PREVIOUS
        </button>
        <button
          onClick={next}
          className={
            props.step !== parseInt(3)
              ? "btn  btn-next active"
              : "btn  btn-next"
          }
          type="button"
        >
          NEXT
        </button>
        <button
          className={
            props.step === parseInt(3)
              ? "btn btn-submit active"
              : "btn btn-submit"
          }
          type="submit"
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
};
export default FormSubmit;

import React from "react";
const Form = (props) => {
  const handleChangeEmail = (e) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    props.setEmail(e.target.value.trim());
    if (reg.test(e.target.value.trim())) {
      props.setErrorEmail("");
    } else props.setErrorEmail("Email are not available");
  };
  const handleChangePassword = (e) => {
    props.setPassword(e.target.value.trim());
    if (e.target.value === "") {
      props.setErrorPassword("This field cannot be left blank");
    } else {
      props.setErrorPassword("");
    }
  };
  const handleChangeUsername = (e) => {
    props.setUserName(e.target.value);
  };
  const handleChangeFirstName = (e) => {
    props.setFirstName(e.target.value);

  };
  const handleChangeLastName = (e) => {
    props.setLastName(e.target.value);

  };
  const handleChangAddress = (e) => {
    props.setAddress(e.target.value);

  };
  const handleChangeZipCode = (e) => {
    props.setZipcode(e.target.value);

  };
  return (
    <>
      <div className={props.step === parseInt(1) ? "card active" : "card"}>
        <h4 className="step-title">STEP 1...</h4>
        <div className="form-group">
          <label htmlFor="name"> Email </label>
          <input
            value={props.email}
            onChange={handleChangeEmail}
            type="email"
            id="name"
            placeholder="Enter your email address..."
          />
          <span className="message-error">{props.errorEmail}</span>
        </div>
        <div className="form-group">
          <label htmlFor="password"> Password </label>
          <input
            value={props.password}
            onChange={handleChangePassword}
            type="password"
            id="password"
            placeholder="Enter your password..."
          />

          <span className="message-error">{props.errorPassword}</span>
        </div>
      </div>
      <div className={props.step === parseInt(2) ? "card active" : "card"}>
        <h4 className="step-title">STEP 2...</h4>
        <div className="form-group">
          <label htmlFor="username"> Username </label>
          <input
            value={props.username}
            onChange={handleChangeUsername}
            type="text"
            id="username"
            placeholder="Enter your username..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="first-name"> First Name </label>
          <input
            value={props.firstName}
            onChange={handleChangeFirstName}
            type="text"
            id="first-name"
            placeholder="Enter your First Name..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="last-name"> Last Name </label>
          <input
            value={props.lastName}
            onChange={handleChangeLastName}
            type="text"
            id="last-name"
            placeholder="Enter your last Name..."
          />
        </div>
      </div>
      <div className={props.step === parseInt(3) ? "card active" : "card"}>
        <h4 className="step-title">STEP 3...</h4>
        <div className="form-group">
          <label htmlFor="address"> Address </label>
          <input
            value={props.address}
            onChange={handleChangAddress}
            type="text"
            id="address"
            placeholder="Enter your  address..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="zip-code"> Zip-code </label>
          <input
            value={props.zipcode}
            onChange={handleChangeZipCode}
            type="text"
            id="zip-code"
            placeholder="Enter your zip-code..."
          />
        </div>
      </div>
    </>
  );
};
export default Form;

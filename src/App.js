import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "./components/Home";
import FormSubmit from "./components/FormSubmit";
function App() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [account, setAccount] = useState([]);
  return (
      <div className="container">
        <FormSubmit
          setEmail={setEmail}
          email={email}
          password={password}
          setPassword={setPassword}
          setError={setErrorEmail}
          step={step}
          errorEmail={errorEmail}
          errorPassword={errorPassword}
          setErrorEmail={setErrorEmail}
          setErrorPassword={setErrorPassword}
          setStep={setStep}
          username={username}
          setUserName={setUserName}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          address={address}
          setAddress={setAddress}
          zipcode={zipcode}
          setZipcode={setZipcode}
          setAccount={setAccount}
          account={account}
        />
      </div>
  );
}

export default App;

import React from "react";
import { useState } from "react";
import "./App.css";
import Login from "./component/login";
import SignUp from "./component/signup";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="App">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <SignUp onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;

import { useState } from "react";
import { Header } from "./components/Header";
import { InputBox } from "./components/InputBox";
import { Results } from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleInputChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return { ...prevInput, [inputIdentifier]: +newValue };
    });
  }

  return (
    <div>
      <Header />
      <InputBox userInput={userInput} onInputChange={handleInputChange} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero</p>}
      {inputIsValid && <Results userInput={userInput} />}
    </div>
  );
}

export default App;

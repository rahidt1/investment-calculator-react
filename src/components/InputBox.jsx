import { Input } from "./Input";

export function InputBox({ ...props }) {
  // props -> userInput, onInputChange
  return (
    <section id="user-input">
      <div className="input-group">
        <Input inputIdentifier="initialInvestment" {...props}>
          Initial Investment
        </Input>
        <Input inputIdentifier="annualInvestment" {...props}>
          Anual Investment
        </Input>
      </div>
      <div className="input-group">
        <Input inputIdentifier="expectedReturn" {...props}>
          Expected Return
        </Input>
        <Input inputIdentifier="duration" {...props}>
          Duration
        </Input>
      </div>
    </section>
  );
}

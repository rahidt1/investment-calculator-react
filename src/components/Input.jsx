export function Input({ children, userInput, inputIdentifier, onInputChange }) {

  return (
    <p>
      <label>{children}</label>
      <input
        type="number"
        required
        value={userInput[inputIdentifier]}
        onChange={(e) => onInputChange(inputIdentifier, +e.target.value)}
      />
    </p>
  );
}

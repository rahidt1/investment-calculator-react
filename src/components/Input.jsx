export function Input({ children }) {
  return (
    <p>
      <label>{children}</label>
      <input type="number" required />
    </p>
  );
}

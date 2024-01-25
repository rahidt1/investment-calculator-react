import Logo from "../assets/investment-calculator-logo.png";

export function Header() {
  return (
    <header id="header">
      <img src={Logo} alt="Logo showing a money bag" />
      <h1>Investment Calculator</h1>
    </header>
  );
}

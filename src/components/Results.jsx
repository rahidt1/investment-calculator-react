import { calculateInvestmentResults } from "../util/investment.js";
import { formatter } from "../util/currencyFormatter.js";
export function Results({ userInput }) {
  const results = calculateInvestmentResults(userInput);
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Investment Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => {
          const totalInterest =
            result.valueEndOfYear -
            result.annualInvestment * result.year -
            initialInvestment;

          const totalAmountInvested = result.valueEndOfYear - totalInterest;
          return (
            <tr key={result.year}>
              <th>{result.year}</th>
              <th>{formatter.format(result.valueEndOfYear)}</th>
              <th>{formatter.format(result.interest)}</th>
              <th>{formatter.format(totalInterest)}</th>
              <th>{formatter.format(totalAmountInvested)}</th>
            </tr>
          );
        })}
        {/* <tr>
          <th>1</th>
          <th>10000</th>
          <th>500</th>
          <th>500</th>
          <th>10300</th>
        </tr> */}
      </tbody>
    </table>
  );
}

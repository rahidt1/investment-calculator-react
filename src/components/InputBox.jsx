import { Input } from "./Input";

export function InputBox() {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input>Initial Investment</Input>
        <Input>Anual Investment</Input>
      </div>
      <div className="input-group">
        <Input>Expected Return</Input>
        <Input>Duration</Input>
      </div>
    </section>
  );
}

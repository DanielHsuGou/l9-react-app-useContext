import Propdrilling2 from "./Propdrilling2";

export default function Propdrilling1({ name }) {
  return (
    <div>
      {name}1
      <Propdrilling2 name={name} />
    </div>
  );
}

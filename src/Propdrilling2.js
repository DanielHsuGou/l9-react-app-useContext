import Propdrilling3 from "./Propdrilling3";
import { useContext } from "react";
import { SampleContext } from "./context/sampleContext";

export default function Propdrilling2({ name }) {
  const sample = useContext(SampleContext);
  return (
    <div>
      {name}2
      <Propdrilling3 name={name} />
      {sample}
    </div>
  );
}

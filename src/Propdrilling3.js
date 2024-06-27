import { useContext } from "react";
import { SampleContext } from "./context/sampleContext";

export default function Propdrilling3({ name }) {
  const sample = useContext(SampleContext);
  console.log(sample);
  return (
    <div>
      {name}3<br></br>
      {sample}
    </div>
  );
}

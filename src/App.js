import logo from "./logo.svg";
import "./App.css";
import Propdrilling1 from "./Propdrilling1";
import { SampleContext } from "./context/sampleContext";

function App() {
  return (
    <SampleContext.Provider value="James">
      <div className="App">
        <header className="App-header">
          <Propdrilling1 name="Joey" />
        </header>
      </div>
    </SampleContext.Provider>
  );
}

export default App;

// prop drilling

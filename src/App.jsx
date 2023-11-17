import { useState } from "react";
import "./App.css";
import { Sidebar } from "./components/sidebar/Sidebar";
import { StepOne } from "./components/Steps/StepOne";

function App() {
  const [step, setStep] = useState(1);

  return (
    <div className='main flex flex-center'>
      <div className='card'>
        <Sidebar />
        <div className='step-card'>
          <StepOne setStep={setStep} step={step} />
        </div>
      </div>
    </div>
  );
}

export default App;

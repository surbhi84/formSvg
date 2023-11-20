import { useState } from "react";
import "./App.css";
import { Sidebar } from "./components/sidebar/Sidebar";
import { StepTwo } from "./components/Steps/StepTwo";
import { StepOne } from "./components/Steps/StepOne";
import { StepThree } from "./components/Steps/StepThree";
import { StepFour } from "./components/Steps/StepFour";
import { Thankyou } from "./components/thankyou/Thankyou";
import { useDetailsReducer } from "../src/hooks/dataReducer/useDetailsReducer";

function App() {
  const [step, setStep] = useState(1);

  const [accDetails, detailsDispatch] = useDetailsReducer();

  return (
    <div className='main flex flex-center'>
      <div className='card'>
        <Sidebar step={step} />
        <div className='step-card'>
          {step === 0 && <Thankyou />}
          {step === 1 && (
            <StepOne
              setStep={setStep}
              step={step}
              accDetails={accDetails}
              detailsDispatch={detailsDispatch}
            />
          )}
          {step === 2 && (
            <StepTwo
              setStep={setStep}
              step={step}
              accDetails={accDetails}
              detailsDispatch={detailsDispatch}
            />
          )}
          {step === 3 && (
            <StepThree
              setStep={setStep}
              step={step}
              accDetails={accDetails}
              detailsDispatch={detailsDispatch}
            />
          )}
          {step === 4 && (
            <StepFour
              setStep={setStep}
              step={step}
              accDetails={accDetails}
              detailsDispatch={detailsDispatch}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

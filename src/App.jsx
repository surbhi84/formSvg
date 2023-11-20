import { useState } from "react";
import "./App.css";
import { Sidebar } from "./components/sidebar/Sidebar";
import { StepTwo } from "./components/Steps/stepTwo";
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
        <Sidebar step={step} setStep={setStep} />
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
          <div className='btn-div'>
            {step > 1 && (
              <div
                className='text-cg text-med cur-p'
                onClick={() => {
                  setStep((p) => p - 1);
                }}
              >
                Go Back
              </div>
            )}
            {step === 4 && (
              <button
                className='btn-confirm mt-auto ml-auto'
                onClick={() => setStep(0)}
              >
                Confirm
              </button>
            )}

            {step > 0 && step < 4 && (
              <button
                className='btn-primary mt-auto ml-auto'
                onClick={() => setStep((p) => p + 1)}
              >
                Next Step
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

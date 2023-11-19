import React from "react";

export const StepFour = ({ setStep }) => {
  return (
    <div className='flex flex-col flex-grow card-padding'>
      <h1 className='text-mb text-bold m-0'>Finishing up</h1>
      <div className='text-cg text-reg mt-10'>
        Double-check everything looks OK before confirming.
      </div>

      <div className='flex mt-auto flex-center'>
        <div
          className='text-cg text-med'
          onClick={() => {
            setStep((p) => p - 1);
          }}
        >
          Go Back
        </div>

        <button
          type='submit'
          className='btn-primary ml-auto'
          // disabled={}
          onClick={() => {
            setStep(0);
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

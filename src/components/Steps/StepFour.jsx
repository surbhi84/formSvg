import React from "react";

export const StepFour = ({ setStep, accDetails, detailsDispatch }) => {
  return (
    <div className='flex flex-col flex-grow card-padding step-div'>
      <h1 className='text-mb text-bold m-0'>Finishing up</h1>
      <div className='text-cg text-reg mt-10'>
        Double-check everything looks OK before confirming.
      </div>

      <div className='summary-div'>
        <div className='flex flex-center'>
          <div>
            <div className='text-mb text-bold'>
              {accDetails.plan.title} ({accDetails.period})
            </div>
            <div className='link-text text-cg cur-p'>Change</div>
          </div>
          <div className='text-mb text-bold ml-auto'>
            ${accDetails.plan.price}
          </div>
        </div>

        <div className='hr-break' />

        {accDetails.addOns.map(({ title, price }, index) => (
          <div className='flex summary-row' key={title}>
            <div className='text-cg'>{title}</div>
            <div className='text-mb ml-auto'>+${price}</div>
          </div>
        ))}
      </div>
      <div className='flex mt-32 total-container'>
        <div className='text-cg'>
          Total(
          {`${accDetails.period === "monthly" ? "per month" : "per year"}`})
        </div>

        <div className='text-pb text-bold ml-auto addon-title'>
          $
          {accDetails?.addOns.reduce(
            (a, i) => a + Number(i.price?.split("/")[0]),
            0
          ) + Number(accDetails?.plan.price.split("/")[0])}
          {`${accDetails.period === "monthly" ? "/mo" : "/yr"}`}
        </div>
      </div>

      <div className='flex mt-auto flex-center'>
        <div
          className='text-cg text-med cur-p'
          onClick={() => {
            setStep((p) => p - 1);
          }}
        >
          Go Back
        </div>

        <button
          type='submit'
          className='btn-confirm ml-auto'
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

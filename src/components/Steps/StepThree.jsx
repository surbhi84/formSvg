import React from "react";
import { AddOnCard } from "./AddOnCard";

const Addons = [
  {
    title: "Online service",
    detail: "Access to multiplayer games",
    monthlyPrice: "1/mo",
    yearlyPrice: "10/mo",
  },
  {
    title: "Larger storage",
    detail: "Extra 1TB of cloud save",
    monthlyPrice: "2/mo",
    yearlyPrice: "20/mo",
  },
  {
    title: "Customizable Profile",
    detail: "Custom theme on your profile",
    monthlyPrice: "2/mo",
    yearlyPrice: "20/mo",
  },
];

export const StepThree = ({ setStep, accDetails, detailsDispatch }) => {

  return (
    <div className='flex flex-col flex-grow card-padding mw step-div'>
      <h1 className='text-mb text-bold m-0'>Pick add-ons</h1>
      <div className='text-cg text-reg mt-10'>
        Add-ons help enhance your gaming experience.
      </div>

      <div className='flex flex-col gap-16 addon-container'>
        {Addons.map((addon) => (
          <AddOnCard addon={addon} accDetails={accDetails} detailsDispatch={detailsDispatch} key={addon.title}/>
        ))}
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
          className='btn-primary ml-auto'
          onClick={() => {
            setStep((p) => p + 1);
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

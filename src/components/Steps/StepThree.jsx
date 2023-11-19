import React from "react";
import { EDITDETAILS, REMOVEADDON } from "../../hooks/dataReducer/types";

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
  console.log({ accDetails });
  return (
    <div className='flex flex-col flex-grow card-padding mw'>
      <h1 className='text-mb text-bold m-0'>Pick add-ons</h1>
      <div className='text-cg text-reg mt-10'>
        Add-ons help enhance your gaming experience.
      </div>

      <div className='flex flex-col gap-16 addon-container'>
        {Addons.map(({ title, detail, monthlyPrice, yearlyPrice }) => (
          <div className='flex flex-center addon-card' key={title}>
            <input
              type='checkbox'
              className='addon-cb'
              onChange={(e) => {
                if (e.target.checked)
                  detailsDispatch({
                    type: EDITDETAILS,
                    payload: {
                      addOns: [
                        ...accDetails.addOns,
                        {
                          title,
                          price:
                            accDetails.period === "monthly"
                              ? monthlyPrice
                              : yearlyPrice,
                        },
                      ],
                    },
                  });
                else
                  detailsDispatch({
                    type: REMOVEADDON,
                    payload: { title },
                  });
              }}
              checked={accDetails?.addOns.some((item) => item.title === title)}
            />
            <div className='ml-24'>
              <div className='text-mb text-med addon-title'>{title}</div>
              <div className='text-cg'>{detail}</div>
            </div>
            <div className='text-pb text-med ml-auto'>
              +${accDetails.period === "monthly" ? monthlyPrice : yearlyPrice}
            </div>
          </div>
        ))}
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
            setStep((p) => p + 1);
          }}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

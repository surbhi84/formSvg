import { useState } from "react";
import "./stepOne.css";
import Switch from "react-switch";
import { CHANGEPERIOD, EDITDETAILS } from "../../hooks/dataReducer/types";

const plans = [
  {
    icon: "assets/images/icon-arcade.svg",
    title: "Arcade",
    monthlyPrice: "$9/mo",
    yearlyPrice: "$90/yr",
  },
  {
    icon: "assets/images/icon-advanced.svg",
    title: "Advanced",
    monthlyPrice: "$12/mo",
    yearlyPrice: "$120/yr",
  },
  {
    icon: "assets/images/icon-pro.svg",
    title: "Pro",
    monthlyPrice: "$15/mo",
    yearlyPrice: "$150/yr",
  },
];

export const StepTwo = ({ setStep, accDetails, detailsDispatch }) => {
  const [period, setPeriod] = useState(accDetails.period);

  function handleChangePeriod() {
    if (period === "monthly") {
      setPeriod("yearly");
      detailsDispatch({ type: CHANGEPERIOD, payload: "yearly" });
    } else {
      setPeriod("monthly");
      detailsDispatch({ type: CHANGEPERIOD, payload: "monthly" });
    }
  }
  console.log({ period, accDetails });

  return (
    <div className='flex flex-col flex-grow card-padding'>
      <h1 className='text-mb text-bold m-0'>Select your plan</h1>
      <div className='text-cg text-reg mt-10'>
        You have the option of monthly or yearly billing.
      </div>
      <div className='flex gap-16'>
        {plans.map(({ icon, title, monthlyPrice, yearlyPrice }) => (
          <div
            className={`${accDetails.plan === title && "active"} plan-card`}
            key={title}
            onClick={() => {
              detailsDispatch({
                type: EDITDETAILS,
                payload: { plan: title },
              });
            }}
          >
            <img src={icon} />
            <div className='text-mb text-bold title-pc'>{title}</div>
            <div className='text-cg text-reg mt-10 text-med'>
              {period === "monthly" ? monthlyPrice : yearlyPrice}
            </div>
            {period === "yearly" && (
              <div className='text-mb mt-10 text-med'>2 months free</div>
            )}
          </div>
        ))}
      </div>
      <div className='flex flex-center period-div'>
        <div className={period === "monthly" ? "text-mb" : "text-cg"}>
          Monthly
        </div>
        <Switch
          checked={period === "yearly"}
          onColor='#02295a'
          offColor='#02295a'
          onChange={handleChangePeriod}
          uncheckedIcon={false}
          checkedIcon={false}
          activeBoxShadow='0'
          handleDiameter={18}
        />
        <div className={period === "yearly" ? "text-mb" : "text-cg"}>
          Yearly
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

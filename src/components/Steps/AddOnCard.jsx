import React, { useState } from "react";
import "./stepOne.css";
import { ADDADDON, REMOVEADDON } from "../../hooks/dataReducer/types";

export const AddOnCard = ({
  addon: { title, detail, monthlyPrice, yearlyPrice },
  accDetails,
  detailsDispatch,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div
      className='flex flex-center addon-card cur-p'
      onClick={() => {
        if (accDetails?.addOns.some((item) => item.title === title)) {
          setIsChecked(false);
          detailsDispatch({
            type: REMOVEADDON,
            payload: { title },
          });
        } else {
          setIsChecked(true);
          detailsDispatch({
            type: ADDADDON,
            payload: {
              title,
              price:
                accDetails.period === "monthly" ? monthlyPrice : yearlyPrice,
            },
          });
        }
      }}
    >
      <input
        type='checkbox'
        className='addon-cb'
        name='addonCheckbox'
        onChange={() => {}}
        checked={isChecked}
      />
      <div className='ml-24'>
        <div className='text-mb text-med addon-title'>{title}</div>
        <div className='text-cg'>{detail}</div>
      </div>
      <div className='text-pb text-med ml-auto'>
        +${accDetails.period === "monthly" ? monthlyPrice : yearlyPrice}
      </div>
    </div>
  );
};

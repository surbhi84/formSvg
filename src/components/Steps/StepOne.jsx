import "./steps.css";
import { EDITDETAILS } from "../../hooks/dataReducer/types";
import { useState } from "react";

export const StepOne = ({ setStep, accDetails, detailsDispatch }) => {
  const [showError, setShowError] = useState({
    userName: false,
    email: false,
    phone: false,
  });

  const handleChange = (e) => {
    setShowError((p) => ({ ...p, [e.target.name]: false }));
    detailsDispatch({
      type: EDITDETAILS,
      payload: { [e.target.name]: e.target.value },
    });
  };

  return (
    <div className='flex flex-col flex-grow card-padding step-div'>
      <h1 className='text-mb text-bold m-0'>Personal info</h1>
      <div className='text-cg text-reg mt-10'>
        Please provide your name, email address, and phone number.
      </div>

      <div className='form' onSubmit={() => {}}>
        <div className='flex-col pos-rel'>
          <label className='text-mb text-med'>Name</label>
          {showError.userName && (
            <div className='err-msg'> This field is required</div>
          )}
          <input
            className={`${
              showError.userName && "input-error"
            } input-field text-med`}
            type='name'
            name='userName'
            placeholder='e.g.Stephen King'
            onChange={handleChange}
            value={accDetails.userName}
          />
        </div>

        <div className='flex-col  pos-rel'>
          <label className='text-mb text-med'>Email Address</label>
          {showError.email && (
            <div className='err-msg'> This field is required</div>
          )}
          <input
            className={`${
              showError.email && "input-error"
            } input-field text-med`}
            type='email'
            name='email'
            placeholder='e.g.stephenking@gmail.com'
            value={accDetails.email}
            onChange={handleChange}
          />
        </div>

        {/* {errors.email && touched.email && errors.email} */}
        <div className='flex-col  pos-rel'>
          <label className='text-mb text-med'>Phone Number</label>
          {showError.phone && (
            <div className='err-msg'> This field is required</div>
          )}
          <input
            className={`${
              showError.phone && "input-error"
            } input-field text-med`}
            type='tel'
            name='phone'
            placeholder='e.g.+1234567890'
            value={accDetails.phone}
            onChange={handleChange}
          />
        </div>

        {/* {errors.password && touched.password && errors.password} */}

        <div className='flex mt-auto dis-none'>
          <button
            className='btn-primary mt-auto ml-auto'
            // disabled={
            //   accDetails.userName === "" ||
            //   accDetails.email === "" ||
            //   accDetails.phone === ""
            // }
            onClick={() => {
              if (accDetails.userName === "")
                setShowError((p) => ({ ...p, userName: true }));
              if (accDetails.email === "")
                setShowError((p) => ({ ...p, email: true }));
              if (accDetails.phone === "") {
                setShowError((p) => ({ ...p, phone: true }));
              } else setStep((p) => p + 1);
            }}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

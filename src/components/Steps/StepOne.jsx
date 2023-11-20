import "./steps.css";
import { EDITDETAILS } from "../../hooks/dataReducer/types";

export const StepOne = ({ setStep, accDetails, detailsDispatch }) => {
  const handleChange = (e) => {
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

      <form className='form' onSubmit={() => {}}>
        <div className='flex-col'>
          <label className='text-mb text-med'>Name</label>
          <input
            className='input-field text-med'
            type='name'
            name='userName'
            placeholder='e.g.Stephen King'
            onChange={handleChange}
            value={accDetails.userName}
          />
        </div>

        <div className='flex-col'>
          <label className='text-mb text-med'>Email Address</label>

          <input
            className='input-field text-med'
            type='email'
            name='email'
            placeholder='e.g.stephenking@gmail.com'
            value={accDetails.email}
            onChange={handleChange}
          />
        </div>

        {/* {errors.email && touched.email && errors.email} */}
        <div className='flex-col'>
          <label className='text-mb text-med'>Phone Number</label>

          <input
            className='input-field text-med'
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
            type='submit'
            className='btn-primary mt-auto ml-auto'
            // disabled={}
            onClick={() => {
              setStep((p) => p + 1);
            }}
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

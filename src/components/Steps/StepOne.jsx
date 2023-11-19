import { Field, Form, Formik } from "formik";
import "./steps.css";
import { EDITDETAILS } from "../../hooks/dataReducer/types";

export const StepOne = ({ setStep, accDetails, detailsDispatch }) => {
  return (
    <div className='flex flex-col flex-grow card-padding step-div'>
      <h1 className='text-mb text-bold m-0'>Personal info</h1>
      <div className='text-cg text-reg mt-10'>
        Please provide your name, email address, and phone number.
      </div>

      <Formik
        initialValues={{
          userName: accDetails?.userName,
          email: accDetails?.email,
          phone: accDetails?.phone,
        }}
        // validate={(values) => {
        //   const errors = {};

        //   if (!values.email) {
        //     errors.email = "Required";
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //   ) {
        //     errors.email = "Invalid email address";
        //   }

        //   return errors;
        // }}
        // onSubmit={() => onPress()}
        // onSubmit={(values, { setSubmitting }) => {

        //   setTimeout(() => {

        //     alert(JSON.stringify(values, null, 2));

        //     setSubmitting(false);

        //   }, 400);

        // }}
      >
        {(props) => (
          <Form className='form' onSubmit={() => {}}>
            <div className='flex-col'>
              <label className='text-mb'>Name</label>
              <Field
                className='input-field text-med'
                type='name'
                name='userName'
                placeholder='e.g.Stephen King'
                onChange={props.handleChange}
                // onBlur={handleBlur}
                value={props.values.userName}
              />
            </div>

            <div className='flex-col'>
              <label className='text-mb'>Email Address</label>

              <Field
                className='input-field text-med'
                type='email'
                name='email'
                placeholder='e.g.stephenking@gmail.com'
                value={props.values.email}
                onChange={props.handleChange}
              />
            </div>

            {/* {errors.email && touched.email && errors.email} */}
            <div className='flex-col'>
              <label className='text-mb '>Phone Number</label>

              <input
                className='input-field text-med'
                type='tel'
                name='phone'
                placeholder='e.g.+1234567890'
                value={props.values.phone}
                onChange={props.handleChange}
              />
            </div>

            {/* {errors.password && touched.password && errors.password} */}

            <button
              type='submit'
              className='btn-primary mt-auto ml-auto'
              // disabled={}
              onClick={() => {
                detailsDispatch({
                  type: EDITDETAILS,
                  payload: { ...props.values },
                });
                setStep((p) => p + 1);
              }}
            >
              Next Step
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

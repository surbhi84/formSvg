import { Field, Formik } from "formik";
import "./stepOne.css";
import { useDataReducer } from "../../hooks/dataReducer/useDataReducer";

export const StepOne = () => {
  const [formData, dataDispatch] = useDataReducer();

  return (
    <div className='flex flex-col flex-grow card-padding'>
      <h1 className='text-mb text-bold m-0'>Personal info</h1>
      <div className='text-cg text-reg'>
        Please provide your name, email address, and phone number.
      </div>

      <Formik
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
        {() => (
          <form className='form' onSubmit={() => {}}>
            <div className='flex-col'>
              <label className='text-mb '>Name</label>
              <Field
                className='input-field'
                type='name'
                name='Name'
                placeholder='e.g.Stephen King'
                onChange={(e) => {
                  dataDispatch({
                    type: "editForm",
                    payload: { name: e.target.value },
                  });
                }} // onBlur={handleBlur}
                value={formData.name}
              />
            </div>

            <div className='flex-col'>
              <label className='text-mb'>Email Address</label>

              <Field
                className='input-field'
                type='email'
                name='email'
                placeholder='e.g.stephenking@gmail.com'
                value={formData.email}
                onChange={(e) => {
                  dataDispatch({
                    type: "editForm",
                    payload: { email: e.target.value },
                  });
                }}
              />
            </div>

            {/* {errors.email && touched.email && errors.email} */}
            <div className='flex-col'>
              <label className='text-mb'>Phone Number</label>

              <input
                className='input-field'
                type='tel'
                name='Phone'
                placeholder='e.g.+1234567890'
                value={formData.phone}
                onChange={(e) => {
                  dataDispatch({
                    type: "editForm",
                    payload: { phone: e.target.value },
                  });
                }}
              />
            </div>

            {/* {errors.password && touched.password && errors.password} */}

            <button
              type='submit'
              className='btn-primary mt-auto ml-auto'
              // disabled={}
              onClick={() => {
                dataDispatch({
                  type: "editForm",
                  payload: { step: formData.step+1 },
                });
              }}
            >
              Next Step
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

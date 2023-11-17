import "./sidebar.css";

const steps = [
  { stepNum: 1, stepTitle: "YOUR INFO" },
  { stepNum: 2, stepTitle: "SELECT PLAN" },
  { stepNum: 3, stepTitle: "ADD-ONS" },
  { stepNum: 4, stepTitle: "SUMMARY" },
];

export const Sidebar = () => {
  return (
    <>
      <div className='sb-container flex-col'>
   
        {steps.map(({ stepNum, stepTitle }) => (
          <div className='step-container flex' key={stepNum}>
            <div className='step-num flex flex-center' >{stepNum}</div>
            <div className='step-div'>
              <div className='step-number'>STEP {stepNum}</div>
              <div className='step-title text-med'>{stepTitle}</div>
            </div>
          </div>
        ))}
  
      </div>
    </>
  );
};

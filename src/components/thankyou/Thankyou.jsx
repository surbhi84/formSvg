import "./thankyou.css";

export const Thankyou = () => {
  return (
    <div className='thankyou-div'>
      <img src='/assets/images/icon-thank-you.svg' alt='confirmation_icon' />
      <h1 className='text-mb text-med'>Thank you!</h1>
      <p className='text-cg m-0'>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

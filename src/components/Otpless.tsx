import Script from "next/script";
import React, { useEffect } from "react";
//disable eslint and ts for this file
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore

const OTPlessComponent = () => {
  useEffect(() => {
    // const otplessUser = window?.otplessUser;
    // const waNumber = otplessUser.waNumber;
    // const waName = otplessUser.waName;
    // Signup/signin the user on your server and redirect to the next page
  }, []);

  return (
    <div id="otpless">
      <Script type="text/javascript" src="/auth.js" defer></Script>
    </div>
  );
};

export default OTPlessComponent;

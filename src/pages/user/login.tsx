/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
//ignor ts for this page
// disable ts for this page
import Head from "next/head";
import { useEffect } from "react";

const SignIn = () => {
  // useEffect(() => {
  //   const otpless = document.getElementById("otpless");
  //   const script = document.createElement("script");
  //   script.src = "https://otpless.com/auth.js";
  //   script.async = true;
  //   otpless?.appendChild(script);
  //   return () => {
  //     otpless?.removeChild(script);
  //   };
  // }, []);

  useEffect(() => {
    const otplessDiv = document.createElement("div");
    otplessDiv.id = "otpless";
    document.getElementsByClassName("otpless")[0]?.appendChild(otplessDiv);

    // Define the 'otpless' function
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.otpless = (otplessUser) => {
      // Retrieve the user's details after successful login
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const waName = otplessUser.waName;
      const waNumber = otplessUser.waNumber;
      console.log(waName, waNumber);
      // Handle the signup/signin process
      // ...
    };
    return () => {
      document.getElementsByClassName("otpless")[0]?.appendChild(otplessDiv);
    };
  }, []);

  return (
    <>
      <Head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://otpless.com/auth.js"></script>
      </Head>
      <div className="otpless"></div>
    </>
  );
};

export default SignIn;

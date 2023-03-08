//ignor ts for this page
import { useEffect } from "react";

const SignIn = () => {
  useEffect(() => {
    const otpless = document.getElementById("otpless");
    const script = document.createElement("script");
    script.src = "https://otpless.com/auth.js";
    script.async = true;
    otpless?.appendChild(script);

    return () => {
      otpless?.removeChild(script);
    };
  }, []);
  return <div id="otpless"></div>;
};

export default SignIn;

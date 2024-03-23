import { useState } from "react";

const SignInXSignUp = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const handleSwitch = () => {
    setIsSignIn(!isSignIn);
    console.log(isSignIn);
  };

  return (
    <>
      <div className="h-[100vh] w-full p-8 sm:p-12 md:p-16 lg:p-20">
        {/* sign in */}
        <div
          className={`${
            isSignIn ? "flex" : "hidden"
          } h-full w-full bg-blue-600`}
        >
          <div></div>
          <div></div>
        </div>

        <div className="h-24 w-full flex">
          <button className="h-full w-full bg-red-600" onClick={handleSwitch}>
            Sign In
          </button>
          <button className="h-full w-full bg-blue-600" onClick={handleSwitch}>
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default SignInXSignUp;

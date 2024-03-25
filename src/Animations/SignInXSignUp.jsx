import { useEffect, useState } from "react";

const SignInXSignUp = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isAnimate, setIsAnimate] = useState(true);

  const handleSwitch = () => {
    setIsSignIn(!isSignIn);
    setIsAnimate(true);
    setTimeout(() => {
      setIsAnimate(false);
    }, 700);
  };

  return (
    <>
      <div className="h-[100vh] w-full p-8 sm:p-12 md:p-16 lg:p-20 bg-slate-200">
        {/* sign in/sign up*/}
        <div className="h-full w-full flex bg-white rounded-[2rem] shadow-2xl">
          {/* first half */}
          <div
            className={`${
              isSignIn
                ? "transform translate-x-0 rounded-r-[11rem] rounded-l-3xl"
                : "transform translate-x-[100%] rounded-l-[11rem] rounded-r-3xl"
            } h-full flex-1 bg-yellow-500 duration-700`}
          >
            {isSignIn ? (
              <div
                className={`${
                  isAnimate && "animate-fade"
                } h-full w-full flex justify-center items-center`}
              >
                <button
                  className={`h-12 w-16 bg-red-600`}
                  onClick={handleSwitch}
                >
                  Sign In
                </button>
              </div>
            ) : (
              <div
                className={`${
                  isAnimate && "animate-fade"
                } h-full w-full flex justify-center items-center`}
              >
                <button
                  className={`h-12 w-16 bg-blue-600`}
                  onClick={handleSwitch}
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>

          {/* second half */}
          <div
            className={`${
              isSignIn
                ? "transform translate-x-0"
                : "transform translate-x-[-100%]"
            }
            ${isAnimate && "animate-fade"}
            flex-1 duration-700`}
          >
            {isSignIn ? (
              <div className="">
                <h1>Sign In Mate!</h1>
              </div>
            ) : (
              <div className="">
                <h1>Sign In Mate!</h1>
              </div>
            )}
          </div>
        </div>

        {/* <div className="h-24 w-full flex">
          <button
            className={`${
              !isSignIn && "disabled:bg-red-900"
            } h-full w-full bg-red-600`}
            onClick={handleSwitch}
          >
            Sign In
          </button>
          <button className="h-full w-full bg-blue-600" onClick={handleSwitch}>
            Sign Up
          </button>
        </div> */}
      </div>
    </>
  );
};

export default SignInXSignUp;

import { useState } from "react";
import SignInImage from "../assets/undraw_signin.svg";
import SignUpImage from "../assets/undraw_signup.svg";

const SignInXSignUp = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isAnimate, setIsAnimate] = useState(false);

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
        <div className="h-full w-full grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[2rem] shadow-2xl">
          {/* first half */}
          <div
            className={`${
              isSignIn
                ? "lg:transform lg:translate-x-0 rounded-r-[11rem] rounded-l-3xl"
                : "lg:transform lg:translate-x-[100%] rounded-l-[11rem] rounded-r-3xl"
            } h-1/2 lg:h-full bg-blue-600 duration-700`}
          >
            {isSignIn ? (
              <div
                className={`${
                  isAnimate && "animate-fade"
                } h-full w-full flex flex-col gap-4 justify-center items-center`}
              >
                <img
                  className="w-11/12"
                  src={SignUpImage}
                  alt="sign up Image"
                />
                <p className="font-normal text-white">
                  Already a Member?{" "}
                  <span
                    className="font-bold cursor-pointer"
                    onClick={handleSwitch}
                  >
                    Sign In
                  </span>
                </p>
              </div>
            ) : (
              <div
                className={`${
                  isAnimate && "animate-fade"
                } h-full w-full flex flex-col gap-4 justify-center items-center`}
              >
                <img
                  className="w-11/12"
                  src={SignInImage}
                  alt="Sign In Image"
                />
                <p className="font-normal text-white">
                  New Here?{" "}
                  <span
                    className="cursor-pointer font-bold"
                    onClick={handleSwitch}
                  >
                    Sign Up
                  </span>
                </p>
                <p className="text-white">Or sign in with .... ....</p>
              </div>
            )}
          </div>

          {/* second half */}
          <div
            className={`${
              isSignIn
                ? "lg:transform lg:translate-x-0"
                : "lg:transform lg:translate-x-[-100%]"
            }
            ${isAnimate && "animate-fade"}
            h-1/2 lg:h-full duration-700`}
          >
            {isSignIn ? (
              <form
                // onSubmit={handleSubmit(onSubmit)}
                className="h-full w-full flex flex-col items-center gap-2 md:gap-4 lg:gap-6 justify-center pl-8 pr-8 sm:pl-12 sm:pr-12"
              >
                <h1 className="text-blue-600 text-3xl md:text-4xl lg:text-5xl font-bold">
                  Sign Up
                </h1>

                <div className="w-full">
                  <input
                    className="h-10 md:h-14 pl-4 w-full border-2 border-blue-600 rounded-md focus:border-blue-600"
                    type="text"
                    placeholder="Username"
                    name="username"
                    id="username"
                    // onChange={handleChange}
                    // {...register("username")}
                  />
                  {/* <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
                  {errors.username?.message}
                </p> */}
                </div>

                <div className="w-full">
                  <input
                    className="h-10 md:h-14 pl-4 w-full border-2 border-blue-600 rounded-md focus:border-blue-600"
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                    // onChange={handleChange}
                    // {...register("email")}
                  />
                  {/* <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
                  {errors.email?.message}
                </p> */}
                </div>

                {/*if you add eye button, make sure to turn the type to text and back */}
                <div className="w-full">
                  <input
                    className="h-10 md:h-14 pl-4 w-full border-2 border-blue-600 rounded-md focus:border-blue-600"
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    // onChange={handleChange}
                    // {...register("password")}
                  />
                  {/* <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
                  {errors.password?.message}
                </p> */}
                </div>

                <div className="w-full">
                  <input
                    className="h-10 md:h-14 pl-4 w-full border-2 border-blue-600 rounded-md focus:border-blue-600"
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    id="confirmPassword"
                    // onChange={handleChange}
                    // {...register("confirmPassword")}
                  />
                  {/* <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
                  {errors.confirmPassword?.message}
                </p> */}
                </div>

                <button
                  type="submit"
                  className="h-10 md:h-14 w-full bg-blue-600 rounded-md text-white font-bold text-lg ease-in-out duration-300 hover:bg-blue-800"
                >
                  Sign Up
                </button>

                <div className="flex flex-col items-center">
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      name="condition"
                      id="condition"
                      // onChange={handleChange}
                      // {...register("iAgree")}
                    />
                    <p>
                      I agree to all{" "}
                      <span className="text-blue-600">
                        <a href="/termsconditions">Terms and Conditions</a>
                      </span>
                    </p>
                  </div>
                  {/* <p className="text-xs lg:text-sm text-red-600 font-semibold">
                  {errors.iAgree?.message}
                </p> */}
                </div>
              </form>
            ) : (
              <form
                action="submit"
                // onSubmit={handleSubmit(onSubmit)}
                className="h-full w-full flex flex-col gap-2 md:gap-4 lg:gap-6 justify-center items-center pl-8 pr-8 sm:pl-12 sm:pr-12"
              >
                <h1 className="text-blue-600 text-3xl md:text-4xl lg:text-5xl font-bold">
                  Sign In
                </h1>

                <div className="w-full">
                  <input
                    className="h-10 md:h-14 pl-4 w-full border-2 border-blue-600 rounded-md focus:border-blue-600"
                    type="text"
                    placeholder="Username"
                    name="username"
                    id="username"
                    // {...register("username")}
                    // onChange={handleChange}
                    // value={signInValues["username"]}
                  />
                  {/* <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
                    {errors.username?.message}
                  </p> */}
                </div>

                {/*if you add eye button, make sure to turn the type to text and back */}
                <div className="w-full">
                  <input
                    className="h-10 md:h-14 pl-4 w-full border-2 border-blue-600 rounded-md focus:border-blue-600"
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    // {...register("password")}
                    // value={signInValues["password"]}
                    // onChange={handleChange}
                  />
                  {/* <p className="text-xs lg:text-sm text-red-600 font-semibold pt-1">
                    {errors.password?.message}
                  </p> */}
                </div>

                <div className="flex gap-2 justify-start w-full">
                  <input
                    type="checkbox"
                    name="condition"
                    id="condition"
                    // {...register("remember")}
                    // value={signInValues["condition"]}
                    // onChange={handleChange}
                  />
                  <p>Remember Me </p>
                </div>

                <button
                  type="submit"
                  className="h-10 md:h-14 w-full bg-blue-600 rounded-md text-white font-bold text-lg ease-in-out duration-300 hover:bg-blue-800"
                >
                  Sign In
                </button>

                <p className="font-normal">
                  New Here?{" "}
                  <span className="text-blue-600">
                    <a href="/signup">Sign Up</a>
                  </span>
                </p>
              </form>
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

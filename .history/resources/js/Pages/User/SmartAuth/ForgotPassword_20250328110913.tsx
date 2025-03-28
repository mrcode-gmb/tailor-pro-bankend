import React from "react";
import { Link } from "@inertiajs/react";

const ForgotPassword = () => {
  return (
    <>
      <div className="relative">
        <div className="grid grid-cols-2 max-lg:grid-cols-1 m-auto">
          <div className="h-screen w-full bg-gray-200 max-sm:bg-white relative flex max-sm:block items-center overflow-hidden">
            <div className="bg-white shadow-lg max-sm:shadow-none rounded-lg w-9/12 p-4 max-sm:w-11/12 m-auto">
              <div className="mb-3">
                <h4 className="font-semibold text-xl text-slate-600 text-ellipsis">
                  TailoringPro
                </h4>
                <p className="text-slate-800 text-ellipsis">
                  Forgot password restore all amazing features on TailoringPro.
                </p>
              </div>
              <div>
                <div className="my-4">
                  <label htmlFor="" className="text-slate-600 text-ellipsis">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="w-full border outline-none py-2.5 px-4 text-sm border-gray-300 focus:border-green-500 focus:shadow-sm placeholder:text-gray-400 mt-1 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <div className="my-2 -mt-1 flex items-center gap-4 justify-end max-sm:justify-between">
                  <Link
                    href={`/login`}
                    className="text-slate-600 text-ellipsis"
                  >
                    Try to sign-in
                  </Link>
                  <button className="py-3 px-4 text-sm bg-green-500 text-white rounded-lg font-semibold">
                    Email Password Reset Link
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[url('/../src/assets/Pastedimage.png')] max-lg:hidden bg-cover bg-center h-screen w-full relative flex items-center overflow-hidden">
            <span className="absolute inset-y-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-700 to-gray-500 opacity-60"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;

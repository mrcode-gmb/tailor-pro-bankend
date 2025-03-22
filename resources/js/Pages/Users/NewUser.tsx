import React from "react";

// import { useState } from "react";
// import { Link } from "react-router-dom";
import SideBar from "../../Component/SideBar";
import Footer from "../../Component/Footer";
import WizardForm5 from "../../Component/WizerFormCom/WizardForm5";

const NewUser = () => {
  return (
    <>
      {/* start main body content */}
      <section>
        <div className="2xl:w-10/12 xl:w-10/12 md:w-full sm:w-100  px-7 ml-auto">
          {/* start content header side bar component  */}
          <SideBar pageTitle="Add New User" />
          {/* end content header side bar component  */}

          {/* start dashboad  */}
          <div className="mt-6 relative">
            <div className="-mt-3">
              <div className="w-full p-6 mx-auto">
                <div className="flex flex-wrap -mx-3 min-h-75-screen">
                  <div className="w-full max-w-full px-3 mx-auto shrink-0 md:flex-0 lg:w-8/12">
                    <div className="mt-12 w-full places-sweet-alerts text-center justify-center">
                      <h2 className="text-center text-2xl font-bold">
                        Add New User
                      </h2>
                      <div className=" hover:bg-gray-200 cursor-pointer text-sm text-gray-600">
                        A beautiful plugin, that replace the classic alert,
                        Handcrafted by our friend{" "}
                      </div>
                    </div>

                    <div className="mt-10">
                      <WizardForm5 />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
          {/* end dashboad  */}
        </div>
      </section>
      {/* end main body content */}
    </>
  );
};

export default NewUser;

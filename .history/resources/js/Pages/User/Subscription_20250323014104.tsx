import React, { useState } from "react";
import UserSideBar from "@/Components/MyComponents/UserSideBar";
import { Head, Link } from "@inertiajs/react";
import Footer from "@/Components/MyComponents/Footer";

const Subscription = () => {
  const [showImage, setShowImage] = useState("");
  const [numbers, setNumbers] = useState(0);
  const [showForm, setShowForm] = useState(false);


  return (
    <>
      <Head title="Subscription Plan"/>
      {/* start main body content */}
      <section>
        <div className="2xl:w-10/12 relative xl:w-10/12 md:w-full sm:w-100  px-7 ml-auto">
          <div>
            {/* start content header side bar component  */}
            <UserSideBar pageTitle="Subscription Plan" />
            {/* end content header side bar component  */}
          </div>

          {/* start dashboad  */}
          <div>
            <div className="text-center">
                <h4 className="text-gray-700 text-lg">Messages</h4>
                <p className="text-gray-700 text-sm">If you want you can chat with your Subscription</p>
              {/* <div className="bg-green-500 text-white px-5 py-2 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-nowrap text-sm shadow-lg rounded-lg">
                All
              </div>
              <div className="bg-white px-5 py-2 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-nowrap text-sm text-gray-700 shadow-lg rounded-lg">
                New Modern Design
              </div>
              <div className="bg-white px-5 py-2 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-nowrap text-sm text-gray-700 shadow-lg rounded-lg">
                Full abaya arab
              </div>
              <div className="bg-white px-5 py-2 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-nowrap text-sm text-gray-700 shadow-lg rounded-lg">
                One Time Sweenging
              </div>
              <div className="bg-white px-5 py-2 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-nowrap text-sm text-gray-700 shadow-lg rounded-lg">
                Express In Two Days
              </div>
              <div className="bg-white px-5 py-2 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-nowrap text-sm text-gray-700 shadow-lg rounded-lg">
                New Modern Design
              </div>
              <div className="bg-white px-5 py-2 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-nowrap text-sm text-gray-700 shadow-lg rounded-lg">
                Full abaya arab
              </div>
              <div className="bg-white px-5 py-2 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-nowrap text-sm text-gray-700 shadow-lg rounded-lg">
                One Time Sweenging
              </div>
              <div className="bg-white px-5 py-2 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-nowrap text-sm text-gray-700 shadow-lg rounded-lg">
                Express In Two Days
              </div> */}
            </div>
          </div>

          <div
            className={`grid mt-6 grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6`}
          >
           
          </div>

          <div className=" relative">
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
};
export default Subscription;
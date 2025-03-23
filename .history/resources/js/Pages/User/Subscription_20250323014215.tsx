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
                <p className="text-gray-700 text-sm">MonthPricing Plan</p>
                <h4 className="text-gray-700 text-xl font-semibold">Choose Your Plan</h4>
            
            </div>
          </div>

          <div
            className={`grid mt-6 grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6`}
          >
            dj
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
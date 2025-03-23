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
                <p className="text-gray-700 text-sm">Monthly Pricing Plan</p>
                <h4 className="text-gray-700 text-xl font-semibold">Choose Your Plan</h4>
            
            </div>
          </div>

          <section className="bg-gray-300 font-sans lg:bg-transparent flex flex-col lg:flex-row absolute justify-center lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 px-5 xl:px-0 py-8 lg:py-0 w-full gap-6 items-center lg:items-stretch">
          {PRICING_DATA.map((data, index) => (
            <div key={index} className="relative">
              <div className="max-w-sm xl:w-[384px] p-6 bg-white group h-full rounded-2xl lg:hover:-translate-y-6 ease-in duration-300 hover:bg-[#0B0641] hover:text-white border xl:border-none border-[#0B0641]">
                <div className="flex flex-row gap-5 items-center">
                  <div>{data.iconComponent}</div>
                  <span className="text-3xl font-bold">{data.name}</span>
                </div>
                <span className="flex mt-4 text-[#A9A9AA] text-2xl">
                  What You&apos;ll Get
                </span>
                {data.benefits.map((data, index) => (
                  <div
                    key={index}
                    className="flex flex-row gap-2.5 items-start mt-6 text-left text-lg"
                  >
                    <div className="pt-1 shrink-0">
                      <RightIcon />
                    </div>
                    <span>{data}</span>
                  </div>
                ))}
                <div className="border border-dashed border-[#A9A9AA] tracking-widest my-4" />
                <div className="h-36">
                  <div className="bottom-6 left-6 right-6 absolute">
                    <div className="flex justify-start items-baseline">
                      <span className="text-[32px] font-bold ">{data.price}</span>
                    </div>
                    <button className="w-full px-4 py-3 bg-[#FFF5FA] text-[#FF1D89] group-hover:text-white group-hover:bg-[#FF1D89] rounded-xl mt-6 font-semibold text-xl">
                      Choose
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

          <div className=" relative">
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
};
export default Subscription;


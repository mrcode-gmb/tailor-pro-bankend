import React, { useState } from "react";
import UserSideBar from "@/Components/MyComponents/UserSideBar";
import { Link } from "@inertiajs/react";
import Footer from "@/Components/MyComponents/Footer";

const AiMeasurement = () => {
  const [showImage, setShowImage] = useState("");
  const [numbers, setNumbers] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const generateHumanSize = () => {
    if (showImage != "") {
      setShowForm(true);
      setNumbers(12);
    } else {
      setShowForm(false);
      setNumbers(0);
      alert("Please put you body image");
    }
  };

  return (
    <>
      {/* start main body content */}
      <section>
        <div className="2xl:w-10/12 relative xl:w-10/12 md:w-full sm:w-100  px-7 ml-auto">
          <div>
            {/* start content header side bar component  */}
            <UserSideBar pageTitle="Smart AI Mesurement" />
            {/* end content header side bar component  */}
          </div>

          {/* start dashboad  */}
          <div
            className={`w-full h-80 relative flex items-center overflow-hidden rounded-2xl bg-[url('@/../../public/assets/Pastedimage.png')] bg-cover bg-center p-0`}
          >
            <span className="absolute inset-y-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-700 to-gray-500 opacity-60"></span>

            <div className="m-auto text-center">
              <h4 className="text-white font-semibold text-4xl">
                Hi, Mr Ahmad
              </h4>
              <p className="text-white">
                Your Welcome to TailoringPro, if you want to add mesurement
                manauly
              </p>
            </div>
          </div>

          <div className="w-full">
            <div className="m-auto my-10 text-center">
              <h4 className="text-slate-600 font-semibold text-2xl">
                Add Mesurement
              </h4>
              <p className="text-slate-600">
                Your Welcome to TailoringPro, if you want to add Mesurement
                Using AI Detection
              </p>
            </div>

            <label
              htmlFor="uploade"
              className="w-6/12 max-lg:w-10/12 max-sm:w-11/12 h-60 m-auto p-3 border border-dashed border-gray-400 rounded-xl flex cursor-pointer"
            >
              <i className="fa fa-images m-auto text-5xl text-gray-600"></i>
            </label>
            <input
              type="file"
              hidden
              id="uploade"
              onChange={(e: any) =>
                setShowImage(URL.createObjectURL(e.target.files[0]))
              }
            />

            <div className="text-center mt-4">
              <Link href={showImage} target="_blank">
                {showImage}
              </Link>
            </div>
            <div className="my-4 text-center">
              <button
                onClick={generateHumanSize}
                className="py-4 px-6 bg-green-500 text-white rounded-lg font-semibold"
              >
                Generate & Continue
              </button>
            </div>
            <div
              className={`${
                showForm ? "grid" : "hidden"
              } grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6`}
            >
              <div>
                <div className="bg-white shadow-lg p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <img
                      src="@/../../assets/shoulderWidth.png"
                      className="w-28 h-28 object-cover"
                      alt=""
                    />
                    <div className="text-center">
                      <p className="pb-3 text-slate-600">Shoulder Width</p>
                      <input
                        type="number"
                        className="w-full outline-none appearance-none border border-gray-400 text-center p-2 focus:border-green-700 rounded-lg"
                        value={numbers + Math.floor(Math.random() * 30)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white shadow-lg p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <img
                      src="@/../../public/assets/leftArmLength.png"
                      className="w-28 h-28 object-cover"
                      alt=""
                    />
                    <div className="text-center">
                      <p className="pb-3 text-slate-600">
                        ArmHole (All Around)
                      </p>
                      <input
                        type="number"
                        className="w-full outline-none appearance-none border border-gray-400 text-center p-2 focus:border-green-700 rounded-lg"
                        value={numbers + Math.floor(Math.random() * 30)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white shadow-lg p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <img
                      src="@/../../public/assets/torsolength.png"
                      className="w-28 h-28 object-cover"
                      alt=""
                    />
                    <div className="text-center">
                      <p className="pb-3 text-slate-600">Shirt Length</p>
                      <input
                        type="number"
                        className="w-full outline-none appearance-none border border-gray-400 text-center p-2 focus:border-green-700 rounded-lg"
                        value={numbers + Math.floor(Math.random() * 30)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white shadow-lg p-4 rounded-lg">
                  <div className="flex items-center gap-3">
                    <img
                      src="@/../../public/assets/leftLegLength.jpg"
                      className="w-28 h-28 object-cover"
                      alt=""
                    />
                    <div className="text-center">
                      <p className="pb-3 text-slate-600">Throuseer Lenght</p>
                      <input
                        type="number"
                        className="w-full outline-none appearance-none border border-gray-400 text-center p-2 focus:border-green-700 rounded-lg"
                        value={numbers + Math.floor(Math.random() * 30)}
                      />
                    </div>
                  </div>
                </div>
              </div>
             
            </div>

            <div className="mt-12 ">
              <button
                onClick={generateHumanSize}
                className={`${
                  showForm ? "block" : "hidden"
                } py-4 px-6 bg-green-500 text-white rounded-lg font-semibold cursor-pointer`}
              >
                Save & Continue
              </button>
            </div>
          </div>

          <div className=" relative">
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
};
export default AiMeasurement;

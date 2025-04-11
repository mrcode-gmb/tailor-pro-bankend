import React, { useEffect } from "react";
import img1 from "@/../../public/assets/home-decor-3.jpg";
import { PlusCircle } from "lucide-react";
import CapturePhoto from "../Capture";

const AICaptureModal = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    if (showModal) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  window.onclick = (e: any) => {
    const div = document.getElementById("geModal");
    if (e.target == div) {
      setShowModal(false);
      setIsVisible(false);
    }
  }
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={`py-3 px-5 flex items-center gap-3 text-sm bg-green-500 text-white rounded-lg font-semibold`}
      >
        <PlusCircle className="h-4 w-4 mr-1" /> AI Measurement
      </button>
      {showModal ? (
        <>
          <div className="w-full items-center flex overflow-y-auto inset-0 py-5 fixed z-50 outline-none" id="geModal">
            {/*content*/}
            <div
              className={`border-0 rounded-lg shadow-lg w-4/12 max-lg:w-8/12 max-md:w-11/12 m-auto relative bg-white outline-none
              ${isVisible
                  ? " scale-100 opacity-100 transition-all duration-300 ease-in-out"
                  : "scale-50 opacity-0 "
                } 
          transition-all duration-300 ease-in-out
                `}
            >
              {/*body*/}
              <div className="">
                <div className="p-5 border-b border-gray-300 flex justify-between items-center">
                  <div>
                    <p className="text-lg font-bold text-gray-600">
                      AI Measurements
                    </p>
                    <span>Measure client with photo</span>
                  </div>
                  <i
                    onClick={() => setShowModal(false)}
                    className="fa fa-times font-extrabold text-lg text-gray-600"
                  ></i>
                </div>
                <div>
                  <CapturePhoto />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-45 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default AICaptureModal;

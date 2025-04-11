import React, { useEffect } from "react";

const AddMeasurementComponent = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    if (showModal) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={`py-3 px-5 text-sm bg-green-500 text-white rounded-lg font-semibold`}
      >
        Add Mesurement
      </button>
      {showModal ? (
        <>
          <div className="justify-center w-full items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative flex w-full my-6 mx-auto">
              {/*content*/}
              <div
                className={`border-0 rounded-lg shadow-lg w-4/12 max-lg:w-8/12 max-md:w-10/12 m-auto relative flex flex-col bg-white outline-none focus:outline-none
              ${isVisible
                    ? " scale-100 opacity-100 transition-all duration-300 ease-in-out"
                    : "scale-50 opacity-0 "
                  } 
          transition-all duration-300 ease-in-out
                `}
              >
                {/*body*/}
                <div className="relative flex-auto">
                  <div className="p-5 border-b border-gray-300 flex justify-between items-center">
                    <p className="text-lg font-bold text-gray-600">
                      Generate New Design
                    </p>
                    <i
                      onClick={() => setShowModal(false)}
                      className="fa fa-times font-extrabold text-lg text-gray-600"
                    ></i>
                  </div>
                  <div className="p-5">
                    <div className="mb-6">
                      
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => setShowModal(false)}
                        className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md shadow-sm hover:bg-green-600"
                      >
                        GENERATE
                      </button>
                    </div>
                  </div>
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

export default AddMeasurementComponent;

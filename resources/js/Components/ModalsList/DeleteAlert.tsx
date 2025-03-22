import React from "react";
import { useEffect, useState } from "react";

const DeleteAlert = ({ isOpen, onClose, children }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [hideModal, setHiddeModal] = React.useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleDelete, setIsVisibleDelete] = useState(false);

  useEffect(() => {
    if (showModal) {
      setIsVisible(true); // Trigger transition once modal is shown
    } else {
      setIsVisible(false); // Trigger transition once modal is shown
    }
  });
  useEffect(()=>{
    if(hideModal){
      setIsVisibleDelete(true)
    }else{
      setIsVisibleDelete(false)
    }
  })

  return (
    <>
      <button
        className="inline-block px-6 py-3 mb-0 font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-green-700 to-green-300 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Simple modal
      </button>
      <div
        className={`justify-center items-center ${
          showModal ? "flex" : "hidden"
        } overflow-x-hidden overflow-y-auto fixed outline-none focus:outline-none inset-0 z-40 bg-black bg-opacity-45`}
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/* Content */}
          <div
            className={`border-0 rounded-lg shadow-lg relative flex flex-col w-full px-12 bg-white outline-none focus:outline-none 
        ${
          isVisible
            ? "translate-y-0 opacity-100 transition-all duration-300 ease-in-out"
            : "translate-y-[-100px] opacity-0 "
        } 
        transition-all duration-300 ease-in-out`}
          >
            {/* Body */}
            <div className="relative p-6 flex-auto text-center justify-center">
              <div className="justify-center flex">
                <div className="flex w-24 h-24 border rounded-full border-orange-500">
                  <div className="swal2-icon-content m-auto text-3xl font-bold text-orange-500">
                    !
                  </div>
                </div>
              </div>
              <div className="my-6">
                <p className=" text-3xl mb-3 font-bold text-gray-600">
                  Are you sure?
                </p>
                <p className="text-gray-600 text-lg">
                  You won't be able to revert this!
                </p>
              </div>
              <div className="swal2-actions mt-3 flex gap-3">
                <button
                  type="button"
                  className="swal2-confirm inline-block px-6 py-3 mb-4 font-bold text-center uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-green-600 to-lime-400 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 text-white"
                  onClick={() => (setHiddeModal(true), setShowModal(false))}
                >
                  Yes, delete it!
                </button>
                <button
                  type="button"
                  className="swal2-cancel inline-block px-6 py-3 mb-4 font-bold text-center uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-red-600 to-rose-400 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 text-white"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className={`opacity-25 fixed ${
          showModal ? "flex" : "hidden"
        } inset-0 z-40 bg-black`}
      ></div> */}
      <div
        className={`justify-center items-center ${
          hideModal ? "flex" : "hidden"
        } overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div
            className={`border-0 rounded-lg shadow-lg relative flex flex-col w-full px-12 bg-white outline-none focus:outline-none 
            ${
              isVisibleDelete
                ? "translate-y-0 opacity-100 transition-all duration-300 ease-in-out"
                : "translate-y-[-50px] opacity-0 "
            } 
        transition-all duration-300 ease-in-out`}
          >
            {/*body*/}
            <div className="relative p-6 flex-auto text-center justify-center">
              <div className="justify-center flex">
                <div className="flex w-24 h-24 border rounded-full border-green-500">
                  <div className="swal2-icon-content m-auto text-3xl font-bold text-green-500">
                    <i className="fa fa-check"></i>
                  </div>
                </div>
              </div>
              <div className="my-6">
                <p className=" text-3xl mb-3 font-bold text-gray-600">
                  Deleted!
                </p>
                <p className="text-gray-600 text-lg">
                  Your file has been deleted.
                </p>
              </div>
              <div className="mt-3n gap-3">
                <button
                  type="button"
                  className=" inline-block px-6 py-3 mb-4 font-bold text-center uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-blue-600 to-blue-400 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 text-white"
                  onClick={() => setHiddeModal(false)}
                >
                  OK!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`opacity-45 fixed inset-0 z-40 ${
          hideModal ? "flex" : "hidden"
        } bg-black`}
      ></div>
    </>
  );
};

export default DeleteAlert;

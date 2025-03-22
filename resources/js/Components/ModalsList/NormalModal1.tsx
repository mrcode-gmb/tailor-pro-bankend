import React from "react";

const NormalModal1 = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="inline-block px-6 py-3 mb-0 font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-green-700 to-green-300 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Form Modal
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <div className="text-left">
                    <h2 className="text-lg font-bold mb-1">Normal Form 2</h2>
                    <p className="text-sm text-gray-500">With icons</p>
                  </div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-gray-900 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-gray-900 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center border border-gray-300 rounded-lg px-3.5 py-2.5 bg-white">
                        {/* <!-- Font Awesome Icon --> */}
                        <i className="fas fa-user text-gray-400"></i>

                        {/* <!-- Input Field --> */}
                        <input
                          type="text"
                          placeholder="First Name"
                          className="ml-2 w-full outline-none px-0.5 text-gray-700 bg-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center border border-gray-300 rounded-lg px-3.5 py-2.5 bg-white">
                        <i className="fas fa-user-plus text-gray-400"></i>
                        <input
                          type="text"
                          placeholder="Last Name"
                          className="ml-2 w-full outline-none px-0.5 text-gray-700 bg-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center border border-gray-300 rounded-lg px-3.5 py-2.5 bg-white">
                        <i className="fas fa-earth text-gray-400"></i>
                        <input
                          type="text"
                          placeholder="Country"
                          className="ml-2 w-full outline-none px-0.5 text-gray-700 bg-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center border border-gray-300 rounded-lg px-3.5 py-2.5 bg-white">
                        <i className="fas fa-box text-gray-400"></i>
                        <input
                          type="text"
                          placeholder="Email Address"
                          className="ml-2 w-full outline-none px-0.5 text-gray-700 bg-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center border border-gray-300 rounded-lg px-3.5 py-2.5 bg-white">
                        <i className="fas fa-key text-gray-400"></i>
                        <input
                          type="text"
                          placeholder="Password"
                          className="ml-2 w-full outline-none px-0.5 text-gray-700 bg-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center border border-gray-300 rounded-lg px-3.5 py-2.5 bg-white">
                        <i className="fas fa-key text-gray-400"></i>
                        <input
                          type="text"
                          placeholder="Repeat Password"
                          className="ml-2 w-full outline-none px-0.5 text-gray-700 bg-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md shadow-sm hover:bg-green-600"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default NormalModal1;

import React from "react";

// import { useState } from "react";
// import { Link } from "react-router-dom";
import SideBar from "../../Component/SideBar";
import Footer from "../../Component/Footer";
import WizardForm5 from "../../Component/WizerFormCom/WizardForm5";

const Reports = () => {
  const users = [
    {
      id: 1,
      name: "Jonh Markel",
      email: "jonh@gmail.com",
      country: "Nigeria",
      status: 1,
    },
    {
      id: 1,
      name: "King Jonh Un",
      email: "kingjonhun@gmail.com",
      country: "North Korea",
      status: 3,
    },
    {
      id: 1,
      name: "Maryam Abubakar",
      email: "maryam@yahoo.com",
      country: "Saudi Arabia",
      status: 2,
    },
    {
      id: 1,
      name: "Jonh Markel",
      email: "jonh@gmail.com",
      country: "Nigeria",
      status: 1,
    },
    {
      id: 1,
      name: "King Jonh Un",
      email: "kingjonhun@gmail.com",
      country: "North Korea",
      status: 3,
    },
    {
      id: 1,
      name: "Maryam Abubakar",
      email: "maryam@yahoo.com",
      country: "Saudi Arabia",
      status: 2,
    },
    {
      id: 1,
      name: "Jonh Markel",
      email: "jonh@gmail.com",
      country: "Nigeria",
      status: 1,
    },
    {
      id: 1,
      name: "King Jonh Un",
      email: "kingjonhun@gmail.com",
      country: "North Korea",
      status: 3,
    },
    {
      id: 1,
      name: "Maryam Abubakar",
      email: "maryam@yahoo.com",
      country: "Saudi Arabia",
      status: 2,
    },
  ];
  return (
    <>
      {/* start main body content */}
      <section>
        <div className="2xl:w-10/12 xl:w-10/12 md:w-full sm:w-100  px-7 ml-auto">
          {/* start content header side bar component  */}
          <SideBar pageTitle="Reports" />
          {/* end content header side bar component  */}

          {/* start dashboad  */}
          <div className="mt-6 relative">
            <div className="mt-8">
              <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6">
                <div>
                  <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6">
                    <div className="bg-gradient-to-tr from-slate-800 to-slate-500 rounded-xl p-5">
                      <div className="w-11 h-11 flex bg-white rounded-lg text-gray-600">
                        <i className="fa m-auto fa-user-circle"></i>
                      </div>
                      <div className="mt-6 text-white flex justify-between ">
                        <div className="">
                          <h4 className="font-bold text-xl">1600</h4>
                          <p>Users Active</p>
                        </div>
                        <div className="">
                          <p>+55%</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-tr from-slate-800 to-slate-500 rounded-xl p-5">
                      <div className="w-11 h-11 flex bg-white rounded-lg text-gray-600">
                        <i className="fa m-auto fa-hand-point-left"></i>
                      </div>
                      <div className="mt-6 text-white flex justify-between ">
                        <div className="">
                          <h4 className="font-bold text-xl">357</h4>
                          <p>Click Events</p>
                        </div>
                        <div className="">
                          <p>+124%</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-tr from-slate-800 to-slate-500 rounded-xl p-5">
                      <div className="w-11 h-11 flex bg-white rounded-lg text-gray-600">
                        <i className="fa fa-cart-shopping m-auto"></i>
                      </div>
                      <div className="mt-6 text-white flex justify-between ">
                        <div className="">
                          <h4 className="font-bold text-xl">2300</h4>
                          <p>Purchases</p>
                        </div>
                        <div className="">
                          <p>+15%</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-tr from-slate-800 to-slate-500 rounded-xl p-5">
                      <div className="w-11 h-11 flex bg-white rounded-lg text-gray-600">
                        <i className="fa m-auto fa-thumbs-up"></i>
                      </div>
                      <div className="mt-6 text-white flex justify-between ">
                        <div className="">
                          <h4 className="font-bold text-xl">940</h4>
                          <p>Likes</p>
                        </div>
                        <div className="">
                          <p>+90%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="w-full max-w-full px-3 flex-0">
                    <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-lg dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                      <div className="p-4 pb-0 mb-0 rounded-t-2xl">
                        <h6 className="mb-0 font-semibold">Reviews</h6>
                      </div>
                      <div className="flex-auto p-4 pb-0">
                        <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                          <li className="relative flex items-center px-0 py-2 mb-0 border-0 rounded-t-inherit text-inherit">
                            <div className="w-full">
                              <div className="flex mb-2">
                                <span className="mr-2 font-semibold leading-normal capitalize text-sm">
                                  Positive Reviews
                                </span>
                                <span className="ml-auto font-semibold leading-normal text-sm">
                                  80%
                                </span>
                              </div>
                              <div>
                                <div className="h-0.75 text-xs flex overflow-visible rounded-lg bg-gray-200">
                                  <div className="bg-gradient-to-tl from-blue-600 to-cyan-400 w-80/100 transition-width duration-600 ease-soft rounded-1 -mt-0.4 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap text-center text-white"></div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="relative flex items-center px-0 py-2 mb-2 border-0 text-inherit">
                            <div className="w-full">
                              <div className="flex mb-2">
                                <span className="mr-2 font-semibold leading-normal capitalize text-sm">
                                  Neutral Reviews
                                </span>
                                <span className="ml-auto font-semibold leading-normal text-sm">
                                  17%
                                </span>
                              </div>
                              <div>
                                <div className="h-0.75 text-xs flex overflow-visible rounded-lg bg-gray-200">
                                  <div className="dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-gray-900 to-slate-800 w-17/100 transition-width duration-600 ease-soft rounded-1 -mt-0.4 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap text-center text-white"></div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="relative flex items-center px-0 py-2 mb-2 border-0 rounded-b-inherit text-inherit">
                            <div className="w-full">
                              <div className="flex mb-2">
                                <span className="mr-2 font-semibold leading-normal capitalize text-sm">
                                  Negative Reviews
                                </span>
                                <span className="ml-auto font-semibold leading-normal text-sm">
                                  3%
                                </span>
                              </div>
                              <div>
                                <div className="h-0.75 text-xs flex overflow-visible rounded-lg bg-gray-200">
                                  <div className="bg-gradient-to-tl from-red-600 to-rose-400 w-3/100 transition-width duration-600 ease-soft rounded-1 -mt-0.4 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap text-center text-white"></div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="flex items-center p-4 rounded-b-2xl">
                        <div className="w-3/5">
                          <p className="leading-normal text-sm text-slate-600">
                            More than
                            <b>1,500,000</b>
                            developers used Creative Tim's products and over
                            <b>700,000</b>
                            projects were created.
                          </p>
                        </div>
                        <div className="w-2/5 text-right">
                          <a
                            href="javascript:;"
                            className="inline-block px-6 py-3 mb-0 font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-gray-900 to-slate-800 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                          >
                            View all reviews
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="bg-white rounded-xl drop-shadow-lg mt-6">
                 
                  <div className="overflow-x-auto">
                    <table className=" border-collapse w-full">
                      <thead>
                        <tr className="text-left border-b table-row">
                          <th className="p-4">S/N</th>
                          <th className="p-4">Name</th>
                          <th className="p-4">Email</th>
                          <th className="p-4">Country</th>
                          <th className="p-4">Status</th>
                          <th className="p-4">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user, index) => (
                          <>
                            <tr className="text-left border-b text-nowrap hover:bg-gray-200 cursor-pointer text-sm text-gray-600 table-row">
                              <td className="p-4">{index + 1}</td>
                              <td className="p-4">{user.name}</td>
                              <td className="p-4">{user.email}</td>
                              <td className="p-4">{user.country}</td>
                              <td className="p-4">
                                {user.status == 1 ? (
                                  <span className="text-xs py-1 px-2 bg-green-100 text-green-500 font-bold rounded-lg">
                                    Approved
                                  </span>
                                ) : user.status == 2 ? (
                                  <span className="text-xs py-1 px-2 bg-blue-100 text-blue-500 font-bold rounded-lg">
                                    Pending
                                  </span>
                                ) : user.status == 3 ? (
                                  <span className="text-xs py-1 px-2 bg-red-100 text-red-500 font-bold rounded-lg">
                                    Rejected
                                  </span>
                                ) : (
                                  <span></span>
                                )}
                              </td>
                              <td className="p-4">
                                <i className="fa fa-pencil text-gray-700  text-sm"></i>
                                &nbsp; &nbsp; &nbsp;
                                <span className="fa fa-trash text-gray-700  text-sm"></span>
                              </td>
                            </tr>
                          </>
                        ))}
                      </tbody>
                    </table>
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

export default Reports;

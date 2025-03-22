import React from "react";

// import { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../../Component/SideBar";
import Footer from "../../Component/Footer";
import WizardForm5 from "../../Component/WizerFormCom/WizardForm5";

const Security = () => {
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
          <SideBar pageTitle="Security" />
          {/* end content header side bar component  */}

          {/* start dashboad  */}
          <div className="mt-6 relative">
            <div>
              <div className="flex items-center mt-0 max-md:mt-4 flex-wrap">
                <li className="list-none px-7 py-2 rounded-lg transition-all duration-300 bg-none hover:bg-white hover:shadow-md cursor-pointer">
                  <Link
                    to={""}
                    className="flex text-gray-600 gap-3 items-center"
                  >
                    {/* <i className="fa fa-comments"></i> */}
                    <p>Messages</p>
                  </Link>
                </li>
                <li className="list-none px-7 py-2 rounded-lg transition-all duration-300 bg-none hover:bg-white hover:shadow-md cursor-pointer">
                  <Link
                    to={""}
                    className="flex text-gray-600 gap-3 items-center"
                  >
                    {/* <i className="fa fa-gear"></i> */}
                    <p>Social</p>
                  </Link>
                </li>
                <li className="list-none px-7 py-2 rounded-lg transition-all duration-300 bg-none hover:bg-white hover:shadow-md cursor-pointer">
                  <Link
                    to={""}
                    className="flex text-gray-600 gap-3 items-center"
                  >
                    {/* <i className="fa fa-gear"></i> */}
                    <p>Notifications</p>
                  </Link>
                </li>
                <li className="list-none px-7 py-2 rounded-lg transition-all duration-300 bg-none hover:bg-white hover:shadow-md cursor-pointer">
                  <Link
                    to={""}
                    className="flex text-gray-600 gap-3 items-center"
                  >
                    {/* <i className="fa fa-gear"></i> */}
                    <p>BackUp</p>
                  </Link>
                </li>
              </div>
            </div>

            <div className="mt-8">
              <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-6 pb-5 border-b border-gray-300">
                <div>
                  <div>
                    <label
                      htmlFor="Security Question"
                      className="text-slate-600 text-sm font-bold"
                    >
                      Security Question
                    </label>
                    <select
                      name=""
                      id=""
                      className="w-full mt-2 border-2 rounded-xl border-gray-300 bg-none outline-none p-2 text-sm text-slate-600 appearance-none focus:border-green-500"
                    >
                      <option value="" hidden>
                        Select Security Question
                      </option>
                      <option value="Question 1">Question 1</option>
                      <option value="Question 2">Question 2</option>
                      <option value="Question 3">Question 3</option>
                      <option value="Question 4">Question 4</option>
                      <option value="Question 5">Question 5</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div>
                    <label
                      htmlFor="Security Question"
                      className="text-slate-600 text-sm font-bold"
                    >
                      Your Answer
                    </label>
                    <input
                      type="text"
                      placeholder="Write your answer"
                      className="w-full mt-2 border-2 rounded-xl border-gray-300 bg-none outline-none p-2 text-sm text-slate-600 appearance-none focus:border-green-500"
                    />
                  </div>
                </div>
              </div>
              <div className="grid mt-6 grid-cols-2 max-lg:grid-cols-1 gap-6">
                <div className="">
                  <div
                    className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-lg  rounded-2xl bg-clip-border"
                    id="notifications"
                  >
                    <div className="p-6 rounded-t-2xl">
                      <h5 className="text-slate-600">Security Settings</h5>
                    </div>
                    <div className="flex-auto p-6 pt-0">
                      <div className="overflow-x-auto">
                        <table className="w-full mb-0 align-top border-gray-200 text-slate-500 dark:border-white/40">
                          <tbody>
                            <tr>
                              <td className="p-2 pl-1 align-top border-b whitespace-nowrap dark:border-white/40">
                                <div className="my-auto">
                                  <span className="block text-slate-700">
                                    Notify me via email when logging in
                                  </span>
                                </div>
                              </td>

                              <td className="p-2 align-top bg-transparent text-right border-b whitespace-nowrap dark:border-white/40">
                                <li className="relative ml-4 block px-0 py-2 border-0 text-inherit">
                                  <div className="min-h-6 mb-0.5 block pl-0">
                                    <label className="inline-flex gap-3 items-center cursor-pointer">
                                      <input
                                        type="checkbox"
                                        value=""
                                        className="sr-only peer shrink-0"
                                      />
                                      <div className="relative w-10 h-5 shrink-0 bg-gray-200 peer-focus:outline-none  peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-green-600"></div>
                                    </label>
                                  </div>
                                </li>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-2 pl-1 align-top border-b whitespace-nowrap dark:border-white/40">
                                <div className="my-auto">
                                  <span className="block text-slate-700">
                                    Send SMS confirmation for all online
                                    payments
                                  </span>
                                </div>
                              </td>

                              <td className="p-2 align-top bg-transparent text-right border-b whitespace-nowrap dark:border-white/40">
                                <li className="relative ml-4 block px-0 py-2 border-0 text-inherit">
                                  <div className="min-h-6 mb-0.5 block pl-0">
                                    <label className="inline-flex gap-3 items-center cursor-pointer">
                                      <input
                                        type="checkbox"
                                        value=""
                                        className="sr-only peer shrink-0"
                                      />
                                      <div className="relative w-10 h-5 shrink-0 bg-gray-200 peer-focus:outline-none  peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-green-600"></div>
                                    </label>
                                  </div>
                                </li>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-2 pl-1 align-top border-b whitespace-nowrap dark:border-white/40">
                                <div className="my-auto">
                                  <span className="block text-sm text-slate-700">
                                    Check which devices accessed your account
                                  </span>
                                </div>
                              </td>
                              <td className="p-2 align-top bg-transparent text-right border-b whitespace-nowrap dark:border-white/40">
                                <li className="relative ml-4 block px-0 py-2 border-0 text-inherit">
                                  <div className="min-h-6 mb-0.5 block pl-0">
                                    <label className="inline-flex gap-3 items-center cursor-pointer">
                                      <input
                                        type="checkbox"
                                        value=""
                                        className="sr-only peer shrink-0"
                                      />
                                      <div className="relative w-10 h-5 shrink-0 bg-gray-200 peer-focus:outline-none  peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-green-600"></div>
                                    </label>
                                  </div>
                                </li>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-2 pl-1 align-top border-b-0 whitespace-nowrap dark:border-white/40">
                                <div className="my-auto">
                                  <p className="mb-0 text-sm text-slate-600">
                                    Lock your device with a PIN, pattern, or
                                    password
                                  </p>
                                </div>
                              </td>
                              <td className="p-2 align-top text-right bg-transparent border-b-0 whitespace-nowrap dark:border-white/40">
                                <li className="relative ml-4 block px-0 py-2 border-0 text-inherit">
                                  <div className="min-h-6 mb-0.5 block pl-0">
                                    <label className="inline-flex gap-3 items-center cursor-pointer">
                                      <input
                                        type="checkbox"
                                        value=""
                                        className="sr-only peer shrink-0"
                                      />
                                      <div className="relative w-10 h-5 shrink-0 bg-gray-200 peer-focus:outline-none  peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-green-600"></div>
                                    </label>
                                  </div>
                                </li>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-2 pl-1 align-top border-b-0 whitespace-nowrap dark:border-white/40">
                                <div className="my-auto">
                                  <p className="mb-0 leading-normal text-sm text-slate-600">
                                    Find My Device, make sure your device can be
                                    found if it gets lost
                                  </p>
                                </div>
                              </td>
                              <td className="p-2 align-top text-right bg-transparent border-b-0 whitespace-nowrap dark:border-white/40">
                                <li className="relative ml-4 block px-0 py-2 border-0 text-inherit">
                                  <div className="min-h-6 mb-0.5 block pl-0">
                                    <label className="inline-flex gap-3 items-center cursor-pointer">
                                      <input
                                        type="checkbox"
                                        value=""
                                        className="sr-only peer shrink-0"
                                      />
                                      <div className="relative w-10 h-5 shrink-0 bg-gray-200 peer-focus:outline-none  peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-green-600"></div>
                                    </label>
                                  </div>
                                </li>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-2 pl-1 align-top border-b-0 whitespace-nowrap dark:border-white/40">
                                <div className="my-auto">
                                  <p className="mb-0 leading-normal text-sm text-slate-600">
                                    Manage what apps have access to app-usage
                                    data on your devic
                                  </p>
                                </div>
                              </td>
                              <td className="p-2 align-top text-right bg-transparent border-b-0 whitespace-nowrap dark:border-white/40">
                                <li className="relative ml-4 block px-0 py-2 border-0 text-inherit">
                                  <div className="min-h-6 mb-0.5 block pl-0">
                                    <label className="inline-flex gap-3 items-center cursor-pointer">
                                      <input
                                        type="checkbox"
                                        value=""
                                        className="sr-only peer shrink-0"
                                      />
                                      <div className="relative w-10 h-5 shrink-0 bg-gray-200 peer-focus:outline-none  peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-green-600"></div>
                                    </label>
                                  </div>
                                </li>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="ml-auto mt-4">
                          <button
                            type="button"
                            className="inline-block px-6 py-3 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer active:opacity-85 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:scale-102 active:shadow-soft-xs hover:active:scale-102 border-slate-400 text-slate-400 hover:text-slate-400 hover:opacity-75 hover:shadow-none active:scale-100 active:border-slate-400 active:bg-slate-400 active:text-white hover:active:border-slate-400 hover:active:bg-transparent hover:active:text-slate-400 hover:active:opacity-75 hover:active:shadow-none"
                          >
                            Deactivate
                          </button>
                          <button
                            type="button"
                            className="inline-block px-6 py-3 m-0 ml-2 text-xs font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer ease-soft-in leading-pro tracking-tight-soft bg-gradient-to-tl from-green-600 to-green-400 shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85"
                          >
                            Delete account
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="w-full bg-white shadow-lg rounded-xl p-7">
                      {/* Stepper */}

                      {/* Form Steps */}
                      <div>
                        <div className="mb-4">
                          <h2 className="text-lg text-slate-800">
                            Change Password
                          </h2>
                          <p className="text-sm text-slate-700">
                            We will send you an email with the verification code
                          </p>
                        </div>
                        <form>
                          <div className="">
                            <div className="mb-5">
                              <label className="block text-sm  font-medium text-gray-700">
                                Current password
                              </label>
                              <input
                                type="password"
                                placeholder="Current password"
                                className="mt-1 block w-full border border-gray-300 py-2 px-3.5 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 outline-none"
                              />
                            </div>
                            <div className="mb-5">
                              <label className="block text-sm  font-medium text-gray-700">
                                New password
                              </label>
                              <input
                                type="password"
                                placeholder="New password"
                                className="mt-1 block w-full border border-gray-300 py-2 px-3.5 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 outline-none"
                              />
                            </div>
                            <div className="mt-4">
                              <label className="block text-sm font-medium text-gray-700">
                                Re-type password
                              </label>
                              <input
                                type="password"
                                placeholder="Re-type password"
                                className="mt-1 block w-full border border-gray-300 py-2 px-3.5 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 outline-none"
                              />
                            </div>
                          </div>
                          <div className="w-full">
                            <div className="w-full">
                              <button className="text-center  px-8 w-full py-4 mt-6 mb-0 font-bold text-white uppercase transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-green-500 to-green-400 text-xs ease-soft-in">
                                Update Password
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-lg dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                    <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-4 pb-0">
                      <div className="flex items-center">
                        <h6 className="mb-0 text-slate-600">
                          Two factor authentication
                        </h6>
                        <button
                          type="button"
                          className="inline-block px-8 py-2 mb-0 ml-auto font-bold text-right text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 bg-gradient-to-tl from-gray-900 to-slate-800 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25"
                        >
                          Enable
                        </button>
                      </div>
                    </div>
                    <div className="flex-auto p-4">
                      <p className="mt-4 mb-6 leading-normal text-sm text-slate-600 sm:mt-12">
                        Two-factor authentication adds an additional layer of
                        security to your account by requiring more than just a
                        password to log in.
                      </p>
                      <div className="relative flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-950 dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                        <div className="flex-auto p-4 bg-gradient-to-tl from-gray-900 to-slate-800 dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 rounded-xl">
                          <h6 className="mb-0 text-white">
                            Questions about security?
                          </h6>
                          <p className="mb-6 leading-normal text-white text-sm dark:text-white/60">
                            Have a question, concern, or comment about security?
                            Please contact us.
                          </p>
                          <button
                            type="button"
                            className="inline-block px-6 py-3 mb-0 font-bold text-right uppercase align-middle transition-all border-0 rounded-lg cursor-pointer hover:scale-102 active:opacity-85 hover:shadow-soft-xs bg-gradient-to-tl from-gray-400 to-gray-100 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 text-slate-800"
                          >
                            Contact Us
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl mt-6 shadow-lg">
                    <div className="w-full ">
                      <div>
                        <h5 className="text-slate-500 font-bold ">
                          Password requirements
                        </h5>
                        <p className="mb-2 text-slate-500">
                          Please follow this guide for a strong password:
                        </p>
                        <ul className="pl-6 mb-0 list-disc text-slate-500">
                          <li>
                            <span className="text-sm">
                              One special characters
                            </span>
                          </li>
                          <li>
                            <span className="text-sm">
                              Min 6 characters
                            </span>
                          </li>
                          <li>
                            <span className="text-sm">
                              One number (2 are recommended)
                            </span>
                          </li>
                          <li>
                            <span className="text-sm">
                              Change it often
                            </span>
                          </li>
                        </ul>
                      </div>
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

export default Security;

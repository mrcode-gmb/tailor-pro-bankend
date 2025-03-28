import React from "react";

// import { useState } from "react";
import { Link } from "@inertiajs/react";
import SideBar from "../../Component/SideBar";
import Footer from "../../Component/Footer";
import WizardForm5 from "../../Component/WizerFormCom/WizardForm5";

const Belling = () => {
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
          <SideBar pageTitle="Belling" />
          {/* end content header side bar component  */}

          {/* start dashboad  */}
          <div className="mt-6 relative">
            <div>
              <div className="flex items-center mt-0 max-md:mt-4 flex-wrap">
                <li className="list-none px-7 py-2 rounded-lg transition-all duration-300 bg-none hover:bg-white hover:shadow-md cursor-pointer">
                  <Link
                    href={""}
                    className="flex text-gray-600 gap-3 items-center"
                  >
                    {/* <i className="fa fa-comments"></i> */}
                    <p>Messages</p>
                  </Link>
                </li>
                <li className="list-none px-7 py-2 rounded-lg transition-all duration-300 bg-none hover:bg-white hover:shadow-md cursor-pointer">
                  <Link
                    href={""}
                    className="flex text-gray-600 gap-3 items-center"
                  >
                    {/* <i className="fa fa-gear"></i> */}
                    <p>Social</p>
                  </Link>
                </li>
                <li className="list-none px-7 py-2 rounded-lg transition-all duration-300 bg-none hover:bg-white hover:shadow-md cursor-pointer">
                  <Link
                    href={""}
                    className="flex text-gray-600 gap-3 items-center"
                  >
                    {/* <i className="fa fa-gear"></i> */}
                    <p>Notifications</p>
                  </Link>
                </li>
                <li className="list-none px-7 py-2 rounded-lg transition-all duration-300 bg-none hover:bg-white hover:shadow-md cursor-pointer">
                  <Link
                    href={""}
                    className="flex text-gray-600 gap-3 items-center"
                  >
                    {/* <i className="fa fa-gear"></i> */}
                    <p>BackUp</p>
                  </Link>
                </li>
              </div>
            </div>

            <div className="mt-8">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2">
                  <div className="w-full grid grid-cols-2 gap-6">
                    <div
                      className={` w-full h-60 relative flex items-center overflow-hidden rounded-2xl bg-[url('/../src/assets/curved14.jpg')] bg-cover bg-center p-0`}
                    >
                      <span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 opacity-80"></span>

                      <div className="relative z-10 flex-auto p-4">
                        <i className="p-2 text-white fas fa-wifi"></i>
                        <h5 className="pb-2 mt-6 mb-12 text-white">
                          4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852
                        </h5>
                        <div className="flex">
                          <div className="flex">
                            <div className="mr-6">
                              <p className="mb-0 leading-normal text-white text-sm opacity-80">
                                Card Holder
                              </p>
                              <h6 className="mb-0 text-white">Jack Peterson</h6>
                            </div>
                            <div>
                              <p className="mb-0 leading-normal text-white text-sm opacity-80">
                                Expires
                              </p>
                              <h6 className="mb-0 text-white">11/22</h6>
                            </div>
                          </div>
                          <div className="flex items-end justify-end w-1/5 ml-auto">
                            <img
                              className="w-3/5 mt-2"
                              src="/src/assets/mastercard.webp"
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-wrap -mx-3">
                        <div className="w-full max-w-full px-3 md:w-1/2 md:flex-none">
                          <div className="relative flex flex-col min-w-0 break-words bg-white shadow-lg rounded-2xl bg-clip-border">
                            <div className="p-4 mx-6 mb-0 text-center justify-center border-b-0 ml-auto mr-auto border-b-solid rounded-t-2xl border-b-transparent">
                              <div className="w-16 h-16 text-center bg-center icon  bg-gradient-to-tl flex from-green-700 to-green-300 shadow-soft-2xl rounded-xl">
                                <i className="relative text-white opacity-100 fas fa-landmark text-xl m-auto top-31/100"></i>
                              </div>
                            </div>
                            <div className="flex-auto p-4 pt-0 text-center">
                              <h6 className="mb-0 text-center">Salary</h6>
                              <span className="leading-tight text-xs">
                                Belong Interactive
                              </span>
                              <hr className="h-px my-4 bg-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
                              <h5 className="mb-0">+$2000</h5>
                            </div>
                          </div>
                        </div>
                        <div className="w-full max-w-full px-3 mt-6 md:mt-0 md:w-1/2 md:flex-none">
                          <div className="relative flex flex-col min-w-0 break-words justify-center bg-white border-0 border-transparent border-solid  shadow-lg dark:shadow-soft-dark-xl shadow-soft-xl rounded-2xl bg-clip-border">
                            <div className="p-4 mx-6 mb-0 text-center border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                              <div className="w-16 h-16 text-center bg-center flex icon ml-auto mr-auto bg-gradient-to-tl from-green-700 to-green-300 shadow-soft-2xl rounded-xl">
                                <i className="relative text-white opacity-100 fab m-auto fa-paypal text-xl top-31/100"></i>
                              </div>
                            </div>
                            <div className="flex-auto p-4 pt-0 text-center">
                              <h6 className="mb-0 text-center">Paypal</h6>
                              <span className="leading-tight text-xs">
                                Freelance Payment
                              </span>
                              <hr className="h-px my-4 bg-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
                              <h5 className="mb-0">$455.00</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="max-w-full -mt-4 lg:mb-0 lg:w-full lg:flex-none col-span-2">
                      <div className="relative flex flex-col min-w-0 mt-6 break-words bg-white shadow-lg rounded-2xl bg-clip-border">
                        <div className="p-4 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                          <div className="flex flex-wrap -mx-3">
                            <div className="flex items-center flex-none w-1/2 max-w-full px-3">
                              <h6 className="mb-0">Payment Method</h6>
                            </div>
                            <div className="flex-none w-1/2 max-w-full px-3 text-right">
                              <a
                                className="inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all bg-transparent rounded-lg cursor-pointer leading-pro text-xs ease-soft-in shadow-soft-md bg-150 bg-gradient-to-tl from-gray-900 to-slate-800 dark:bg-gradient-to-tl dark:from-slate-850 dark:to-gray-850 hover:shadow-soft-xs active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25"
                                href="javascript:;"
                              >
                                {" "}
                                <i className="fas fa-plus"> </i>&nbsp;&nbsp;Add
                                New Card
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="flex-auto p-4">
                          <div className="flex flex-wrap -mx-3">
                            <div className="max-w-full px-3 mb-6 md:mb-0 md:w-1/2 md:flex-none">
                              <div className="relative flex flex-row items-center flex-auto min-w-0 p-6 break-words bg-transparent border border-solid shadow-none rounded-xl border-slate-100 bg-clip-border dark:border-slate-700">
                                <img
                                  className="mb-0 mr-4 w-14"
                                  src="/src/assets/mastercard.webp"
                                  alt="logo"
                                />
                                <h6 className="mb-0 ">
                                  ****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;7852
                                </h6>
                                <i
                                  className="ml-auto cursor-pointer fas fa-pencil-alt text-slate-700"
                                  data-target="tooltip_trigger"
                                ></i>
                                <div
                                  className="hidden px-2 py-1  bg-black rounded-lg text-sm"
                                  id="tooltip"
                                  role="tooltip"
                                  data-popper-placement="top"
                                  style={{
                                    position: "absolute",
                                    inset: "auto auto 0px 0px",
                                    margin: "0px",
                                    transform: "translate3d(422px, 277px, 0px)",
                                  }}
                                >
                                  Edit Card
                                  <div
                                    className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                    data-popper-arrow=""
                                    style={{
                                      position: "absolute",
                                      left: "0px",
                                      transform: "translate3d(0px, 0px, 0px)",
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="max-w-full px-3 md:w-1/2 md:flex-none">
                              <div className="relative flex flex-row items-center flex-auto min-w-0 p-6 break-words bg-transparent border border-solid shadow-none rounded-xl border-slate-100 bg-clip-border dark:border-slate-700">
                                <img
                                  className="mb-0 mr-4 w-14"
                                  src="/src/assets/visa.webp"
                                  alt="logo"
                                />
                                <h6 className="mb-0">
                                  ****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;5248
                                </h6>
                                <i
                                  className="ml-auto cursor-pointer fas fa-pencil-alt text-slate-700"
                                  data-target="tooltip_trigger"
                                ></i>
                                <div
                                  className="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                                  id="tooltip"
                                  role="tooltip"
                                  data-popper-placement="top"
                                  style={{
                                    position: "absolute",
                                    inset: "auto auto 0px 0px",
                                    margin: "0px",
                                    transform:
                                      "translate3d(422px, 377.5px, 0px)",
                                  }}
                                >
                                  Edit Card
                                  <div
                                    className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                    data-popper-arrow=""
                                    style={{
                                      position: "absolute",
                                      left: "0px",
                                      transform: "translate3d(0px, 0px, 0px)",
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="w-full">
                    <div className="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-lg w-full rounded-2xl bg-clip-border">
                      <div className="p-4 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
                        <div className="flex flex-wrap -mx-3">
                          <div className="flex items-center flex-none w-1/2 max-w-full px-3">
                            <h6 className="mb-0 ">Invoices</h6>
                          </div>
                          <div className="flex-none w-1/2 max-w-full px-3 text-right">
                            <button className="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointe leading-pro ease-soft-in text-xs bg-150 active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 border-green-500 text-green-500 hover:opacity-75">
                              View All
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="flex-auto p-4 pb-0">
                        <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                          <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-t-inherit text-inherit rounded-xl">
                            <div className="flex flex-col">
                              <h6 className="mb-1 font-semibold leading-normal text-sm text-slate-700 ">
                                March, 01, 2020
                              </h6>
                              <span className="leading-tight text-xs">
                                #MS-415646
                              </span>
                            </div>
                            <div className="flex items-center leading-normal text-sm">
                              $180
                              <button className="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700 ">
                                <i className="mr-1 fas fa-file-pdf text-lg"></i>{" "}
                                PDF
                              </button>
                            </div>
                          </li>
                          <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-xl text-inherit">
                            <div className="flex flex-col">
                              <h6 className="mb-1 font-semibold leading-normal text-sm text-slate-700 ">
                                February, 10, 2021
                              </h6>
                              <span className="leading-tight text-xs">
                                #RV-126749
                              </span>
                            </div>
                            <div className="flex items-center leading-normal text-sm">
                              $250
                              <button className="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700 ">
                                <i className="mr-1 fas fa-file-pdf text-lg"></i>{" "}
                                PDF
                              </button>
                            </div>
                          </li>
                          <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-xl text-inherit">
                            <div className="flex flex-col">
                              <h6 className="mb-1 font-semibold leading-normal text-sm text-slate-700 ">
                                April, 05, 2020
                              </h6>
                              <span className="leading-tight text-xs">
                                #FB-212562
                              </span>
                            </div>
                            <div className="flex items-center leading-normal text-sm">
                              $560
                              <button className="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700 ">
                                <i className="mr-1 fas fa-file-pdf text-lg"></i>{" "}
                                PDF
                              </button>
                            </div>
                          </li>
                          <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-xl text-inherit">
                            <div className="flex flex-col">
                              <h6 className="mb-1 font-semibold leading-normal text-sm text-slate-700 ">
                                June, 25, 2019
                              </h6>
                              <span className="leading-tight text-xs">
                                #QW-103578
                              </span>
                            </div>
                            <div className="flex items-center leading-normal text-sm">
                              $120
                              <button className="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700 ">
                                <i className="mr-1 fas fa-file-pdf text-lg"></i>{" "}
                                PDF
                              </button>
                            </div>
                          </li>
                          <li className="relative flex justify-between px-4 py-2 pl-0 border-0 rounded-b-inherit rounded-xl text-inherit">
                            <div className="flex flex-col">
                              <h6 className="mb-1 font-semibold leading-normal text-sm text-slate-700 ">
                                March, 01, 2019
                              </h6>
                              <span className="leading-tight text-xs">
                                #AR-803481
                              </span>
                            </div>
                            <div className="flex items-center leading-normal text-sm">
                              $300
                              <button className="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700 ">
                                <i className="mr-1 fas fa-file-pdf text-lg"></i>{" "}
                                PDF
                              </button>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex flex-wrap -mx-3">
                <div className="w-full max-w-full px-3 mt-6 md:w-7/12 md:flex-none">
                  <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-lg rounded-2xl bg-clip-border">
                    <div className="p-6 px-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
                      <h6 className="mb-0">Billing Information</h6>
                    </div>
                    <div className="flex-auto p-4 pt-6">
                      <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                        <li className="relative flex p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-500 dark:bg-transparent">
                          <div className="flex flex-col">
                            <h6 className="mb-4 leading-normal text-sm">
                              Oliver Liam
                            </h6>
                            <span className="mb-2 leading-tight text-xs">
                              Company Name:{" "}
                              <span className="font-semibold text-slate-700 sm:ml-2">
                                Viking Burrito
                              </span>
                            </span>
                            <span className="mb-2 leading-tight text-xs">
                              Email Address:{" "}
                              <span className="font-semibold text-slate-700 sm:ml-2">
                                oliver@burrito.com
                              </span>
                            </span>
                            <span className="leading-tight text-xs">
                              VAT Number:{" "}
                              <span className="font-semibold text-slate-700 sm:ml-2">
                                FRB1235476
                              </span>
                            </span>
                          </div>
                          <div className="ml-auto text-right">
                            <a
                              className="relative z-10 inline-block px-4 py-3 mb-0 font-bold text-center text-transparent uppercase align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 bg-gradient-to-tl from-red-600 to-rose-400 hover:scale-102 active:opacity-85 bg-x-25 bg-clip-text"
                              href="javascript:;"
                            >
                              <i className="mr-2 far fa-trash-alt bg-150 bg-gradient-to-tl from-red-600 to-rose-400 bg-x-25 bg-clip-text"></i>
                              Delete
                            </a>
                            <a
                              className="inline-block px-4 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-700"
                              href="javascript:;"
                            >
                              <i
                                className="mr-2 fas fa-pencil-alt text-slate-700"
                                aria-hidden="true"
                              ></i>
                              Edit
                            </a>
                          </div>
                        </li>
                        <li className="relative flex p-6 mt-4 mb-2 border-0 rounded-xl bg-gray-50 dark:bg-transparent">
                          <div className="flex flex-col">
                            <h6 className="mb-4 leading-normal text-sm">
                              Lucas Harper
                            </h6>
                            <span className="mb-2 leading-tight text-xs">
                              Company Name:{" "}
                              <span className="font-semibold text-slate-700 sm:ml-2">
                                Stone Tech Zone
                              </span>
                            </span>
                            <span className="mb-2 leading-tight text-xs">
                              Email Address:{" "}
                              <span className="font-semibold text-slate-700 sm:ml-2">
                                lucas@stone-tech.com
                              </span>
                            </span>
                            <span className="leading-tight text-xs">
                              VAT Number:{" "}
                              <span className="font-semibold text-slate-700 sm:ml-2">
                                FRB1235476
                              </span>
                            </span>
                          </div>
                          <div className="ml-auto text-right">
                            <a
                              className="relative z-10 inline-block px-4 py-3 mb-0 font-bold text-center text-transparent uppercase align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 bg-gradient-to-tl from-red-600 to-rose-400 hover:scale-102 active:opacity-85 bg-x-25 bg-clip-text"
                              href="javascript:;"
                            >
                              <i className="mr-2 far fa-trash-alt bg-150 bg-gradient-to-tl from-red-600 to-rose-400 bg-x-25 bg-clip-text"></i>
                              Delete
                            </a>
                            <a
                              className="inline-block px-4 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-700"
                              href="javascript:;"
                            >
                              <i
                                className="mr-2 fas fa-pencil-alt text-slate-700"
                                aria-hidden="true"
                              ></i>
                              Edit
                            </a>
                          </div>
                        </li>
                        <li className="relative flex p-6 mt-4 mb-2 border-0 rounded-b-inherit rounded-xl bg-gray-50 dark:bg-transparent">
                          <div className="flex flex-col">
                            <h6 className="mb-4 leading-normal text-sm">
                              Ethan James
                            </h6>
                            <span className="mb-2 leading-tight text-xs">
                              Company Name:{" "}
                              <span className="font-semibold text-slate-700 sm:ml-2">
                                Fiber Notion
                              </span>
                            </span>
                            <span className="mb-2 leading-tight text-xs">
                              Email Address:{" "}
                              <span className="font-semibold text-slate-700 sm:ml-2">
                                ethan@fiber.com
                              </span>
                            </span>
                            <span className="leading-tight text-xs">
                              VAT Number:{" "}
                              <span className="font-semibold text-slate-700 sm:ml-2">
                                FRB1235476
                              </span>
                            </span>
                          </div>
                          <div className="ml-auto text-right">
                            <a
                              className="relative z-10 inline-block px-4 py-3 mb-0 font-bold text-center text-transparent uppercase align-middle transition-all border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 bg-gradient-to-tl from-red-600 to-rose-400 hover:scale-102 active:opacity-85 bg-x-25 bg-clip-text"
                              href="javascript:;"
                            >
                              <i className="mr-2 far fa-trash-alt bg-150 bg-gradient-to-tl from-red-600 to-rose-400 bg-x-25 bg-clip-text"></i>
                              Delete
                            </a>
                            <a
                              className="inline-block px-4 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-700"
                              href="javascript:;"
                            >
                              <i
                                className="mr-2 fas fa-pencil-alt text-slate-700"
                                aria-hidden="true"
                              ></i>
                              Edit
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full max-w-full px-3 mt-6 md:w-5/12 md:flex-none">
                  <div className="relative flex flex-col h-full min-w-0 mb-6 break-words bg-white border-0 shadow-lg rounded-2xl bg-clip-border">
                    <div className="p-6 px-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
                      <div className="flex flex-wrap -mx-3">
                        <div className="max-w-full px-3 md:w-1/2 md:flex-none">
                          <h6 className="mb-0">Your Transactions</h6>
                        </div>
                        <div className="flex items-center justify-end max-w-full px-3 md:w-1/2 md:flex-none">
                          <i className="mr-2 far fa-calendar-alt"></i>
                          <small>23 - 30 March 2020</small>
                        </div>
                      </div>
                    </div>
                    <div className="flex-auto p-4 pt-6">
                      <h6 className="mb-4 font-bold leading-tight uppercase text-xs text-slate-500">
                        Newest
                      </h6>
                      <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                        <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-t-inherit text-inherit rounded-xl">
                          <div className="flex items-center">
                            <button className="leading-pro ease-soft-in text-xs bg-150 w-6 h-6 p-1.2 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-red-600 border-transparent bg-transparent text-center align-middle font-bold uppercase text-red-600 transition-all hover:opacity-75">
                              <i className="fas fa-arrow-down text-3xs"></i>
                            </button>
                            <div className="flex flex-col">
                              <h6 className="mb-1 leading-normal text-sm text-slate-700">
                                Netflix
                              </h6>
                              <span className="leading-tight text-xs">
                                27 March 2020, at 12:30 PM
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-center">
                            <p className="relative z-10 inline-block m-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-red-600 to-rose-400 text-sm bg-clip-text">
                              - $ 2,500
                            </p>
                          </div>
                        </li>
                        <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 border-t-0 rounded-b-inherit text-inherit rounded-xl">
                          <div className="flex items-center">
                            <button className="leading-pro ease-soft-in text-xs bg-150 w-6 h-6 p-1.2 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-lime-500 border-transparent bg-transparent text-center align-middle font-bold uppercase text-lime-500 transition-all hover:opacity-75">
                              <i className="fas fa-arrow-up text-3xs"></i>
                            </button>
                            <div className="flex flex-col">
                              <h6 className="mb-1 leading-normal text-sm text-slate-700">
                                Apple
                              </h6>
                              <span className="leading-tight text-xs">
                                27 March 2020, at 04:30 AM
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-center">
                            <p className="relative z-10 inline-block m-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 text-sm bg-clip-text">
                              + $ 2,000
                            </p>
                          </div>
                        </li>
                      </ul>
                      <h6 className="my-4 font-bold leading-tight uppercase text-xs text-slate-500">
                        Yesterday
                      </h6>
                      <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                        <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 rounded-t-inherit text-inherit rounded-xl">
                          <div className="flex items-center">
                            <button className="leading-pro ease-soft-in text-xs bg-150 w-6 h-6 p-1.2 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-lime-500 border-transparent bg-transparent text-center align-middle font-bold uppercase text-lime-500 transition-all hover:opacity-75">
                              <i className="fas fa-arrow-up text-3xs"></i>
                            </button>
                            <div className="flex flex-col">
                              <h6 className="mb-1 leading-normal text-sm text-slate-700">
                                Stripe
                              </h6>
                              <span className="leading-tight text-xs">
                                26 March 2020, at 13:45 PM
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-center">
                            <p className="relative z-10 inline-block m-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 text-sm bg-clip-text">
                              + $ 750
                            </p>
                          </div>
                        </li>
                        <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 border-t-0 text-inherit rounded-xl">
                          <div className="flex items-center">
                            <button className="leading-pro ease-soft-in text-xs bg-150 w-6 h-6 p-1.2 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-lime-500 border-transparent bg-transparent text-center align-middle font-bold uppercase text-lime-500 transition-all hover:opacity-75">
                              <i className="fas fa-arrow-up text-3xs"></i>
                            </button>
                            <div className="flex flex-col">
                              <h6 className="mb-1 leading-normal text-sm text-slate-700">
                                HubSpot
                              </h6>
                              <span className="leading-tight text-xs">
                                26 March 2020, at 12:30 PM
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-center">
                            <p className="relative z-10 inline-block m-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 text-sm bg-clip-text">
                              + $ 1,000
                            </p>
                          </div>
                        </li>
                        <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 border-t-0 text-inherit rounded-xl">
                          <div className="flex items-center">
                            <button className="leading-pro ease-soft-in text-xs bg-150 w-6 h-6 p-1.2 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-lime-500 border-transparent bg-transparent text-center align-middle font-bold uppercase text-lime-500 transition-all hover:opacity-75">
                              <i className="fas fa-arrow-up text-3xs"></i>
                            </button>
                            <div className="flex flex-col">
                              <h6 className="mb-1 leading-normal text-sm text-slate-700">
                                Creative Tim
                              </h6>
                              <span className="leading-tight text-xs">
                                26 March 2020, at 08:30 AM
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-center">
                            <p className="relative z-10 items-center inline-block m-0 font-semibold leading-normal text-transparent bg-gradient-to-tl from-green-600 to-lime-400 text-sm bg-clip-text">
                              + $ 2,500
                            </p>
                          </div>
                        </li>
                        <li className="relative flex justify-between px-4 py-2 pl-0 mb-2 border-0 border-t-0 rounded-b-inherit text-inherit rounded-xl">
                          <div className="flex items-center">
                            <button className="leading-pro ease-soft-in text-xs bg-150 w-6 h-6 p-1.2 rounded-3.5xl tracking-tight-soft bg-x-25 mr-4 mb-0 flex cursor-pointer items-center justify-center border border-solid border-slate-700 border-transparent bg-transparent text-center align-middle font-bold uppercase text-slate-700 transition-all hover:opacity-75">
                              <i className="fas fa-exclamation text-3xs"></i>
                            </button>
                            <div className="flex flex-col">
                              <h6 className="mb-1 leading-normal text-sm text-slate-700">
                                Webflow
                              </h6>
                              <span className="leading-tight text-xs">
                                26 March 2020, at 05:00 AM
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-center">
                            <p className="flex items-center m-0 font-semibold leading-normal text-sm text-slate-700">
                              Pending
                            </p>
                          </div>
                        </li>
                      </ul>
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

export default Belling;

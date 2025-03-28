import React from "react";

// import { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../../Component/SideBar";
import Footer from "../../Component/Footer";
import WizardForm5 from "../../Component/WizerFormCom/WizardForm5";

const Invoice = () => {
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
          <SideBar pageTitle="Invoice" />
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

            <div className="mt-14">
              <div className="p-6 rounded-xl bg-white w-9/12 max-lg:w-11/12 m-auto h-full shadow-lg">
                <div className="">
                  <img
                    src="/src/assets/logo-ct-dark.webp"
                    className="w-16"
                    alt=""
                  />
                </div>
                <div className="py-4 flex max-lg:grid gap-6 justify-between items-center">
                  <div>
                    <div>
                      <h4 className="text-slate-600 font-semibold">
                        St. Independence Embankment, 050105 <br /> Bucharest,
                        Romania
                      </h4>
                      <p className="text-slate-600 text-sm mt-1">
                        tel: +234 (803) 7858023
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h4 className="text-slate-600 font-semibold">
                        Billed to: John Doe
                      </h4>
                      <p className="text-slate-600 text-sm mt-1">
                        4006 Locust View Drive
                      </p>
                      <p className="text-slate-600 text-sm mt-1">
                        San Francisco CA
                      </p>
                      <p className="text-slate-600 text-sm mt-1">Nigeria</p>
                    </div>
                  </div>
                </div>

                <div className="py-4 flex max-lg:grid gap-6 justify-between items-baseline">
                  <div>
                    <div>
                      <p className="text-slate-600">Invoice no</p>
                      <h4 className="text-slate-600 font-semibold">#0453119</h4>
                    </div>
                  </div>
                  <div>
                    <div className="text-left mt-20">
                      <div className="flex justify-between items-center gap-14">
                        <p className="text-slate-600">Invoice date:</p>
                        <h4 className="text-slate-600 font-semibold">
                          06/03/2019
                        </h4>
                      </div>
                      <div className="flex justify-between items-center gap-14">
                        <p className="text-slate-600">Due date:</p>
                        <h4 className="text-slate-600 font-semibold">
                          11/03/2019
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="py-10">
                  <div className="bg-white rounded-xl">
                   
                    <table className="-mt-6 border-collapse w-full">
                      <thead>
                        <tr className="text-left border-b table-row">
                          <th className="p-4">Item</th>
                          <th className="p-4">Rate</th>
                          <th className="p-4">Rate</th>
                          <th className="p-4">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="text-left border-b hover:bg-gray-200 cursor-pointer table-row">
                          <td className="p-4">Premium Support</td>
                          <td className="p-4">1</td>
                          <td className="p-4">$ 89.00</td>
                          <td className="p-4">$ 1000</td>
                        </tr>
                        <tr className="text-left border-b hover:bg-gray-200 cursor-pointer table-row">
                          <td className="p-4">Soft UI Design System PRO</td>
                          <td className="p-4">2</td>
                          <td className="p-4">$ 89.00</td>
                          <td className="p-4">$ 1000</td>
                        </tr>
                        <tr className="text-left border-b hover:bg-gray-200 cursor-pointer table-row">
                          <td className="p-4">Parts for service</td>
                          <td className="p-4">3</td>
                          <td className="p-4">$ 89.00</td>
                          <td className="p-4">$ 1000</td>
                        </tr>
                        <tr className="text-left border-b hover:bg-gray-200 cursor-pointer table-row">
                          <td className="p-4"></td>
                          <td className="p-4"></td>
                          <td className="p-4 font-bold text-lg">Total</td>
                          <td className="p-4 font-bold">$ 1000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="flex justify-between items-end flex-wrap gap-10">
                  <div>
                    <h4 className="text-slate-600 font-semibold text-xl">
                      Thank you!
                    </h4>
                    <p className="text-slate-600 my-2">
                      If you encounter any issues related to the invoice you can{" "}
                      <br /> contact us at:
                    </p>
                    <p className="text-slate-600">
                      email: <b>support@creative-tim.com</b>
                    </p>
                  </div>
                  <div>
                    <button onClick={(e)=> window.print()} className="bg-gradient-to-tr from-green-500 to bg-green-200 py-2 px-6 text-white font-bold rounded-lg shadow-lg">
                      PRINT
                    </button>
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

export default Invoice;

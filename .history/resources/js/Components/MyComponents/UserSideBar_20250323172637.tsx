import { Link } from "@inertiajs/react";
import React, { useState } from "react";

const sidebarData = [
  {
    title: "Add Mesurement",
    icon: "fa-table-columns",
    children: [
      { title: "Manual Entry", link: route("measurement.index") },
      { title: "AI Entry", link: route("measurement.aiMeasurement") },
    ],
  },
  {
    title: "Orders",
    icon: " fa-cart-shopping",
    children: [
      { title: "My Order", link: route("order.index") },
      { title: "New Order", link: route("order.newOrder") },
    ],
  },
  {
    title: "Tailor",
    icon: "fa-user-group",
    children: [
      { title: "My Tailors", link: route("tailors.index") },
      { title: "Find Tailors", link: route("tailors.newTailors") },
    ],
  },

  {
    title: "Generate Design",
    icon: "fa-regular fa-window-restore",
    children: [
      { title: "AI Design", link: route("design.index") },
      { title: "Manual Design", link: route('design.manualDesign') },
    ],
  },
];

const UserSideBar = ({ pageTitle }:any) => {
  const [openMenus, setOpenMenus]:any = useState({});

  const [isMenuOpening, setSidebar] = useState(false);
  const [openDrop, setOpenDrop] = useState(false);

  const openDropDown = () => {
    if (openDrop == true) {
      setOpenDrop(false);
    } else {
      setOpenDrop(true);
    }
  };

  const toggleMenuAll = (param:any) => {
    setSidebar(param);
  };

  // Toggle Menu
  const toggleMenu = (menuTitle:any) => {
    setOpenMenus((prev:any) => ({
      ...prev,
      [menuTitle]: !prev[menuTitle],
    }));
  };
  return (
    <>
      <div
        className={`2xl:p-8 fixed inset-y-0 left-0 flex-wrap items-center justify-between overflow-y-auto transition-all duration-200 bg-white z-40 border-0 shadow-lg xl:p-6 max-xl:px-6 max-xl:w-72 max-xl:shadow-2xl max-xl:min-h-full dark:bg-gray-100  ease-soft-in-out w-1/6 xl:translate-x-0 xl:bg-transparent ${
          isMenuOpening ? `` : `-translate-x-full`
        }`}
      >
        <div
          className="top-2 -right-1 z-50 bg-green-500 text-white w-10 h-10 hidden max-xl:flex rounded-s-full flex absolute"
          onClick={() => toggleMenuAll(false)}
        >
          <i className="fa fa-angle-left m-auto"></i>
        </div>
        <div className="flex items-center gap-3 border-b-slate-50 max-xl:pt-8">
          <i className="fa text-2xl fa-atom"></i>
          <h3 className="text-nowrap">TailoringPro</h3>
        </div>
        <nav className="py-12 ">
          <ul className="gap-y-3">
            <li>
              <Link
              href={route("dashboard")}
                className="flex items-center gap-2 py-3 px-3 bg-white hover:bg-white rounded-lg"
              >
                <div className="bg-green-500 size-8 rounded-lg flex">
                  <i className="fa fa-home m-auto text-white text-sm"></i>
                </div>
                <p className="text-sm text-slate-600">Dasboard</p>
              </Link>
            </li>
            <div className="font-bold mb-1 mt-7 px-3 border-r-red-500">
              <h4 className="text-slate-600">Pages</h4>
            </div>
            {sidebarData.map((menu:any) => (
              <li key={menu.title} className="list-item transition-all duration-500">
                <div
                  onClick={() => toggleMenu(menu.title)}
                  className="flex cursor-default items-center justify-between gap-2 py-3 px-3 transition-all duration-400 hover:bg-white rounded-lg "
                >
                  <div className="flex items-center gap-2">
                    <div className="bg-white text-slate-600 shadow-md rounded-lg size-8 flex">
                      <i className={`fa ${menu.icon} m-auto text-sm`}></i>
                    </div>
                    <p className="text-sm text-slate-600 text-nowrap">
                      {menu.title}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    {menu.children && (
                      <i
                        className={`fa ${
                          openMenus[menu.title]
                            ? "fa-angle-up"
                            : "fa-angle-down"
                        } text-sm text-gray-400`}
                      ></i>
                    )}
                  </div>
                </div>
                {openMenus[menu.title] && menu.children && (
                  <ul className="ml-10 mt-2 space-y-2 text-slate-600 transition-all duration-500">
                    {menu.children.map((child: any) =>
                      child.children ? (
                        <li key={child.title}>
                          <button
                            className="flex justify-between w-full text-left hover:text-gray-900 text-sm text-slate-600"
                            onClick={() => toggleMenu(child.title)}
                          >
                            <div className="text-nowrap">
                              <i
                                className="fa fa-circle text-xs text-slate-400"
                                style={{ fontSize: "7px" }}
                              ></i>{" "}
                              &nbsp; &nbsp; {child.title}
                            </div>

                            {/* <i
                              className={`fa ${
                                openMenus[child.title]
                                  ? "fa-angle-up"
                                  : "fa-angle-down"
                              } text-sm text-gray-400`}
                            ></i> */}
                          </button>
                          {openMenus[child.title] && (
                            <ul className="ml-5 mt-2 space-y-1">
                              {child.children.map((subChild: any) => (
                                <li key={subChild.title}>
                                  <Link
                                    href={subChild.link}
                                    className="hover:text-gray-900 text-sm text-nowrap text-slate-600"
                                  >
                                    <i
                                      className="fa fa-circle text-xs text-slate-400"
                                      style={{ fontSize: "7px" }}
                                    ></i>{" "}
                                    &nbsp; &nbsp;
                                    {subChild.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ) : (
                        <li key={child.title}>
                          <Link
                            href={child.link}
                            className="hover:text-gray-900 text-sm text-nowrap text-slate-600"
                          >
                            <i
                              className="fa fa-circle text-xs text-slate-400"
                              style={{ fontSize: "7px" }}
                            ></i>{" "}
                            &nbsp; &nbsp;
                            {child.title}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                )}
              </li>
            ))}
            {/* <li>
                            <Link className="flex items-center gap-2 py-3 px-3 hover:bg-white rounded-lg">
                                <div className="bg-white text-slate-600 shadow-md rounded-lg size-8 flex">
                                    <i className="fa fa-screwdriver-wrench m-auto text-sm"></i>
                                </div>
                                <p className="text-sm text-slate-600">Applications</p>
                            </Link>
                        </li>
                         */}

            <div className="font-bold mb-1 mt-7 px-3 border-r-red-500">
              <h4 className="text-slate-600">Links</h4>
            </div>
            <li>
              <Link href={route("messages.index")} className="flex items-center gap-2 py-3 px-3 hover:bg-white rounded-lg">
                <div className="bg-white text-slate-600 shadow-md rounded-lg size-8 flex">
                  <i className="fa fa-regular fa-comment m-auto text-sm"></i>
                </div>
                <p className="text-sm text-slate-600">Messages</p>
              </Link>
            </li>
            <li>
              <Link
                href={route("subscription.index")}
                className="flex text-nowrap items-center gap-2 py-3 px-3 hover:bg-white rounded-lg"
              >
                <div className="bg-white text-slate-600 shadow-md rounded-lg size-8 flex">
                  <i className="fa fa-brands fa-paypal m-auto text-sm"></i>
                </div>
                <p className="text-sm text-slate-600">Subscription</p>
              </Link>
            </li>
            <li>
              <Link
                href={``}
                className="flex text-nowrap items-center gap-2 py-3 px-3 hover:bg-white rounded-lg"
              >
                <div className="bg-white text-slate-600 shadow-md rounded-lg size-8 flex">
                  <i className="fa fa-gear m-auto text-sm"></i>
                </div>
                <p className="text-sm text-slate-600">Settings</p>
              </Link>
            </li>
            <li>
              <Link
                href={``}
                className="flex text-nowrap items-center gap-2 py-3 px-3 hover:bg-white rounded-lg"
              >
                <div className="bg-white text-slate-600 shadow-md rounded-lg size-8 flex">
                  <i className="fa fa-circle-question m-auto text-sm"></i>
                </div>
                <p className="text-sm text-slate-600">FAQs</p>
              </Link>
            </li>
            <li>
              <Link
                href={``}
                className="flex text-nowrap items-center gap-2 py-3 px-3 hover:bg-white rounded-lg"
              >
                <div className="bg-white text-slate-600 shadow-md rounded-lg size-8 flex">
                  <i className="fa fa-wallet m-auto text-sm"></i>
                </div>
                <p className="text-sm text-slate-600">Contact Us</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="">
        <div className="flex bg-white w-full fixed left-0 z-40 top-0 shadow-md justify-between items-center px-4 py-2">
          <div className="flex items-center gap-6">
            <div className="flex gap-3 items-center font-extrabold text-xl text-gray-600">
              <i className="fa fa-align-left" onClick={() => toggleMenuAll(true)}></i>
              <img src="@/../../assets/Screenshot_from_2025-03-23_17-12-19-removebg-preview.png" className="w-[8.5rem]" alt="" />
              <div className="relative flex max-xl:hidden ml-10">
                <input
                  type="search"
                  placeholder="Type here..."
                  className="p-3 py-2 outline-none w-[300px] rounded-lg text-sm border border-gray-300 focus:border-green-600"
                />
              </div>
            </div>
            
          </div>
          <div className="flex justify-end items-center gap-5 text-slate-600">
            <div className="relative flex gap-5 max-xl:hidden">
                <div className="text-xl cursor-pointer">
                  <i className="fa fa-bell"></i>
                </div>
                <div>
                  <i className="fa fa-window"></i>
                </div>
                <div>
                  <i className="fa fa-bell"></i>
                </div>
            </div>
            <div className="relative">
              <img
                src="@/../../assets/softwere.jpeg"
                className="w-10 h-10 object-cover rounded-full cursor-pointer"
                alt=""
                onClick={openDropDown}
              />
              <div
                className={`absolute py-4 px-2 right-1 mt-4 z-20 bg-white shadow-lg rounded-xl ${
                  openDrop ? "block" : "hidden"
                }`}
              >
                <li className="list-none p-5 py-1 transition-all duration-200 hover:underline">
                  <Link href={route("profile.edit")} className="text-nowrap text-sm">
                    My Account
                  </Link>
                </li>
                <li className="list-none p-5 py-1 transition-all duration-200 hover:underline">
                  <Link href={""} className="text-nowrap text-sm">
                    Settings
                  </Link>
                </li>
                <li className="list-none p-5 py-1 transition-all duration-200 hover:underline">
                  <Link href={""} className="text-nowrap text-sm">
                    Logout
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSideBar;

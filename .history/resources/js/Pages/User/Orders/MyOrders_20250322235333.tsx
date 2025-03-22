import React, { useState } from "react";
import UserSideBar from "@/Components/MyComponents/UserSideBar";
import { Link } from "@inertiajs/react";
import Footer from "@/Components/MyComponents/Footer";

const MyOrders = () => {
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

  const folders = [
    {
      name: "Hausawa Female Design",
      img: "@/../../assets/dinki_collection-20240204-0223-1.webp",
    },

    {
      name: "Jumpsuite Style",
      img: "/src/assets/jumpsuite01.jpg",
    },

    {
      name: "Chanis Design",
      img: "/src/assets/download.png",
    },
    {
      name: "Hausa Men's Fashion Styles",
      img: "/src/assets/images.jpeg",
    },
    {
      name: "Hausa Men's Fashion",
      img: "/src/assets/download.png",
    },
    {
      name: "Hausawa Design",
      img: "/src/assets/download.png",
    },
    {
      name: "Hausawa Design",
      img: "/src/assets/download.png",
    },
    {
      name: "Suit",
      img: "/src/assets/suit01a.jpg",
    },
    {
      name: "Hausawa Design",
      img: "/src/assets/download.png",
    },
    {
      name: "Hausawa Design",
      img: "/src/assets/download.png",
    },
    {
      name: "Hausawa Male Design",
      img: "/src/assets/7e78dcc30120ca0b2d9a3c16893aab50.jpg",
    },
    {
      name: "Hausawa Design",
      img: "/src/assets/download.png",
    },
  ];

  return (
    <>
      {/* start main body content */}
      <section>
        <div className="2xl:w-10/12 relative xl:w-10/12 md:w-full sm:w-100  px-7 ml-auto">
          <div>
            {/* start content header side bar component  */}
            <UserSideBar pageTitle="My Orders" />
            {/* end content header side bar component  */}
          </div>

          {/* start dashboad  */}
          <div>
            <div className="flex mt- flex-nowwrap gap-4 bg-white p-4 rounded-lg overflow-x-auto">
              {/* <div>
                <h4 className="text-lg text-gray-600 font-semibold">
                  My Orders
                </h4>
                <p className="text-sm text-gray-600">
                  Through our you can explore and generate new modern teloring
                  design
                </p>
              </div>
              <div className="max-md:mt-4">
                
                <SweerthAlert></SweerthAlert>
                
              </div> */}

              <div className="bg-green-500 text-white px-5 py-2 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-nowrap text-sm shadow-lg rounded-lg">
                All
              </div>
              <div className="bg-white px-5 py-2 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-nowrap text-sm text-gray-700 shadow-lg rounded-lg">
                Phones & Communications
              </div>
              <div className="bg-white px-5 py-2 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-nowrap text-sm text-gray-700 shadow-lg rounded-lg">
                Consumer Electronics
              </div>
              <div className="bg-white px-5 py-2 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-nowrap text-sm text-gray-700 shadow-lg rounded-lg">
                Bags & Box
              </div>
              <div className="bg-white px-5 py-2 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-nowrap text-sm text-gray-700 shadow-lg rounded-lg">
                Toys & Hobbies
              </div>
              <div className="bg-white px-5 py-2 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-nowrap text-sm text-gray-700 shadow-lg rounded-lg">
                Phones & Communications
              </div>
              <div className="bg-white px-5 py-2 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-nowrap text-sm text-gray-700 shadow-lg rounded-lg">
                Consumer Electronics
              </div>
              <div className="bg-white px-5 py-2 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-nowrap text-sm text-gray-700 shadow-lg rounded-lg">
                Bags & Box
              </div>
              <div className="bg-white px-5 py-2 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-nowrap text-sm text-gray-700 shadow-lg rounded-lg">
                Toys & Hobbies
              </div>
            </div>
          </div>

          <div
            className={`grid mt-6 grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6`}
          >
            {folders.map((folder) => (
              <>
                  <div className="bg-white shadow-lg p-4 rounded-lg">
                    <div className="">
                      <div className="relative">
                        <img
                          src={folder.img}
                          className="w-full h-48 rounded-lg object-cover z-10"
                          alt=""
                        />
                        <div className="absolute bottom-4 right-4 w-10 h-10 flex bg-white shadow-lg rounded-full z-20 transition-all duration-300 text-gray-600 hover:bg-green-500 hover:text-white">
                          <i className="fa fa-eye m-auto text-sm"></i>
                        </div>
                      </div>
                      <div className="my-3">
                        <p className="text-lg text-red-500">
                          <small>NGN</small> 2000
                        </p>
                        <p className="text-sm my-1 uppercase text-gray-700">
                          {folder.name}
                        </p>
                        <p className="text-sm capitalize text-gray-700">
                          Shipping fee,{" "}
                          <small className="text-red-500">NGN</small> 250
                        </p>
                      </div>
                      <div>
                        <button className="bg-green-500 text-white w-full px-5 py-2 cursor-pointer transition-all duration-500 hover:bg-green-600 hover:text-white text-nowrap text-sm shadow-lg rounded-lg">
                          Trach Order
                        </button>
                      </div>
                    </div>
                  </div>
              </>
            ))}
          </div>

          <div className=" relative">
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
};
export default MyOrders;

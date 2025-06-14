import React, { useState } from "react";
import UserSideBar from "@/Components/MyComponents/UserSideBar";
import { Head, Link } from "@inertiajs/react";
import Footer from "@/Components/MyComponents/Footer";
const FollowNewTailors = () => {
  const [showImage, setShowImage] = useState("");
  const [numbers, setNumbers] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const folders = [
    {
      name: "Hauwa`u Muhammad",
      img: "@/../../assets/dinki_collection-20240204-0223-1.webp",
    },

    {
      name: "Maylas Phatee",
      img: "@/../../assets/jumpsuite01.jpg",
    },

    {
      name: "Chanis Design",
      img: "@/../../assets/download.png",
    },
    {
      name: "Hausa Men's Fashion Styles",
      img: "@/../../assets/images.jpeg",
    },
    {
      name: "Hausa Men's Fashion",
      img: "@/../../assets/download.png",
    },
    {
      name: "Hausawa Design",
      img: "@/../../assets/download.png",
    },
    {
      name: "Hausawa Design",
      img: "@/../../assets/download.png",
    },
    {
      name: "Suit",
      img: "@/../../assets/suit01a.jpg",
    },
    {
      name: "Hausawa Design",
      img: "@/../../assets/download.png",
    },
    {
      name: "Hausawa Design",
      img: "@/../../assets/download.png",
    },
    {
      name: "Hausawa Male Design",
      img: "@/../../assets/7e78dcc30120ca0b2d9a3c16893aab50.jpg",
    },
    {
      name: "Hausawa Design",
      img: "@/../../assets/download.png",
    },
  ];

  return (
    <>
      <Head title="Find Tailors"/>
      {/* start main body content */}
      <section>
        <div className="2xl:w-10/12 relative xl:w-10/12 md:w-full sm:w-100  px-7 ml-auto">
          <div>
            {/* start content header side bar component  */}
            <UserSideBar pageTitle="Find Tailors" />
            {/* end content header side bar component  */}
          </div>

          {/* start dashboad  */}
          <div>
            <div className="flex mt- flex-nowwrap gap-4 bg-white p-4 rounded-lg overflow-x-auto">
             

              <div className="bg-green-500 text-white px-5 py-2 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-nowrap text-sm shadow-lg rounded-lg">
                All
              </div>
              <div className="bg-white px-5 py-2 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-nowrap text-sm text-gray-700 shadow-lg rounded-lg">
                New Modern Design
              </div>
              <div className="bg-white px-5 py-2 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-nowrap text-sm text-gray-700 shadow-lg rounded-lg">
                Full abaya arab
              </div>
              <div className="bg-white px-5 py-2 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-nowrap text-sm text-gray-700 shadow-lg rounded-lg">
                One Time Sweenging
              </div>
              <div className="bg-white px-5 py-2 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-nowrap text-sm text-gray-700 shadow-lg rounded-lg">
                Express In Two Days
              </div>
              <div className="bg-white px-5 py-2 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-nowrap text-sm text-gray-700 shadow-lg rounded-lg">
                New Modern Design
              </div>
              <div className="bg-white px-5 py-2 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-nowrap text-sm text-gray-700 shadow-lg rounded-lg">
                Full abaya arab
              </div>
              <div className="bg-white px-5 py-2 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-nowrap text-sm text-gray-700 shadow-lg rounded-lg">
                One Time Sweenging
              </div>
              <div className="bg-white px-5 py-2 cursor-pointer transition-all duration-500 hover:bg-green-500 hover:text-white text-nowrap text-sm text-gray-700 shadow-lg rounded-lg">
                Express In Two Days
              </div>
            </div>
          </div>

          <div
            className={`grid mt-6 grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6`}
          >
            {folders.map((folder) => (
              <>
                  <div className="bg-white shadow-lg p-4 text-center rounded-lg">
                    <div className="text-center justify-center items-center">
                        <img
                          src={folder.img}
                          className="w-32 h-32 rounded-full object-cover z-10 m-auto"
                          alt=""
                        />
                      <div className="my-3">
                        <p className="text-md my-1 uppercase text-gray-700">
                          {folder.name}
                        </p>
                        <p className="text-sm capitalize text-gray-700">
                          profile discription, eg i'm a good tailor i finished your work in 1 week
                        </p>
                        <p className="text-sm capitalize text-green-500">
                          <i className="fa fa-location-dot"></i> Tudun wadan fantmi new plaza shop 02, gombe, gombe state nigeria
                        </p>
                      </div>
                      <Link href="">
                        <button className="bg-green-500 text-white w-full px-5 py-2 cursor-pointer transition-all duration-500 hover:bg-green-600 hover:text-white text-nowrap text-sm shadow-lg rounded-lg">
                          Add/Follow Tailors
                        </button>
                      </Link>
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
export default FollowNewTailors;

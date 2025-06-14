import React, { useState } from "react";
import UserSideBar from "@/Components/MyComponents/UserSideBar";
import { Head, Link } from "@inertiajs/react";
import Footer from "@/Components/MyComponents/Footer";
import SweerthAlert from "@/Components/ModalsList/SweerthAlert";

const ManualDesigns = () => {
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
      <Head title="Manual Design"/>
      {/* start main body content */}
      <section>
        <div className="2xl:w-10/12 relative xl:w-10/12 md:w-full sm:w-100  px-7 ml-auto">
          <div>
            {/* start content header side bar component  */}
            <UserSideBar pageTitle="Manual Design" />
            {/* end content header side bar component  */}
          </div>

          {/* start dashboad  */}
          <div>
            <div className="flex mt-3 flex-wrap justify-between">
              <div>
                <h4 className="text-lg text-gray-600 font-semibold">
                  Manual Designs
                </h4>
                <p className="text-sm text-gray-600">
                  Through our you can explore and generate new modern teloring
                  design
                </p>
              </div>
              <div className="max-md:mt-4">
                <button
                  className={`py-3 px-5 text-sm bg-green-500 text-white rounded-lg font-semibold`}
                >
                  Create Folder
                </button>
              </div>
            </div>
          </div>

          <div
            className={`grid mt-6 grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6`}
          >
            {folders.map((folder) => (
              <>
                <Link href={``}> 
                  <div className="bg-white shadow-lg p-4 rounded-lg">
                    <div className="">
                      <div className="">
                        <p className="pb-3 font-semibold text-lg text-slate-600">
                          {folder.name}
                        </p>
                      </div>
                      <img
                        src={folder.img}
                        className="w-full h-48 rounded-lg object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </Link>
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
export default ManualDesigns;

import React, { useState } from "react";
import SideBar from "../../Component/SideBar";
import { Link } from "@inertiajs/react";
import Footer from "../../Component/Footer";
import SweerthAlert from "../../Component/ModalsList/SweerthAlert";

const AIDesigns = () => {
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
      img: "/src/assets/dinki_collection-20240204-0223-1.webp",
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
            <SideBar pageTitle="AI Generative Design" />
            {/* end content header side bar component  */}
          </div>

          {/* start dashboad  */}
          <div>
            <div className="flex mt-12 flex-wrap justify-between">
              <div>
                <h4 className="text-lg text-gray-600 font-semibold">
                  AI Generative Design
                </h4>
                <p className="text-sm text-gray-600">
                  Through our you can explore and generate new modern teloring
                  design
                </p>
              </div>
              <div className="max-md:mt-4">
                
                <SweerthAlert></SweerthAlert>
                
              </div>
            </div>
          </div>

          <div
            className={`grid mt-6 grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6`}
          >
            {folders.map((folder) => (
              <>
                <Link href={`/ai-designs/folder-image`}>
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
export default AIDesigns;

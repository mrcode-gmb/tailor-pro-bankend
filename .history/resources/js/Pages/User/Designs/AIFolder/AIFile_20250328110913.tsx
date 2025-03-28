import React, { useState } from "react";
import SideBar from "../../../Component/SideBar";
import { Link } from "@inertiajs/react";
import AIGeneartiveStyleFolder from "../../../Component/ModalsList/AIGeneartiveStyleFolder";
import Footer from "../../../Component/Footer";
import * as tf from '@tensorflow/tfjs';

const loadModel = async () => {
    const model = await tf.loadLayersModel('/src/assets/files/Body Measurements _ original_CSV.csv'); 
    // ... use the model for predictions
};

const AIFile = () => {
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
      name: "Hausa Men's Fashion Styles",
      img: "/src/assets/images.jpeg",
    },
  

    {
      name: "Suit",
      img: "/src/assets/suit01a.jpg",
    },
    {
      name: "Hausawa Male Design",
      img: "/src/assets/7e78dcc30120ca0b2d9a3c16893aab50.jpg",
    },
    {
        name: "Hausawa Female Design",
        img: "/src/assets/dinki_collection-20240204-0223-1.webp",
      },
  
      {
        name: "Jumpsuite Style",
        img: "/src/assets/jumpsuite01.jpg",
      },
  
      {
        name: "Hausa Men's Fashion Styles",
        img: "/src/assets/images.jpeg",
      },
    
  
      {
        name: "Suit",
        img: "/src/assets/suit01a.jpg",
      },
      {
        name: "Hausawa Male Design",
        img: "/src/assets/7e78dcc30120ca0b2d9a3c16893aab50.jpg",
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
                  Folder Name
                </h4>
                <p className="text-sm text-gray-600">AI Generative New Modern Style Gallery</p>
              </div>
              <div className="max-md:mt-4">
                <AIGeneartiveStyleFolder></AIGeneartiveStyleFolder>
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
                    <img
                      src={folder.img}
                      className="w-full h-48 rounded-lg object-cover"
                      alt=""
                    />
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
export default AIFile;

import React from "react";
import UserSideBar from "@/Components/MyComponents/UserSideBar";
import { Link } from "@inertiajs/react";
import img1 from "@/../../public/assets/home-decor-3.jpg";
import Footer from "@/Components/MyComponents/Footer";
import { Head } from "@inertiajs/react";
import NormalModal1 from "@/Components/ModalsList/NormalModal1";
import AIGeneartiveStyleFolder from "@/Components/ModalsList/AIGeneartiveStyleFolder";

const ManualMeasurement = () => {
    return (
        <>
            <Head title="Manual Mesurement" />
            {/* start main body content */}
            <section>
                <div className="2xl:w-10/12 relative xl:w-10/12 md:w-full sm:w-100  px-7 ml-auto">
                    <div>
                        {/* start content header side bar component  */}
                        <UserSideBar pageTitle="Add Measurement Records" />
                        {/* end content header side bar component  */}
                    </div>

                    {/* start dashboad  */}
                    <div
                        className={`w-full h-80 relative flex items-center overflow-hidden rounded-2xl bg-[url('@/../../public/assets/Pastedimage.png')] bg-cover bg-center p-0`}
                    >
                        <span className="absolute inset-y-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-700 to-gray-500 opacity-60"></span>

                        <div className="m-auto text-center">
                            <h4 className="text-white font-semibold text-4xl">
                                Hi, Mr Ahmad
                            </h4>
                            <p className="text-white">
                                Your Welcome to TailoringPro, if you want to add
                                mesurement manauly
                            </p>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="m-auto my-10 text-center">
                            <h4 className="text-slate-600 font-semibold text-2xl">
                                Add Mesurement
                            </h4>
                            <AIGeneartiveStyleFolder/>
                            <p className="text-slate-600">
                                Your Welcome to TailoringPro, if you want to add
                                Mesurement manauly
                            </p>
                        </div>
                        <div className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6">
                            <div>
                                <div className="bg-white shadow-lg p-4 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={img1}
                                            className="w-24 h-24 object-cover"
                                            alt=""
                                        />
                                        <div className="text-center">
                                            <p className="pb-3 text-slate-600">
                                                ArmHole (All Around)
                                            </p>
                                            <input
                                                type="number"
                                                className="w-full outline-none appearance-none border border-gray-400 text-center p-2 focus:border-green-700 rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="bg-white shadow-lg p-4 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={img1}
                                            className="w-24 h-24 object-cover"
                                            alt=""
                                        />
                                        <div className="text-center">
                                            <p className="pb-3 text-slate-600">
                                                ArmHole (All Around)
                                            </p>
                                            <input
                                                type="number"
                                                className="w-full outline-none appearance-none border border-gray-400 text-center p-2 focus:border-green-700 rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="bg-white shadow-lg p-4 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={img1}
                                            className="w-24 h-24 object-cover"
                                            alt=""
                                        />
                                        <div className="text-center">
                                            <p className="pb-3 text-slate-600">
                                                ArmHole (All Around)
                                            </p>
                                            <input
                                                type="number"
                                                className="w-full outline-none appearance-none border border-gray-400 text-center p-2 focus:border-green-700 rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="bg-white shadow-lg p-4 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={img1}
                                            className="w-24 h-24 object-cover"
                                            alt=""
                                        />
                                        <div className="text-center">
                                            <p className="pb-3 text-slate-600">
                                                ArmHole (All Around)
                                            </p>
                                            <input
                                                type="number"
                                                className="w-full outline-none appearance-none border border-gray-400 text-center p-2 focus:border-green-700 rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="bg-white shadow-lg p-4 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={img1}
                                            className="w-24 h-24 object-cover"
                                            alt=""
                                        />
                                        <div className="text-center">
                                            <p className="pb-3 text-slate-600">
                                                ArmHole (All Around)
                                            </p>
                                            <input
                                                type="number"
                                                className="w-full outline-none appearance-none border border-gray-400 text-center p-2 focus:border-green-700 rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="bg-white shadow-lg p-4 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={img1}
                                            className="w-24 h-24 object-cover"
                                            alt=""
                                        />
                                        <div className="text-center">
                                            <p className="pb-3 text-slate-600">
                                                ArmHole (All Around)
                                            </p>
                                            <input
                                                type="number"
                                                className="w-full outline-none appearance-none border border-gray-400 text-center p-2 focus:border-green-700 rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="bg-white shadow-lg p-4 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={img1}
                                            className="w-24 h-24 object-cover"
                                            alt=""
                                        />
                                        <div className="text-center">
                                            <p className="pb-3 text-slate-600">
                                                ArmHole (All Around)
                                            </p>
                                            <input
                                                type="number"
                                                className="w-full outline-none appearance-none border border-gray-400 text-center p-2 focus:border-green-700 rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="bg-white shadow-lg p-4 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={img1}
                                            className="w-24 h-24 object-cover"
                                            alt=""
                                        />
                                        <div className="text-center">
                                            <p className="pb-3 text-slate-600">
                                                ArmHole (All Around)
                                            </p>
                                            <input
                                                type="number"
                                                className="w-full outline-none appearance-none border border-gray-400 text-center p-2 focus:border-green-700 rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <button className="py-4 px-6 bg-green-500 text-white rounded-lg font-semibold">
                                Save & Continue
                            </button>
                        </div>
                    </div>

                    <div className=" relative">
                        <Footer />
                    </div>
                </div>
            </section>
        </>
    );
};
export default ManualMeasurement;

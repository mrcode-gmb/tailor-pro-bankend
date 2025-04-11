import React from "react";
import UserSideBar from "@/Components/MyComponents/UserSideBar";
import { Link } from "@inertiajs/react";
import Footer from "@/Components/MyComponents/Footer";
import { Head } from "@inertiajs/react";
import AddMeasurementComponent from "@/Components/ModalsList/AddMeasurementComponent";

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
                        <AddMeasurementComponent />
                        <div className="m-auto my-10 text-center">
                            <h4 className="text-slate-600 font-semibold text-2xl">
                                Add Mesurement
                            </h4>
                            <p className="text-slate-600">
                                Your Welcome to TailoringPro, if you want to add
                                Mesurement manauly
                            </p>
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

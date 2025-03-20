import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import UserSideBar from "@/Components/MyComponents/UserSideBar";

function Dashboards({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default function Dashboard({ auth }: PageProps) {
    return (
        <>
            <Head title="Dashboard" />

            <div>
                <UserSideBar pageTitle="Dashboard" />

                <section>
                    <div className="2xl:w-10/12 xl:w-10/12 md:w-full sm:w-100  px-7 ml-auto">
                        {/* start content header side bar component  */}
                        <SideBar pageTitle="Dashboard" />
                        {/* end content header side bar component  */}

                        {/* start dashboad  */}
                        <div className="mt-6 relative">
                            <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
                                <div className="flex justify-between items-center bg-white drop-shadow-lg rounded-xl p-5">
                                    <div className="">
                                        <p className="text-md">Today's Sales</p>
                                        <h4 className="font-bold text-lg">
                                            <i className="fa fa-naira-sign"></i>{" "}
                                            53,000
                                        </h4>
                                    </div>
                                    <div className="w-11 h-11 flex bg-green-500 rounded-lg text-white">
                                        <i className="fa fa-brands m-auto fa-paypal"></i>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center bg-white drop-shadow-lg rounded-xl p-5">
                                    <div className="">
                                        <p className="text-md">
                                            Today's Payment
                                        </p>
                                        <h4 className="font-bold text-lg">
                                            <i className="fa fa-naira-sign"></i>{" "}
                                            103,430
                                        </h4>
                                    </div>
                                    <div className="w-11 h-11 flex bg-green-500 rounded-lg text-white">
                                        <i className="fa fa-users m-auto"></i>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center bg-white drop-shadow-lg rounded-xl p-5">
                                    <div className="">
                                        <p className="text-md">
                                            Today's Orders
                                        </p>
                                        <h4 className="font-bold text-lg">
                                            +3,462
                                        </h4>
                                    </div>
                                    <div className="w-11 h-11 flex bg-green-500 rounded-lg text-white">
                                        <i className="fa fa-cart-shopping m-auto"></i>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center bg-white drop-shadow-lg rounded-xl p-5">
                                    <div className="">
                                        <p className="text-md">
                                            Today's Deliveries
                                        </p>
                                        <h4 className="font-bold text-lg">
                                            2,300
                                        </h4>
                                    </div>
                                    <div className="w-11 h-11 flex bg-green-500 rounded-lg text-white">
                                        <i className="fa fa-cart-shopping m-auto"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6">
                                    <div
                                        className={`w-full h-full max-lg:h-80 relative flex items-center overflow-hidden rounded-2xl bg-[url('/../src/assets/Pastedimage.png')] bg-cover bg-center p-0`}
                                    >
                                        <span className="absolute inset-y-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-700 to-gray-500 opacity-60"></span>

                                        <div className="m-auto text-center">
                                            <h4 className="text-white font-semibold text-4xl">
                                                Hi. Mr Ahmad
                                            </h4>
                                            <p className="text-white">
                                                Your Welcome to TailoringPro
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6">
                                            <div className="bg-green-500 rounded-xl p-5">
                                                <div className="w-11 h-11 flex bg-white rounded-lg text-gray-600">
                                                    <i className="fa m-auto fa-clock"></i>
                                                </div>
                                                <div className="mt-6 text-white flex justify-between ">
                                                    <div className="">
                                                        <h4 className="font-bold text-xl">
                                                            0
                                                        </h4>
                                                        <p>Orders Past Due</p>
                                                    </div>
                                                    <div className="">
                                                        <p>+0%</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-900 rounded-xl p-5">
                                                <div className="w-11 h-11 flex bg-white rounded-lg text-gray-600">
                                                    <i className="fa m-auto fa-hand-point-left"></i>
                                                </div>
                                                <div className="mt-6 text-white flex justify-between ">
                                                    <div className="">
                                                        <h4 className="font-bold text-xl">
                                                            357
                                                        </h4>
                                                        <p>Orders Due</p>
                                                    </div>
                                                    <div className="">
                                                        <p>+14%</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-900 rounded-xl p-5">
                                                <div className="w-11 h-11 flex bg-white rounded-lg text-gray-600">
                                                    <i className="fa fa-cart-shopping m-auto"></i>
                                                </div>
                                                <div className="mt-6 text-white flex justify-between ">
                                                    <div className="">
                                                        <h4 className="font-bold text-xl">
                                                            2300
                                                        </h4>
                                                        <p>Purchases</p>
                                                    </div>
                                                    <div className="">
                                                        <p>+15%</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gray-900 rounded-xl p-5">
                                                <div className="w-11 h-11 flex bg-white rounded-lg text-gray-600">
                                                    <i className="fa m-auto fa-thumbs-up"></i>
                                                </div>
                                                <div className="mt-6 text-white flex justify-between ">
                                                    <div className="">
                                                        <h4 className="font-bold text-xl">
                                                            940
                                                        </h4>
                                                        <p>Likes</p>
                                                    </div>
                                                    <div className="">
                                                        <p>+90%</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6 overflow-auto">
                                <div>
                                    <LineChart />
                                </div>
                                <div>
                                    <BarChart />
                                </div>
                            </div>

                            <Footer />
                        </div>
                        {/* end dashboad  */}
                    </div>
                </section>
            </div>
        </>
    );
}

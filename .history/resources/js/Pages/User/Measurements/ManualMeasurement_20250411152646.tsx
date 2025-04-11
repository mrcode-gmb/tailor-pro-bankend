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
                        <div className="m-auto my-10 text-center">
                            <AddMeasurementComponent />
                            <h4 className="text-slate-600 font-semibold text-2xl">
                                Add Mesurement
                            </h4>
                            <p className="text-slate-600">
                                Your Welcome to TailoringPro, if you want to add
                                Mesurement manauly
                            </p>
                        </div>
                        <TabsContent value="measurements" className="mt-0">
                            <AnimatedTransition show={activeTab === 'measurements'} variant="fade">
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-medium">Measurement History</h3>
                                        <Button onClick={handleCreateMeasurement} size="sm">
                                            <PlusCircle className="h-4 w-4 mr-1" /> New Measurement
                                        </Button>
                                    </div>

                                    {client.measurements.length > 0 ? (
                                        <div className="space-y-6">
                                            {client.measurements.map((measurement, index) => (
                                                <AnimatedTransition
                                                    key={measurement.id}
                                                    show={true}
                                                    variant="slide-up"
                                                    delay={index * 100}
                                                >
                                                    <MeasurementCard
                                                        measurementId={measurement.id}
                                                        clientName={client.name}
                                                        clientId={client.id}
                                                        date={measurement.date}
                                                        measurements={measurement.data}
                                                        onEdit={() => handleEditMeasurement(measurement.id)}
                                                        onPrint={() => handlePrintMeasurement(measurement.id)}
                                                    />
                                                </AnimatedTransition>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="text-center py-12">
                                            <Ruler className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                                            <h3 className="text-lg font-medium">No measurements yet</h3>
                                            <p className="text-muted-foreground mt-1 mb-6">
                                                Start by adding measurements for this client
                                            </p>
                                            <Button onClick={handleCreateMeasurement}>
                                                <PlusCircle className="h-4 w-4 mr-1" /> Add Measurement
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </AnimatedTransition>
                        </TabsContent>
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

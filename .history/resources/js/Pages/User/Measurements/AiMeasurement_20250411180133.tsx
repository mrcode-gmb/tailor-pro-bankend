import React, { useState } from "react";
import UserSideBar from "@/Components/MyComponents/UserSideBar";
import { Link } from "@inertiajs/react";
import Footer from "@/Components/MyComponents/Footer";
import { Head } from "@inertiajs/react";
import AddMeasurementComponent from "@/Components/ModalsList/AddMeasurementComponent";
import MeasurementCard from "@/Components/components/MeasurementCard";
import AnimatedTransition from "@/Components/components/AnimatedTransition";
import { Button } from "@/Components/components/ui/button";
import { ArrowLeftCircle, Clock, PlusCircle, Ruler, Edit, Printer } from "lucide-react";
import { TabsContent } from "@/Components/components/ui/tabs";
import MeasurementList from "@/Components/MeasurementList";

// Sample client data


const AiMeasurement = () => {
    const [activeTab, setActiveTab] = useState('info');
    const [currentView, setCurrentView] = useState<'profile' | 'newMeasurement'>('profile');
    const [selectedMeasurement, setSelectedMeasurement] = useState<string | null>(null);

    // This would fetch client data based on ID in a real application

    const handleCreateMeasurement = () => {
        setCurrentView('newMeasurement');
    };

    const handleSaveMeasurement = (measurementData: any) => {
        // In a real app, this would save to the database
        console.log('Saving measurement data:', measurementData);
        setCurrentView('profile');
        setActiveTab('measurements');
    };

    const handleEditMeasurement = (measurementId: string) => {
        console.log('Edit measurement:', measurementId);
        // This would open the measurement form pre-filled with the selected measurement
    };

    const handlePrintMeasurement = (measurementId: string) => {
        console.log('Print measurement:', measurementId);
        // This would generate a printable version of the measurement card
    };
    const goBack = () => {
        window.history.back(); // Native browser back
    };
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


                    <div className="w-full">
                        <div onClick={goBack} className="m-auto my-6 flex items-center gap-3 cu">
                            <ArrowLeftCircle className="text-gray-600" size={22} />
                            <h4 className="text-slate-600  text-2xl">
                                Add Mesurement
                            </h4>
                        </div>

                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <div className="flex items-center gap-4 flex-wrap justify-between">
                                <h3 className="text-xl ">AI Measurement History</h3>
                                <AddMeasurementComponent />
                            </div>
                            <MeasurementList />
                            <MeasurementList />
                            <MeasurementList />
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
export default AiMeasurement;

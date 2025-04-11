import React, { useState } from "react";
import UserSideBar from "@/Components/MyComponents/UserSideBar";
import { Link } from "@inertiajs/react";
import Footer from "@/Components/MyComponents/Footer";
import { Head } from "@inertiajs/react";
import AddMeasurementComponent from "@/Components/ModalsList/AddMeasurementComponent";
import MeasurementCard from "@/Components/components/MeasurementCard";
import AnimatedTransition from "@/Components/components/AnimatedTransition";
import { Button } from "@/Components/components/ui/button";
import { PlusCircle } from "lucide-react";
import { TabsContent } from "@/Components/components/ui/tabs";

// Sample client data
const CLIENT = {
    id: '1',
    name: 'Adewale Johnson',
    email: 'adewale@example.com',
    phone: '+234 801 234 5678',
    address: '15 Adeniran Ogunsanya St, Surulere, Lagos',
    dateAdded: '2023-10-15',
    lastVisit: '2024-01-05',
    measurements: [
        {
            id: 'meas-1',
            date: '2024-01-05',
            data: {
                neck: '38',
                shoulder: '45',
                chest: '102',
                waist: '85',
                sleevelength: '64',
                armlength: '50',
                armwidth: '32',
                hip: '98',
                inseam: '76',
                outseam: '98',
                thigh: '58',
                knee: '40',
                calf: '36',
                ankles: '26',
                height: '175',
                shirtLength: '74',
                trouserLength: '102',
            }
        },
        {
            id: 'meas-2',
            date: '2023-06-20',
            data: {
                neck: '39',
                shoulder: '45',
                chest: '104',
                waist: '88',
                sleevelength: '64',
                armlength: '50',
                armwidth: '33',
                hip: '100',
                inseam: '76',
                outseam: '98',
                thigh: '60',
                knee: '41',
                height: '175',
            }
        }
    ],
    orders: [
        {
            id: 'ord-1',
            date: '2024-01-05',
            items: ['Wedding Suit - Navy Blue', 'White Shirt'],
            status: 'Completed',
            amount: '125,000 NGN'
        },
        {
            id: 'ord-2',
            date: '2023-06-20',
            items: ['Business Suit - Black', '2 White Shirts', 'Gray Trousers'],
            status: 'Completed',
            amount: '150,000 NGN'
        }
    ]
};


const ManualMeasurement = () => {
    const [activeTab, setActiveTab] = useState('info');
    const [currentView, setCurrentView] = useState<'profile' | 'newMeasurement'>('profile');
    const [selectedMeasurement, setSelectedMeasurement] = useState<string | null>(null);

    // This would fetch client data based on ID in a real application
    const client = CLIENT;

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

import { ArrowLeftCircle, Clock, PlusCircle, Ruler,Edit, Printer } from "lucide-react";
export default function MeasurementList() {
    return (
        <div className="border my-4 border-border/50 p-6 rounded-xl shadow-sm max-w-4xl mx-auto">
            <div className="pb-2 flex flex-row flex-wrap items-center justify-between space-y-0 gap-4">
                <div>
                    <div className="text-sm text-muted-foreground text-nowrap flex items-center mb-1">
                        <Clock className="fa fa-cloc text-nowrapk  &nbsp;h-3  w-3 mr-2" />
                        <p>5 January 2024 at 01:00</p>
                    </div>
                    <div className="text-md">Measurement Record</div>
                </div>
                <div className="flex items-center gap-2">
                    <Button>
                        <Edit className="fa fa-edit h-4 w-4 mr-1" /> Edit
                    </Button>
                    <Button>
                        <Printer className="fa fa-print h-4 w-4 mr-1" /> Print
                    </Button>
                </div>
            </div>

            <div className="pb-3">
                <div className="flex items-center gap-2 mb-4 mt-1 p-3 bg-gray-50 rounded-md">
                    <div
                        className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center"
                    >
                        <i className="fa fa-user h-4 w-4" />
                    </div>
                    <div>
                        <div className="text-gray-800">{"Fatima Muhammad"}</div>
                        <div className="text-xs text-muted-foreground">Client ID: {"3768LG"}</div>
                    </div>
                </div>

                <div className="space-y-6">

                    <div key={"Full Jampah"}>
                        <h3 className="text-sm mb-2 text-gray-900">{"Full Jampah"}</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                            <div className="flex justify-between items-center py-1">
                                <span className="text-sm text-muted-foreground text-nowrap text-gray-500">{"Sholder Width"}:</span>
                                <span className="font-medium text-sm text-nowrap"> &nbsp;{"29 "} in</span>
                            </div>
                            <div className="flex justify-between items-center py-1">
                                <span className="text-sm text-muted-foreground text-nowrap text-gray-500">{"Shirt Length"}:</span>
                                <span className="font-medium text-sm text-nowrap"> &nbsp;{"29 "} in</span>
                            </div>
                            <div className="flex justify-between items-center py-1">
                                <span className="text-sm text-muted-foreground text-nowrap text-gray-500">{"Zawon Wando"}:</span>
                                <span className="font-medium text-sm text-nowrap"> &nbsp;{"29 "} in</span>
                            </div>
                            <div className="flex justify-between items-center py-1">
                                <span className="text-sm text-muted-foreground text-nowrap text-gray-500">{"Wuyan Riga"}:</span>
                                <span className="font-medium text-sm text-nowrap"> &nbsp;{"29 "} in</span>
                            </div>
                            <div className="flex justify-between items-center py-1">
                                <span className="text-sm text-muted-foreground text-nowrap text-gray-500">{"Zawon Hannu"}:</span>
                                <span className="font-medium text-sm text-nowrap"> &nbsp;{"29 "} in</span>
                            </div>


                        </div>

                        <div></div>
                    </div>
                </div>
            </div>

            <footer className="pt-1 text-sm text-muted-foreground text-nowrap">
                <p className="text-gray-500">Measurement ID text-nowrap:  &nbsp;{"id -23-10"}</p>
            </footer>
        </div>

    );
}
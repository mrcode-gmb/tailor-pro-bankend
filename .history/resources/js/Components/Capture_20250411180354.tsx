import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/components/ui/card';
import { Button } from '@/Components/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/Components/components/ui/tabs';
import { 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Ruler, 
  EditIcon, 
  PlusCircle,
  ArrowLeft,
  Scissors
} from 'lucide-react';
import { Separator } from '@/Components/components/ui/separator';
import AnimatedTransition from './components/AnimatedTransition';
import MeasurementCard from './MeasurementCard';
import MeasurementForm from './MeasurementForm';

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

interface ClientProfileProps {
  clientId: string;
  onBack: () => void;
}

const ClientProfile: React.FC<ClientProfileProps> = ({
  clientId,
  onBack
}) => {
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

  if (currentView === 'newMeasurement') {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setCurrentView('profile')}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h2 className="text-2xl font-display font-medium">New Measurement</h2>
        </div>
        
        <MeasurementForm 
          clientId={client.id}
          clientName={client.name}
          onSave={handleSaveMeasurement}
          onCancel={() => setCurrentView('profile')}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-2xl font-display font-medium">Client Profile</h2>
      </div>
      
      <Card className="border border-border/50 shadow-sm">
        <CardHeader className="pb-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-8 h-8 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl">{client.name}</CardTitle>
                <div className="text-sm text-muted-foreground">Client since {new Date(client.dateAdded).toLocaleDateString('en-NG', { year: 'numeric', month: 'long' })}</div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline">
                <EditIcon className="h-4 w-4 mr-1" /> Edit Profile
              </Button>
              <Button onClick={handleCreateMeasurement}>
                <Ruler className="h-4 w-4 mr-1" /> New Measurement
              </Button>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full">
              <TabsTrigger value="info" className="flex-1">Client Info</TabsTrigger>
              <TabsTrigger value="measurements" className="flex-1">Measurements</TabsTrigger>
              <TabsTrigger value="orders" className="flex-1">Orders</TabsTrigger>
            </TabsList>
            
            <div className="mt-6">
              <TabsContent value="info" className="mt-0">
                <AnimatedTransition show={activeTab === 'info'} variant="fade">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-medium">Contact Information</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Phone className="w-4 h-4 mt-0.5 text-muted-foreground" />
                          <div>
                            <div className="font-medium">{client.phone}</div>
                            <div className="text-sm text-muted-foreground">Primary Phone</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Mail className="w-4 h-4 mt-0.5 text-muted-foreground" />
                          <div>
                            <div className="font-medium">{client.email}</div>
                            <div className="text-sm text-muted-foreground">Email Address</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <MapPin className="w-4 h-4 mt-0.5 text-muted-foreground" />
                          <div>
                            <div className="font-medium">{client.address}</div>
                            <div className="text-sm text-muted-foreground">Physical Address</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-medium">Client History</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Calendar className="w-4 h-4 mt-0.5 text-muted-foreground" />
                          <div>
                            <div className="font-medium">
                              {new Date(client.dateAdded).toLocaleDateString('en-NG', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </div>
                            <div className="text-sm text-muted-foreground">Date Added</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Calendar className="w-4 h-4 mt-0.5 text-muted-foreground" />
                          <div>
                            <div className="font-medium">
                              {new Date(client.lastVisit).toLocaleDateString('en-NG', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </div>
                            <div className="text-sm text-muted-foreground">Last Visit</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Scissors className="w-4 h-4 mt-0.5 text-muted-foreground" />
                          <div>
                            <div className="font-medium">{client.orders.length} orders</div>
                            <div className="text-sm text-muted-foreground">Total orders placed</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Ruler className="w-4 h-4 mt-0.5 text-muted-foreground" />
                          <div>
                            <div className="font-medium">{client.measurements.length} records</div>
                            <div className="text-sm text-muted-foreground">Measurement records</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedTransition>
              </TabsContent>
              
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
              
              <TabsContent value="orders" className="mt-0">
                <AnimatedTransition show={activeTab === 'orders'} variant="fade">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Order History</h3>
                      <Button size="sm">
                        <PlusCircle className="h-4 w-4 mr-1" /> New Order
                      </Button>
                    </div>
                    
                    {client.orders.length > 0 ? (
                      <div className="space-y-4">
                        {client.orders.map((order, index) => (
                          <AnimatedTransition 
                            key={order.id} 
                            show={true} 
                            variant="slide-up" 
                            delay={index * 100}
                          >
                            <Card key={order.id} className="border border-border/50">
                              <CardContent className="p-4">
                                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                                  <div>
                                    <div className="text-sm text-muted-foreground mb-1">
                                      {new Date(order.date).toLocaleDateString('en-NG', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                      })}
                                    </div>
                                    <div className="font-medium">Order #{order.id}</div>
                                    <div className="mt-2">
                                      {order.items.map((item, i) => (
                                        <div key={i} className="text-sm">
                                          • {item}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  
                                  <div className="flex flex-col items-end">
                                    <div className={cn(
                                      "text-sm px-2 py-1 rounded-full",
                                      order.status === 'Completed' ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                                    )}>
                                      {order.status}
                                    </div>
                                    <div className="text-lg font-medium mt-2">
                                      {order.amount}
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </AnimatedTransition>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <Scissors className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <h3 className="text-lg font-medium">No orders yet</h3>
                        <p className="text-muted-foreground mt-1 mb-6">
                          This client has not placed any orders
                        </p>
                        <Button>
                          <PlusCircle className="h-4 w-4 mr-1" /> Create Order
                        </Button>
                      </div>
                    )}
                  </div>
                </AnimatedTransition>
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientProfile;

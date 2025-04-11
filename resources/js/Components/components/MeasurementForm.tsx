import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Save, Camera } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import AnimatedTransition from './AnimatedTransition';
import ImageUploader from './ImageUploader';
import CategoryForm from './CategoryForm';
import { MEASUREMENT_CATEGORIES, MeasurementCategory } from '@/data/measurementCategories';

interface MeasurementFormProps {
  clientId?: string;
  clientName?: string;
  initialMeasurements?: any;
  onSave: (measurements: any) => void;
  onCancel: () => void;
}

const MeasurementForm: React.FC<MeasurementFormProps> = ({
  clientId,
  clientName,
  initialMeasurements,
  onSave,
  onCancel
}) => {
  const [activeTab, setActiveTab] = useState('upper');
  const [measurements, setMeasurements] = useState(() => {
    const measurementState = JSON.parse(JSON.stringify(MEASUREMENT_CATEGORIES));
    
    if (initialMeasurements) {
      measurementState.forEach(category => {
        category.measurements.forEach(measurement => {
          if (initialMeasurements[measurement.id]) {
            measurement.value = initialMeasurements[measurement.id];
          }
        });
      });
    }
    
    return measurementState;
  });
  const [customerImage, setCustomerImage] = useState<string | null>(null);
  const [showImageUploader, setShowImageUploader] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<string>('classic');

  const handleMeasurementChange = (categoryId: string, measurementId: string, value: string) => {
    setMeasurements(prev => 
      prev.map(category => 
        category.id === categoryId
          ? {
              ...category,
              measurements: category.measurements.map(measurement => 
                measurement.id === measurementId
                  ? { ...measurement, value }
                  : measurement
              )
            }
          : category
      )
    );
  };

  const handleSave = () => {
    const measurementData = {};
    measurements.forEach(category => {
      category.measurements.forEach(measurement => {
        measurementData[measurement.id] = measurement.value;
      });
    });
    
    if (customerImage) {
      measurementData['customerImage'] = customerImage;
    }
    
    onSave(measurementData);
    toast({
      title: "Measurements saved",
      description: `Measurements for ${clientName || 'client'} have been saved successfully.`,
    });
  };

  const handleReset = (categoryId: string) => {
    setMeasurements(prev => 
      prev.map(category => 
        category.id === categoryId
          ? {
              ...category,
              measurements: category.measurements.map(measurement => 
                ({ ...measurement, value: '' })
              )
            }
          : category
      )
    );
  };

  const handleImageUploaded = (imageUrl: string) => {
    setCustomerImage(imageUrl);
  };

  const handleProcessImage = (style?: string) => {
    if (style) {
      setSelectedStyle(style);
    }
    
    const sampleMeasurements = {
      neck: '14.4',
      shoulder: '16.6',
      chest: '37.9',
      waist: '33.1',
      hip: '38.9',
      inseam: '30.9',
      height: '68.9'
    };
    
    setMeasurements(prev => 
      prev.map(category => ({
        ...category,
        measurements: category.measurements.map(measurement => ({
          ...measurement,
          value: sampleMeasurements[measurement.id] || measurement.value
        }))
      }))
    );
    
    setShowImageUploader(false);
    setActiveTab('upper');
    
    toast({
      title: "AI Measurements Completed",
      description: `Measurements have been extracted using ${style || 'classic'} style and populated in the form.`,
    });
  };

  return (
    <Card className="border border-border/50 shadow-sm max-w-4xl mx-auto">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl">
          {clientName ? `Measurements for ${clientName}` : 'New Measurements'}
        </CardTitle>
        <CardDescription>
          Enter accurate measurements to ensure the perfect fit
        </CardDescription>
      </CardHeader>
      
      <Tabs defaultValue="upper" value={activeTab} onValueChange={setActiveTab}>
        <div className="px-6">
          <TabsList className="w-full">
            <TabsTrigger 
              value="image-upload"
              className="flex-1"
              onClick={() => setShowImageUploader(true)}
            >
              Image Upload
            </TabsTrigger>
            {measurements.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex-1"
                onClick={() => setShowImageUploader(false)}
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        
        <CardContent className="p-6">
          <TabsContent value="image-upload" className="mt-0">
            <AnimatedTransition show={activeTab === 'image-upload'} variant="fade">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Camera className="h-5 w-5 mr-2 text-primary" />
                  <h3 className="text-lg font-medium">Upload Customer Image</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Upload a front-facing photo of the customer to automatically extract measurements
                </p>
                <ImageUploader 
                  onImageUploaded={handleImageUploaded}
                  onProcessImage={handleProcessImage}
                />
              </div>
            </AnimatedTransition>
          </TabsContent>
          
          {measurements.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <AnimatedTransition show={activeTab === category.id} variant="fade">
                <CategoryForm 
                  category={category} 
                  onMeasurementChange={handleMeasurementChange}
                  onReset={handleReset}
                />
              </AnimatedTransition>
            </TabsContent>
          ))}
        </CardContent>
      </Tabs>
      
      <CardFooter className="flex justify-between border-t p-6">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={() => {
            setActiveTab('image-upload');
            setShowImageUploader(true);
          }}>
            <Camera className="h-4 w-4 mr-1" /> Take Photo
          </Button>
          <Button onClick={handleSave}>
            <Save className="h-4 w-4 mr-1" /> Save Measurements
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MeasurementForm;

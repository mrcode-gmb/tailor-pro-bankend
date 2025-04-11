
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Edit, Printer, Clock, User } from 'lucide-react';

interface MeasurementCardProps {
  measurementId: string;
  clientName: string;
  clientId: string;
  date: string;
  measurements: Record<string, string>;
  onEdit: () => void;
  onPrint: () => void;
}

const MeasurementCard: React.FC<MeasurementCardProps> = ({
  measurementId,
  clientName,
  clientId,
  date,
  measurements,
  onEdit,
  onPrint,
}) => {
  // Define the categories and their related measurement IDs
  const categories = [
    {
      name: 'Upper Body',
      items: ['neck', 'shoulder', 'chest', 'waist', 'sleevelength', 'armlength', 'armwidth'],
    },
    {
      name: 'Lower Body',
      items: ['hip', 'inseam', 'outseam', 'thigh', 'knee', 'calf', 'ankles'],
    },
    {
      name: 'Other',
      items: ['height', 'trouserLength', 'shirtLength', 'wrist', 'neckToWaist', 'waistToKnee', 'waistToAnkle'],
    },
  ];

  // Labels for each measurement ID
  const measurementLabels: Record<string, string> = {
    neck: 'Neck',
    shoulder: 'Shoulder',
    chest: 'Chest',
    waist: 'Waist',
    sleevelength: 'Sleeve Length',
    armlength: 'Arm Length',
    armwidth: 'Arm Width',
    hip: 'Hip',
    inseam: 'Inseam',
    outseam: 'Outseam',
    thigh: 'Thigh',
    knee: 'Knee',
    calf: 'Calf',
    ankles: 'Ankles',
    height: 'Height',
    trouserLength: 'Trouser Length',
    shirtLength: 'Shirt Length',
    wrist: 'Wrist',
    neckToWaist: 'Neck to Waist',
    waistToKnee: 'Waist to Knee',
    waistToAnkle: 'Waist to Ankle',
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Date(dateString).toLocaleDateString('en-NG', options);
  };

  return (
    <Card className="border border-border/50 shadow-sm max-w-4xl mx-auto">
      <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0 gap-4">
        <div>
          <div className="text-sm text-muted-foreground flex items-center mb-1">
            <Clock className="h-3 w-3 mr-1" />
            {formatDate(date)}
          </div>
          <CardTitle className="text-xl">Measurement Card</CardTitle>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={onEdit}>
            <Edit className="h-4 w-4 mr-1" /> Edit
          </Button>
          <Button variant="outline" size="sm" onClick={onPrint}>
            <Printer className="h-4 w-4 mr-1" /> Print
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pb-3">
        <div className="flex items-center gap-2 mb-4 p-3 bg-muted/50 rounded-md">
          <div 
            className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center"
          >
            <User className="h-4 w-4" />
          </div>
          <div>
            <div className="font-medium">{clientName}</div>
            <div className="text-xs text-muted-foreground">Client ID: {clientId}</div>
          </div>
        </div>

        <div className="space-y-6">
          {categories.map((category, categoryIndex) => (
            <div key={category.name}>
              <h3 className="font-medium text-sm mb-2">{category.name}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                {category.items.map((item) => {
                  const value = measurements[item];
                  if (!value) return null;
                  
                  return (
                    <div key={item} className="flex justify-between items-center py-1">
                      <span className="text-sm text-muted-foreground">{measurementLabels[item]}:</span>
                      <span className="font-medium text-sm">{value} in</span>
                    </div>
                  );
                })}
              </div>
              
              {categoryIndex < categories.length - 1 && (
                <Separator className="my-4" />
              )}
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-1 text-xs text-muted-foreground">
        <div>Measurement ID: {measurementId}</div>
      </CardFooter>
    </Card>
  );
};

export default MeasurementCard;


import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Ruler, RotateCcw, HelpCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { MeasurementCategory } from '@/data/measurementCategories';
import { toast } from '@/components/ui/use-toast';

interface CategoryFormProps {
  category: MeasurementCategory;
  onMeasurementChange: (categoryId: string, measurementId: string, value: string) => void;
  onReset: (categoryId: string) => void;
}

const CategoryForm: React.FC<CategoryFormProps> = ({ 
  category, 
  onMeasurementChange,
  onReset 
}) => {
  const handleReset = () => {
    if (confirm("Are you sure you want to reset these measurements?")) {
      onReset(category.id);
      
      toast({
        title: "Measurements reset",
        description: `Measurements for ${category.id} category have been reset.`,
      });
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Ruler className="h-5 w-5 mr-2 text-primary" />
          <h3 className="text-lg font-medium">{category.label} Measurements</h3>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleReset}
          className="text-xs"
        >
          <RotateCcw className="h-3 w-3 mr-1" /> Reset
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {category.measurements.map((measurement) => (
          <div key={measurement.id} className="space-y-1.5">
            <div className="flex items-center">
              <label 
                htmlFor={measurement.id} 
                className="text-sm font-medium flex items-center"
              >
                {measurement.label}
                {measurement.help && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="cursor-help">
                          <HelpCircle className="h-3 w-3 ml-1 text-muted-foreground" />
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">{measurement.help}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </label>
            </div>
            <div className="flex">
              <Input
                id={measurement.id}
                type="number"
                step="0.1"
                placeholder="0.0"
                value={measurement.value}
                onChange={(e) => onMeasurementChange(category.id, measurement.id, e.target.value)}
                className="flex-grow"
              />
              <div className="flex items-center justify-center p-2 bg-muted border border-l-0 border-input rounded-r-md w-12">
                <span className="text-sm text-muted-foreground">{measurement.unit}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryForm;

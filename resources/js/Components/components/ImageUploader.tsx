
import React, { useState } from 'react';
import { Upload, ImagePlus, X, Ruler, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

import { toast } from '@/components/ui/use-toast';
import AnimatedTransition from './AnimatedTransition';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ImageUploaderProps {
  onImageUploaded: (imageUrl: string) => void;
  onProcessImage: (style?: string) => void;
}

type StyleOption = {
  id: string;
  name: string;
  description: string;
};

const STYLE_OPTIONS: StyleOption[] = [
  { id: 'classic', name: 'Classic', description: 'Traditional tailored fit' },
  { id: 'modern', name: 'Modern', description: 'Contemporary slim fit' },
  { id: 'relaxed', name: 'Relaxed', description: 'Comfortable loose fit' },
  { id: 'athletic', name: 'Athletic', description: 'Active performance fit' },
];

const ImageUploader: React.FC<ImageUploaderProps> = ({ 
  onImageUploaded, 
  onProcessImage 
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<string>('classic');
  
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const processFile = (file: File) => {
    // Check if file is an image
    if (!file.type.match('image.*')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPEG, PNG, etc.)",
        variant: "destructive"
      });
      return;
    }

    // Check file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 10MB",
        variant: "destructive"
      });
      return;
    }

    // Create preview URL
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    onImageUploaded(url);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const handleProcessImage = async () => {
    if (!previewUrl) return;
    
    setIsProcessing(true);
    try {
      // This is where the AI processing would happen
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating processing
      onProcessImage(selectedStyle);
      toast({
        title: "Image processed successfully",
        description: `Measurements have been extracted using ${STYLE_OPTIONS.find(s => s.id === selectedStyle)?.name || selectedStyle} style`,
      });
    } catch (error) {
      console.error("Error processing image:", error);
      toast({
        title: "Error processing image",
        description: "An error occurred while analyzing your image. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRemove = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
  };

  return (
    <div className="space-y-4">
      {!previewUrl ? (
        <div
          className={(
            "border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center",
            dragActive ? "border-primary bg-primary/5" : "border-border/50"
          )}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Upload className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-lg font-medium mb-1">Upload customer image</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Drag and drop an image, or click to browse
          </p>
          <Input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
          <Button
            variant="outline"
            onClick={() => document.getElementById('file-upload')?.click()}
          >
            <ImagePlus className="h-4 w-4 mr-2" /> Select Image
          </Button>
        </div>
      ) : (
        <Card className="overflow-hidden">
          <CardContent className="p-0 relative">
            <img 
              src={previewUrl} 
              alt="Customer preview" 
              className="w-full h-auto max-h-[400px] object-contain bg-black/5"
            />
            <div className="absolute top-2 right-2 flex gap-2">
              <Button 
                variant="destructive" 
                size="icon" 
                className="h-8 w-8 rounded-full" 
                onClick={handleRemove}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {previewUrl && (
        <AnimatedTransition show={!!previewUrl} variant="slide-up">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Palette className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Select Style Preference</span>
            </div>
            
            <Select
              value={selectedStyle}
              onValueChange={setSelectedStyle}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select style" />
              </SelectTrigger>
              <SelectContent>
                {STYLE_OPTIONS.map((style) => (
                  <SelectItem key={style.id} value={style.id}>
                    <div>
                      <p>{style.name}</p>
                      <p className="text-xs text-muted-foreground">{style.description}</p>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Button 
              className="w-full" 
              onClick={handleProcessImage}
              disabled={isProcessing}
            >
              <Ruler className="h-4 w-4 mr-2" />
              {isProcessing ? 'Processing...' : 'Analyze Image & Extract Measurements'}
            </Button>
          </div>
        </AnimatedTransition>
      )}
    </div>
  );
};

export default ImageUploader;

import React, { useRef, useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, RefreshCw, Check, ArrowLeft, Palette } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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

const CapturePhoto = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('environment');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<string>('classic');

  // ... keep existing code (useEffect, startCamera, capturePhoto, switchCamera, retakePhoto functions)

  const processImage = async () => {
    if (!capturedImage) return;
    
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      navigate('/measurements', { 
        state: { 
          imageUrl: capturedImage,
          style: selectedStyle,
          measurements: {
            neck: '15.0',
            chest: '40.4',
            waist: '34.9',
            hip: '41.1',
            inseam: '31.9'
          }
        } 
      });
    } catch (error) {
      console.error('Error processing image:', error);
      toast({
        title: "Processing Error",
        description: "Failed to process the image. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container max-w-md py-8 px-4">
      <Card className="overflow-hidden">
        <CardHeader>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/')}
              className="mr-2 -ml-2"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <CardTitle>Capture Customer Photo</CardTitle>
          </div>
        </CardHeader>
        
        <CardContent className="p-0 aspect-[3/4] relative bg-black/10">
          {!capturedImage ? (
            <>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 right-4">
                <Button 
                  variant="secondary" 
                  size="icon" 
                  className="rounded-full" 
                  onClick={switchCamera}
                >
                  <RefreshCw className="h-5 w-5" />
                </Button>
              </div>
            </>
          ) : (
            <img 
              src={capturedImage} 
              alt="Captured" 
              className="w-full h-full object-cover" 
            />
          )}
          <canvas ref={canvasRef} className="hidden" />
        </CardContent>
        
        <CardFooter className="flex flex-col p-6 gap-4">
          {!capturedImage ? (
            <Button 
              size="lg" 
              onClick={capturePhoto} 
              className="rounded-full h-16 w-16 p-0"
            >
              <Camera className="h-8 w-8" />
            </Button>
          ) : (
            <>
              <div className="w-full space-y-2">
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
              </div>
              <div className="flex gap-4 w-full">
                <Button 
                  variant="outline" 
                  onClick={retakePhoto}
                  className="flex-1"
                >
                  Retake
                </Button>
                <Button 
                  onClick={processImage}
                  disabled={isLoading}
                  className="flex-1"
                >
                  {isLoading ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Check className="mr-2 h-4 w-4" /> Use Photo
                    </>
                  )}
                </Button>
              </div>
            </>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default CapturePhoto;

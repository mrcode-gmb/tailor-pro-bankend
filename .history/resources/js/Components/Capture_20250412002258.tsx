import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@/Components/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/Components/components/ui/card';
import { Camera, RefreshCw, Check, ArrowLeft, Palette } from 'lucide-react';
import { toast } from '@/Components/components/ui/use-toast';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/Components/components/ui/select';

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('environment');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<string>('classic');

  useEffect(() => {
    startCamera();
    
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [facingMode]);

  const startCamera = async () => {
    try {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      
      const newStream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: facingMode,
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });
      
      setStream(newStream);
      
      if (videoRef.current) {
        videoRef.current.srcObject = newStream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      toast({
        title: "Camera Error",
        description: "Unable to access camera. Please check permissions.",
        variant: "destructive"
      });
    }
  };

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;
    
    const video = videoRef.current;
    const canvas = canvasRef.current;
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    const imageDataUrl = canvas.toDataURL('image/jpeg');
    setCapturedImage(imageDataUrl);
    
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  const switchCamera = () => {
    setFacingMode(prev => prev === 'user' ? 'environment' : 'user');
  };

  const retakePhoto = () => {
    setCapturedImage(null);
    startCamera();
  };

  const processImage = async () => {
    if (!capturedImage) return;
    
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
  
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
    <div className="container max-w-md">
        <div className="p-0 aspect-[3/4] relative bg-black/10">
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
        </div>
        
        <CardFooter className="flex flex-col p-6 gap-4">
          {!capturedImage ? (
            <Button 
              size="default" 
              onClick={capturePhoto} 
              className="rounded-lg h-16 w-16 p-0 bg-green-500 text-white"
            >
              <Camera className="h-8 w-8" />
            </Button>
          ) : (
            <>
              
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
    </div>
  );
};

export default CapturePhoto;

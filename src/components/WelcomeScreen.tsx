
import { useState, useEffect } from 'react';
import { Key } from 'lucide-react';

interface WelcomeScreenProps {
  onComplete: () => void;
}

const WelcomeScreen = ({ onComplete }: WelcomeScreenProps) => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (step === 1) {
      // Logo and key animation entrance - 3-4 seconds
      const timer = setTimeout(() => {
        setStep(2);
        setTimeout(onComplete, 1000);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [step, onComplete]);

  if (step === 2) {
    return (
      <div className="fixed inset-0 bg-[#0A0F1C] z-50 flex items-center justify-center transition-opacity duration-1000 opacity-0">
        <div className="text-center">
          <div className="loading-spinner mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-[#0A0F1C] z-50 flex items-center justify-center overflow-hidden">
      {/* Soft Blur Fade Corners */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#1A233A] to-transparent rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#1A233A] to-transparent rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#1A233A] to-transparent rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#1A233A] to-transparent rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Flying Bird Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bird-animation bird-1"></div>
        <div className="bird-animation bird-2"></div>
        <div className="bird-animation bird-3"></div>
        <div className="bird-animation bird-4"></div>
        <div className="bird-animation bird-5"></div>
      </div>

      {/* Floating House Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-house house-1"></div>
        <div className="floating-house house-2"></div>
        <div className="floating-house house-3"></div>
      </div>

      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>

      <div className="text-center max-w-2xl mx-auto px-4 relative z-10">
        <div className="animate-fade-in">
          <img 
            src="/lovable-uploads/73d4e411-fa42-428c-952d-596fd226a12d.png" 
            alt="WellHouse Logo" 
            className="mx-auto mb-8 h-32 w-auto filter brightness-110 animate-scale-in drop-shadow-2xl"
            style={{ 
              filter: 'brightness(1.1) drop-shadow(0 0 20px rgba(173, 200, 255, 0.3)) drop-shadow(0 0 40px rgba(173, 200, 255, 0.1))',
              animationDelay: '0.2s'
            }}
          />
          <div className="flex items-center justify-center mt-6">
            <Key 
              className="w-8 h-8 text-white animate-spin" 
              style={{ 
                animationDuration: '3s',
                animationDelay: '0.8s',
                filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))'
              }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;

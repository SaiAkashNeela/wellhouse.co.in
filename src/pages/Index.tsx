
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Wifi, Tv, Instagram } from 'lucide-react';
import PropertyCard from '@/components/PropertyCard';
import AmenitiesSection from '@/components/AmenitiesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import MoreOptionsSection from '@/components/MoreOptionsSection';
import Navigation from '@/components/Navigation';
import { useGsapAnimations } from '@/hooks/useGsapAnimations';

const Index = () => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);
  const fullText = "Live Smart. Pay Less.";

  // Initialize GSAP animations
  useGsapAnimations();

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTypingComplete(true);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  // Cursor blinking effect - only after typing is complete
  useEffect(() => {
    if (!typingComplete) return;
    
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, [typingComplete]);


  const properties = [
    {
      id: 1,
      name: "Modern Shared Living",
      location: "Tambaram",
      price: "₹3,600",
      images: [
        "/lovable-uploads/960dc808-fcf5-4013-abdb-4a885e535bc2.png",
        "/lovable-uploads/9692ab26-bf46-40ed-942a-5d5da9312833.png"
      ],
      amenities: ["TV", "Wi-Fi", "Kitchen", "Refrigerator"]
    },
    {
      id: 2,
      name: "Comfort Spaces",
      location: "Pallavaram", 
      price: "₹3,800",
      images: [
        "/lovable-uploads/7e051cf5-0c8c-4797-8901-51b8cd98e48b.png",
        "/lovable-uploads/a04a184c-dbbd-4771-928a-a92706ab7cd1.png"
      ],
      amenities: ["TV", "Wi-Fi", "Kitchen", "Washing Machine"]
    },
    {
      id: 3,
      name: "Premium Shared Rooms",
      location: "Pammal",
      price: "₹3,600", 
      images: [
        "/lovable-uploads/cfa7178d-642a-4105-8382-bd5d503fe35a.png",
        "/lovable-uploads/13932f1b-7a22-4ad8-ab06-09e3967fdb8e.png",
        "/lovable-uploads/ef14816a-3acc-43fa-b252-f6f55ae9bdd2.png"
      ],
      amenities: ["TV", "Wi-Fi", "Furniture", "Refrigerator"]
    },
    {
      id: 4,
      name: "Executive Shared Living",
      location: "Tambaram",
      price: "₹3,800",
      images: [
        "/lovable-uploads/cc77da94-eb41-4495-ae83-b4c5db2e8037.png",
        "/lovable-uploads/547c47e8-1b35-45fc-a244-6b12005d478e.png"
      ],
      amenities: ["TV", "Wi-Fi", "Kitchen", "Refrigerator"]
    },
    {
      id: 5,
      name: "Cozy Shared Spaces",
      location: "Pammal",
      price: "₹3,600",
      images: [
        "/lovable-uploads/b93ba019-eea1-4c5f-9099-b6b4ebd96302.png",
        "/lovable-uploads/7421496d-2434-405c-9392-160c3962ba81.png",
        "/lovable-uploads/a03b5d4e-8a95-4ffd-856e-63ea2eebf703.png"
      ],
      amenities: ["TV", "Wi-Fi", "Kitchen", "Washing Machine"]
    }
  ];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919884375292', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+919884375292', '_self');
  };

  const handleBrowsePropertiesClick = () => {
    document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/wellhousechennai?igsh=MXFjZzZ0NnlvdHJrcw%3D%3D&utm_source=qr', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-[#FAFAFA] custom-cursor">
      <div className="gsap-header">
        <Navigation />
      </div>
      
      
      {/* Enhanced Background Animation Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="floating-blob blob-1"></div>
        <div className="floating-blob blob-2"></div>
        <div className="floating-blob blob-3"></div>
        {/* Animated gradient haze particles */}
        <div className="shimmer-particle shimmer-1"></div>
        <div className="shimmer-particle shimmer-2"></div>
        <div className="shimmer-particle shimmer-3"></div>
        <div className="shimmer-particle shimmer-4"></div>
        {/* New subtle background elements */}
        <div className="pulsing-orb orb-1"></div>
        <div className="pulsing-orb orb-2"></div>
        <div className="pulsing-orb orb-3"></div>
        <div className="floating-dot dot-1"></div>
        <div className="floating-dot dot-2"></div>
        <div className="floating-dot dot-3"></div>
        <div className="floating-dot dot-4"></div>
         <div className="light-streak streak-1"></div>
        <div className="light-streak streak-2"></div>
        {/* Enhanced Animation Elements */}
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
        <div className="glow-orb glow-orb-3"></div>
        <div className="drift-particle particle-1"></div>
        <div className="drift-particle particle-2"></div>
        <div className="drift-particle particle-3"></div>
        <div className="drift-particle particle-4"></div>
        <div className="drift-particle particle-5"></div>
        <div className="ripple-pulse ripple-1"></div>
        <div className="ripple-pulse ripple-2"></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="hero-gradient-blob blob-hero-1"></div>
          <div className="hero-gradient-blob blob-hero-2"></div>
          <div className="hero-gradient-blob blob-hero-3"></div>
        </div>
        
        {/* Shooting Stars Animation */}
        <div className="shooting-stars">
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
          <div className="shooting-star"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C] via-[#1A233A] to-[#0A0F1C] opacity-90"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 flex items-center justify-center">
            <img 
              src="/lovable-uploads/73d4e411-fa42-428c-952d-596fd226a12d.png" 
              alt="WellHouse Logo" 
              className="h-20 w-auto filter brightness-110"
            />
          </div>
          
          <h1 className="gsap-hero-title font-raleway text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 leading-tight px-2">
            {typedText}
            {typingComplete && (
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 text-[#ADC8FF]`}>|</span>
            )}
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-[#D5D9E0] mb-6 md:mb-8 max-w-2xl mx-auto px-2">
            Affordable, smart shared homes for bachelors. Move in from just ₹3,600.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-2">
            <Button 
              size="lg" 
              onClick={handleBrowsePropertiesClick}
              className="gsap-cta-button bg-[#ADC8FF] hover:bg-[#E1E9FF] text-[#0A0F1C] font-semibold px-6 md:px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 cursor-hover text-sm md:text-base w-full sm:w-auto"
            >
              Browse Properties
            </Button>
            <Button 
              size="lg" 
              onClick={handleWhatsAppClick}
              className="gsap-cta-button bg-[#ADC8FF] hover:bg-[#E1E9FF] text-[#0A0F1C] font-semibold px-6 md:px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 cursor-hover text-sm md:text-base w-full sm:w-auto"
            >
              Chat on WhatsApp
            </Button>
            <Button 
              size="lg" 
              onClick={handleCallClick}
              className="gsap-cta-button bg-[#ADC8FF] hover:bg-[#E1E9FF] text-[#0A0F1C] font-semibold px-6 md:px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 cursor-hover text-sm md:text-base w-full sm:w-auto"
            >
              📞 Call Now
            </Button>
          </div>
        </div>
      </section>


      {/* Low Deposit Section */}
      <section className="py-8 md:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#1A233A] to-[#2A3C5C] p-6 sm:p-8 rounded-xl border border-[#3A4C6C] text-center">
            <h2 className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAFAFA] mb-4 leading-tight">
              Unlock Your Space in Chennai, Without the Financial Burden.
            </h2>
            <div className="max-w-3xl mx-auto mb-6">
              <p className="text-[#E1E9FF] text-base sm:text-lg leading-relaxed">
                Tired of sky-high deposits? That's why we offer one of the lowest advance deposits in Chennai — just <span className="text-[#ADC8FF] font-semibold">₹2,000</span>.
                <br /><br />
                Book with confidence knowing your deposit is fully refundable under standard terms.
                It's the smart, simple, and secure way to get started.
              </p>
            </div>
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#ADC8FF] hover:bg-[#E1E9FF] text-[#0A0F1C] font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 cursor-hover text-base"
            >
              Learn More & Reserve Your Spot Today
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Philosophy Section */}
      <section className="gsap-about py-8 md:py-12 px-4 sm:px-6 relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            {/* Main Quote */}
            <div className="mb-16">
              <div className="relative inline-block">
                <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAFAFA] leading-tight">
                  <span className="relative">
                    <span className="absolute -top-4 -left-4 text-6xl md:text-8xl text-[#ADC8FF] opacity-30 font-serif">"</span>
                    A roof over your head 
                    <br />
                    <span className="text-[#ADC8FF]">shouldn't hold you down.</span>
                    <span className="absolute -bottom-8 -right-4 text-6xl md:text-8xl text-[#ADC8FF] opacity-30 font-serif">"</span>
                  </span>
                </h2>
              </div>
            </div>

            {/* Philosophy Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div>
                <div className="bg-gradient-to-br from-[#1A233A] to-[#2A3C5C] p-6 rounded-2xl border border-[#3A4C6C] hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                  <p className="text-[#E1E9FF] text-lg leading-relaxed">
                    At Wellhouse, we believe your home should be a <span className="text-[#ADC8FF] font-semibold">launchpad, not an anchor</span>. We're changing the rules of renting to match the speed of your life.
                  </p>
                </div>
              </div>

              <div>
                <div className="bg-gradient-to-br from-[#1A233A] to-[#2A3C5C] p-6 rounded-2xl border border-[#3A4C6C] hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                  <p className="text-[#D5D9E0] text-lg leading-relaxed">
                    Bring your <span className="text-[#ADC8FF] font-semibold">ambitions, not your worries</span> about rent. With low deposits, affordable rates, and flexible stays, we've removed the barriers.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div>
              <div className="bg-gradient-to-r from-[#ADC8FF] to-[#E1E9FF] p-6 rounded-2xl text-[#0A0F1C] max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500">
                <p className="text-xl font-semibold leading-relaxed">
                  You just focus on building your future; we'll provide the comfortable, fully-furnished space to do it in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Announcement */}
      <section className="py-6 md:py-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#1A233A] to-[#2A3C5C] p-4 sm:p-6 rounded-xl border border-[#3A4C6C] text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-[#ADC8FF] mb-2 px-2">
              WellHouse is expanding!
            </h3>
            <p className="text-[#E1E9FF] text-base sm:text-lg leading-relaxed px-2">
              New locations and upgraded spaces coming soon — stay tuned!
            </p>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-4">
              Our Spaces
            </h2>
            <p className="text-[#D5D9E0] text-center mb-8 max-w-2xl mx-auto">
              We offer a wide variety of room options, starting from just ₹3,600/month.
            </p>
            
            {/* Per-Day Stay Information */}
            <div className="bg-gradient-to-r from-[#1A233A] to-[#2A3C5C] p-4 md:p-6 rounded-xl border border-[#3A4C6C] text-center mb-12 mx-auto max-w-3xl">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl">🛏️</span>
                <h3 className="text-lg md:text-xl font-semibold text-[#ADC8FF]">
                  Now available: Stay on a per-day basis
                </h3>
              </div>
              <p className="text-[#E1E9FF] text-base md:text-lg font-medium mb-1">
                Starting from ₹220/day
              </p>
              <p className="text-[#D5D9E0] text-sm">
                Rates may vary depending on location, availability, and other terms.
              </p>
            </div>
          </div>
          
          {/* Location Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 md:mb-12 px-2">
            {['All', 'Tambaram', 'Pallavaram', 'Pammal'].map((location) => (
              <button
                key={location}
                className="px-4 sm:px-6 py-2 rounded-full bg-[#1A233A] text-[#D5D9E0] hover:bg-[#2A3C5C] hover:text-[#FAFAFA] transition-all duration-300 hover:scale-105 cursor-hover text-sm sm:text-base"
              >
                {location}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2">
            {properties.map((property, index) => (
              <div key={property.id}>
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <div className="gsap-amenities-container">
        <AmenitiesSection />
      </div>

      {/* Contact Section */}
      <div className="gsap-contact-container">
        <ContactSection />
      </div>

      {/* More Options Section */}
      <section className="mb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <MoreOptionsSection />
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-2 sm:gap-3 items-end">
        {/* Call Button */}
        <Button
          size="lg"
          onClick={handleCallClick}
          className="bg-[#ADC8FF] hover:bg-[#E1E9FF] text-[#0A0F1C] rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110 cursor-hover"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </Button>
        
        {/* WhatsApp Button */}
        <Button
          size="lg"
          onClick={handleWhatsAppClick}
          className="bg-[#25D366] hover:bg-[#20B858] text-white rounded-full p-3 sm:p-4 shadow-lg transition-all duration-300 hover:scale-110 cursor-hover"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </Button>
      </div>


      {/* Legal Notice */}
      <footer className="py-4 md:py-6 px-4 sm:px-6 bg-[#0A0F1C] border-t border-[#1A233A]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed px-2">
            📞 Call us for updated pricing, available properties, and the latest photos.<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Prices and availability are subject to change.<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Amenities may vary according to the apartment. Conditions apply.
          </p>
        </div>
      </footer>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Wifi, Tv } from 'lucide-react';

interface Property {
  id: number;
  name: string;
  location: string;
  price: string;
  images: string[];
  amenities: string[];
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
      case 'wi-fi':
        return <Wifi className="w-4 h-4" />;
      case 'tv':
        return <Tv className="w-4 h-4" />;
      case 'refrigerator':
        return <span className="text-sm">🧊</span>;
      case 'kitchen':
        return <span className="text-sm">🍳</span>;
      case 'washing machine':
        return <span className="text-sm">🌀</span>;
      case 'furniture':
        return <span className="text-sm">🛋️</span>;
      default:
        return <div className="w-4 h-4 bg-[#ADC8FF] rounded-full"></div>;
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919884375292', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+919884375292', '_self');
  };

  const handleAmenityClick = (amenity: string) => {
    document.getElementById('amenities')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#1A233A] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 group cursor-hover">
      {/* Image Carousel */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={property.images[currentImageIndex]}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {property.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100 cursor-hover"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100 cursor-hover"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-[#ADC8FF] text-[#0A0F1C] px-3 py-1 rounded-full font-semibold transition-all duration-300 group-hover:scale-110 group-hover:bg-[#E1E9FF]">
          {property.price}
        </div>

        {/* Image indicators */}
        {property.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {property.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-hover ${
                  index === currentImageIndex 
                    ? 'bg-[#ADC8FF] scale-125' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-playfair text-xl font-bold text-[#FAFAFA] mb-2 group-hover:text-[#ADC8FF] transition-colors duration-300">
          {property.name}
        </h3>
        <p className="text-[#D5D9E0] mb-4 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {property.location}
        </p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-6">
          {property.amenities.map((amenity, index) => (
            <div
              key={index}
              onClick={() => handleAmenityClick(amenity)}
              className="flex items-center gap-1 bg-[#2A3C5C] text-[#D5D9E0] px-2 py-1 rounded-full text-sm hover:bg-[#3A4A6D] transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {getAmenityIcon(amenity)}
              <span>{amenity}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            size="sm"
            onClick={handleWhatsAppClick}
            className="flex-1 bg-[#ADC8FF] hover:bg-[#E1E9FF] text-[#0A0F1C] font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-hover"
          >
            WhatsApp
          </Button>
          <Button
            size="sm"
            onClick={handleCallClick}
            className="bg-[#ADC8FF] hover:bg-[#E1E9FF] text-[#0A0F1C] font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-hover"
          >
            📞 Call
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

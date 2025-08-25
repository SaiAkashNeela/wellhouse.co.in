
import { Wifi, Tv, Clock } from 'lucide-react';

const AmenitiesSection = () => {
  const amenities = [
    { name: 'TV', icon: <Tv className="w-8 h-8" />, description: 'Entertainment for relaxation' },
    { name: 'Wi-Fi', icon: <Wifi className="w-8 h-8" />, description: 'Unlimited internet access' },
    { name: 'Refrigerator', icon: <div className="w-8 h-8 flex items-center justify-center text-xl">🧊</div>, description: 'Fresh food storage' },
    { name: 'Washing Machine', icon: <div className="w-8 h-8 flex items-center justify-center text-xl">🌀</div>, description: 'Laundry made easy' },
    { name: 'Kitchen Access', icon: <div className="w-8 h-8 flex items-center justify-center text-xl">🍳</div>, description: 'Cooking facilities provided' },
    { name: 'Fully Furnished', icon: <div className="w-8 h-8 flex items-center justify-center text-xl">🛋️</div>, description: 'Ready to move in' },
    { name: 'AC & Non-AC Rooms', icon: <div className="w-8 h-8 flex items-center justify-center text-xl">❄️</div>, description: 'Climate controlled comfort' },
    { name: '24/7 Access', icon: <Clock className="w-8 h-8" />, description: 'Available round the clock' },
    { name: 'Bathroom', icon: <div className="w-8 h-8 flex items-center justify-center text-xl">🚿</div>, description: 'Clean and modern facilities' },
    { name: 'Drinking Water', icon: <div className="w-8 h-8 flex items-center justify-center text-xl">💧</div>, description: 'Pure drinking water supply' },
    { name: 'Parking', icon: <div className="w-8 h-8 flex items-center justify-center text-xl">🅿️</div>, description: 'Secure parking space' },
    { name: 'Housekeeping', icon: <div className="w-8 h-8 flex items-center justify-center text-xl">🧹</div>, description: 'Regular cleaning service' },
    { name: 'On-Demand Cooking / Food Subscription Services', icon: <div className="w-8 h-8 flex items-center justify-center text-xl">🍱</div>, description: 'Convenient meal options available' },
    { name: 'WhatsApp Video Tour', icon: <div className="w-8 h-8 flex items-center justify-center text-xl">📹</div>, description: 'Virtual property tours available' },
    { name: 'Zero Brokerage', icon: <div className="w-8 h-8 flex items-center justify-center text-xl">💸</div>, description: 'No broker fees or hidden charges' },
    { name: '₹2000 Deposit', icon: <div className="w-8 h-8 flex items-center justify-center text-xl">📦</div>, description: 'Low security deposit required' }
  ];

  const scrollToAmenities = () => {
    document.getElementById('amenities')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="amenities" className="py-20 px-4 bg-gradient-to-b from-[#0A0F1C] to-[#1A233A]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-4 text-[#FAFAFA]">
          Premium Amenities
        </h2>
        <p className="text-[#D5D9E0] text-center mb-6 max-w-2xl mx-auto">
          Experience comfortable living with all modern amenities included in your stay
        </p>
        <p className="text-[#ADC8FF] text-center mb-12 max-w-3xl mx-auto text-lg font-medium">
          We offer a wide variety of room options, starting from just ₹3,600/month.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              onClick={scrollToAmenities}
              className="gsap-amenity-item bg-[#1A233A] p-6 rounded-xl text-center hover:bg-[#2A3C5C] transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl group cursor-pointer"
              style={{ 
                animationDelay: `${index * 100}ms`,
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="flex justify-center mb-4 text-[#ADC8FF] group-hover:text-[#E1E9FF] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                {amenity.icon}
              </div>
              <h3 className="font-semibold text-[#FAFAFA] mb-2 group-hover:text-[#ADC8FF] transition-colors duration-300">
                {amenity.name}
              </h3>
              <p className="text-[#D5D9E0] text-sm">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;

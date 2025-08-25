import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const MoreOptionsSection = () => {
  const handleCallClick = () => {
    window.open('tel:+919884375292', '_self');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919884375292', '_blank');
  };

  return (
    <Card className="bg-gradient-to-r from-[#1A233A] to-[#2A3C5C] border-[#3A4C6C] backdrop-blur-sm">
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-semibold text-white mb-3">
          📞 Looking for More Options?
        </h3>
        <p className="text-gray-300 text-sm mb-4 max-w-2xl mx-auto">
          Call us for additional property listings that may not be shown here. We often have new accommodations available based on your preferences — sometimes at even better rates.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            onClick={handleCallClick}
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <Phone className="mr-2 h-4 w-4" />
            Call for More Options
          </Button>
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] hover:bg-[#20B858] text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp Us
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MoreOptionsSection;
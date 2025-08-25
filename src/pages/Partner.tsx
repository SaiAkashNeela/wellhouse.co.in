
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Navigation from '@/components/Navigation';

const Partner = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    collaboration: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the WhatsApp message
    const whatsappMessage = `New Partner Enquiry from WellHouse Website:
Name: ${formData.name}
Phone: ${formData.phone}
Location: ${formData.location}
Collaboration Type: ${formData.collaboration}
Message: ${formData.message}`;

    // URL encode the message
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/919884375292?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-[#FAFAFA]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-[#FAFAFA]">
            List Your Property. Partner with WellHouse.
          </h1>
          <p className="text-xl md:text-2xl text-[#D5D9E0] mb-8 max-w-3xl mx-auto">
            Property owners can rent out their homes to WellHouse as shared accommodation. 
            Join our network and maximize your rental income with hassle-free management.
          </p>
        </div>
      </section>

      {/* Partner Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#1A233A] p-8 rounded-xl hover:bg-[#1F2A3F] transition-all duration-300">
            <h2 className="font-playfair text-3xl font-bold mb-6 text-[#FAFAFA] text-center">
              Partner Enquiry Form
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-[#2A3C5C] border-[#3A4A6D] text-[#FAFAFA] placeholder-[#D5D9E0] focus:border-[#ADC8FF] transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-[#2A3C5C] border-[#3A4A6D] text-[#FAFAFA] placeholder-[#D5D9E0] focus:border-[#ADC8FF] transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="text"
                  name="location"
                  placeholder="Property Location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="bg-[#2A3C5C] border-[#3A4A6D] text-[#FAFAFA] placeholder-[#D5D9E0] focus:border-[#ADC8FF] transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, collaboration: value }))}>
                  <SelectTrigger className="bg-[#2A3C5C] border-[#3A4A6D] text-[#FAFAFA] focus:border-[#ADC8FF] transition-all duration-300">
                    <SelectValue placeholder="Type of Collaboration" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2A3C5C] border-[#3A4A6D]">
                    <SelectItem value="full-property" className="text-[#FAFAFA] hover:bg-[#3A4A6D]">Full Property Management</SelectItem>
                    <SelectItem value="partial-rooms" className="text-[#FAFAFA] hover:bg-[#3A4A6D]">Partial Room Rental</SelectItem>
                    <SelectItem value="consultation" className="text-[#FAFAFA] hover:bg-[#3A4A6D]">Property Consultation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Tell us about your property and collaboration expectations..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-[#2A3C5C] border-[#3A4A6D] text-[#FAFAFA] placeholder-[#D5D9E0] focus:border-[#ADC8FF] min-h-[120px] transition-all duration-300"
                  required
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#ADC8FF] hover:bg-[#E1E9FF] text-[#0A0F1C] font-semibold transition-all duration-300 hover:scale-105"
              >
                Submit Partnership Enquiry
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;

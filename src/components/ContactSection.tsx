
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
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
    const whatsappMessage = `New Contact Enquiry from WellHouse Website:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred Location: ${formData.location}
Message: ${formData.message}`;

    // URL encode the message
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/919884375292?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+919884375292', '_self');
  };

  return (
    <section id="contact" className="py-20 px-4 bg-[#0A0F1C]">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-4 text-[#FAFAFA]">
          Get in Touch
        </h2>
        <p className="text-[#D5D9E0] text-center mb-12 max-w-2xl mx-auto">
          Ready to find your perfect shared living space? Contact us today and we'll help you get started.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="gsap-contact-item bg-[#1A233A] p-8 rounded-xl hover:bg-[#1F2A3F] transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
            <h3 className="font-playfair text-2xl font-bold mb-6 text-[#FAFAFA]">
              Send us a Message
            </h3>
            
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
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
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
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, location: value }))}>
                  <SelectTrigger className="bg-[#2A3C5C] border-[#3A4A6D] text-[#FAFAFA] focus:border-[#ADC8FF] transition-all duration-300">
                    <SelectValue placeholder="Preferred Location" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2A3C5C] border-[#3A4A6D]">
                    <SelectItem value="tambaram" className="text-[#FAFAFA] hover:bg-[#3A4A6D]">Tambaram</SelectItem>
                    <SelectItem value="pallavaram" className="text-[#FAFAFA] hover:bg-[#3A4A6D]">Pallavaram</SelectItem>
                    <SelectItem value="pammal" className="text-[#FAFAFA] hover:bg-[#3A4A6D]">Pammal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Tell us about your requirements..."
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
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="gsap-contact-item bg-[#1A233A] p-6 rounded-xl hover:bg-[#1F2A3F] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <h4 className="font-semibold text-[#FAFAFA] mb-3">Call Us</h4>
              <p className="text-[#D5D9E0]">📞 +91 98843 75292</p>
              <p className="text-[#D5D9E0] text-sm mt-2">Raghul Gopinath</p>
              <Button
                onClick={handleCallClick}
                size="sm"
                className="mt-4 bg-[#ADC8FF] hover:bg-[#E1E9FF] text-[#0A0F1C] font-semibold transition-all duration-300 hover:scale-105"
              >
                📞 Call Now
              </Button>
            </div>
            
            <div className="gsap-contact-item bg-[#1A233A] p-6 rounded-xl hover:bg-[#1F2A3F] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <h4 className="font-semibold text-[#FAFAFA] mb-3">Email Us</h4>
              <p className="text-[#D5D9E0]">wellhousechennai@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Partner with us information */}
        <div className="text-center mt-12 p-6 bg-[#1A233A] rounded-xl">
          <h3 className="font-playfair text-xl font-bold mb-3 text-[#FAFAFA]">
            Partner With Us
          </h3>
          <p className="text-[#D5D9E0] mb-4">
            Own a property? Join our network of trusted partners and maximize your rental income.
          </p>
          <Button
            onClick={() => window.location.href = '/partner'}
            className="bg-[#ADC8FF] hover:bg-[#E1E9FF] text-[#0A0F1C] font-semibold transition-all duration-300 hover:scale-105"
          >
            Become a Partner
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

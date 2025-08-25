import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:bg-gray-800">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <div className="text-sm text-gray-300 leading-relaxed space-y-4">
              <p>
                WellHouse values your privacy. We collect basic contact information (such as your name, phone number, and preferred location) to assist with accommodation booking and communication.
              </p>
              
              <p>
                Your information will never be shared or sold to third parties. By submitting forms or initiating WhatsApp conversations, you consent to be contacted by WellHouse.
              </p>
              
              <h3 className="text-lg font-semibold text-white mt-6 mb-3">Information We Collect</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name and contact details</li>
                <li>Location preferences</li>
                <li>Communication preferences</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-white mt-6 mb-3">How We Use Your Information</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>To provide accommodation services</li>
                <li>To communicate updates and availability</li>
                <li>To improve our services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
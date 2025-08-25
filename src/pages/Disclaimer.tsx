import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Disclaimer = () => {
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
          <h1 className="text-3xl font-bold mb-6 text-center">Disclaimer</h1>
          
          <div className="prose prose-invert max-w-none">
            <div className="text-sm text-gray-300 leading-relaxed space-y-4">
              <p>
                WellHouse provides shared rental accommodations for bachelors in Chennai. Information displayed, including amenities and pricing, is for general reference and may vary.
              </p>
              
              <p>
                Availability is subject to change. While we strive for accuracy, WellHouse is not liable for external misinformation or outdated listings.
              </p>
              
              <h3 className="text-lg font-semibold text-white mt-6 mb-3">Information Accuracy</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Property details may vary from descriptions</li>
                <li>Pricing subject to change without notice</li>
                <li>Amenities availability not guaranteed</li>
                <li>Photos for reference only</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-white mt-6 mb-3">Liability Limitations</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>No liability for third-party services</li>
                <li>Property conditions may vary</li>
                <li>External factors beyond our control</li>
                <li>User verification responsibility</li>
              </ul>
              
              <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4 mt-6">
                <p className="text-blue-200 text-xs">
                  <strong>Note:</strong> Always verify property details and availability by contacting us directly before making any commitments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
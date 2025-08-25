import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Terms = () => {
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
          <h1 className="text-3xl font-bold mb-6 text-center">Terms & Conditions</h1>
          
          <div className="prose prose-invert max-w-none">
            <div className="text-sm text-gray-300 leading-relaxed space-y-4">
              <p>
                By using this website, you agree to the terms and conditions outlined by WellHouse. Listings, pricing, and property details are subject to availability and updates.
              </p>
              
              <p>
                Booking is subject to approval. All tenants must follow property usage rules. Any misuse of the property for commercial or unlawful purposes may result in cancellation without refund.
              </p>
              
              <h3 className="text-lg font-semibold text-white mt-6 mb-3">Booking Terms</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>All bookings require approval</li>
                <li>Pricing subject to availability</li>
                <li>Security deposit may be required</li>
                <li>Advance notice required for cancellation</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-white mt-6 mb-3">Property Usage</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Residential use only</li>
                <li>No commercial activities</li>
                <li>Respect common areas and other tenants</li>
                <li>Follow house rules and regulations</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-white mt-6 mb-3">Liability</h3>
              <p>
                WellHouse is not liable for personal belongings or any incidents that may occur on the property. Tenants are responsible for their own safety and belongings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
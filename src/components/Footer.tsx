import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm mb-4">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            {" | "}
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            {" | "}
            <Link to="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
          </p>
          <p className="text-xs text-gray-400">
            © 2024 WellHouse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
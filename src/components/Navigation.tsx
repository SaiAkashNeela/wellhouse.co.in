
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Properties', href: '#properties' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Partner', href: '/partner' }
  ];

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/wellhousechennai?igsh=MXFjZzZ0NnlvdHJrcw%3D%3D&utm_source=qr', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-[#0A0F1C]/95 backdrop-blur-md border-b border-[#1A233A]/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img 
                src="/lovable-uploads/73d4e411-fa42-428c-952d-596fd226a12d.png" 
                alt="WellHouse" 
                className="h-10 w-auto filter brightness-125 contrast-110 cursor-hover opacity-100"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                item.name === 'Partner' ? (
                  <div key={item.name} className="flex items-center space-x-3">
                    <Link
                      to={item.href}
                      className="text-white/90 hover:text-white transition-colors duration-300 font-semibold cursor-hover text-[15px] tracking-wide"
                    >
                      {item.name}
                    </Link>
                    <Button
                      onClick={handleInstagramClick}
                      className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 hover:from-purple-600 hover:via-pink-600 hover:to-yellow-600 text-white rounded-full p-1.5 shadow-md transition-all duration-300 hover:scale-110 cursor-hover"
                      size="sm"
                    >
                      <Instagram className="w-4 h-4" />
                    </Button>
                  </div>
                ) : item.name === 'About Us' ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-white/90 hover:text-white transition-colors duration-300 font-semibold cursor-hover text-[15px] tracking-wide"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white/90 hover:text-white transition-colors duration-300 font-semibold cursor-hover text-[15px] tracking-wide"
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#FAFAFA] hover:bg-[#1A233A] cursor-hover"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#1A233A] rounded-lg mt-2">
              {navItems.map((item) => (
                item.name === 'Partner' ? (
                  <div key={item.name} className="flex items-center justify-between px-3 py-2">
                    <Link
                      to={item.href}
                      className="text-[#D5D9E0] hover:text-[#FAFAFA] transition-colors duration-300 cursor-hover"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    <Button
                      onClick={handleInstagramClick}
                      className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 hover:from-purple-600 hover:via-pink-600 hover:to-yellow-600 text-white rounded-full p-1.5 shadow-md transition-all duration-300 hover:scale-110 cursor-hover"
                      size="sm"
                    >
                      <Instagram className="w-4 h-4" />
                    </Button>
                  </div>
                ) : item.name === 'About Us' ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 text-[#D5D9E0] hover:text-[#FAFAFA] hover:bg-[#2A3C5C] rounded-md transition-colors duration-300 cursor-hover"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-[#D5D9E0] hover:text-[#FAFAFA] hover:bg-[#2A3C5C] rounded-md transition-colors duration-300 cursor-hover"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

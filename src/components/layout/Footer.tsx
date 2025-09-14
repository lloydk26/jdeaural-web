import { Link } from 'react-router-dom';
import { Waves } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Waves className="h-6 w-6 text-primary" />
              <span className="font-bold font-headline text-xl">JDE Aural Architecture</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Engineering Sound, Designing Silence. Innovative acoustical engineering 
              solutions for homes, businesses, and institutions.
            </p>
            <p className="text-sm text-gray-500">
              © 2024 JDE Aural Architecture. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>Email: info@jdeaural.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Address: 123 Sound Ave<br />Acoustic City, AC 12345</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

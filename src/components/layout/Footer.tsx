import Link from 'next/link';
import { Waves, Facebook, MessageCircle, Phone, Send, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="text-center md:text-left">
            <Link href="/" className="flex items-center justify-center space-x-2 md:justify-start">
              <Waves className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-white font-headline">
                JDE Aural Architecture
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Engineering Sound, Designing Silence.
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="font-headline text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start justify-center md:justify-start">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0" />
                <span className="ml-3">603 Lawin St, G2 Pinagsama, Taguig City</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:jdeauralarchitect@gmail.com" className="ml-3 hover:text-white">jdeauralarchitect@gmail.com</a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:091706581616" className="ml-3 hover:text-white">0917 065 81616</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} JDE Aural Architecture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About Us' },
  { href: '/customer-feedback', label: 'Customer Feedback' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="container flex h-14 items-center justify-between rounded-full bg-gray-900/80 px-6 text-gray-200 backdrop-blur-sm shadow-lg border border-white/10">
        <div className="flex items-center">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <Waves className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline sm:inline-block text-white">
              JDE Aural
            </span>
          </Link>
          <nav className="hidden gap-6 text-sm md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="font-medium text-gray-300 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden text-white hover:text-white"
                aria-label="Toggle Menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 bg-gray-900 text-white border-r-gray-800">
              <Link
                to="/"
                className="mb-8 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <Waves className="mr-2 h-5 w-5 text-primary" />
                <span className="font-bold font-headline">JDE Aural</span>
              </Link>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <Button asChild className="hidden md:inline-flex">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

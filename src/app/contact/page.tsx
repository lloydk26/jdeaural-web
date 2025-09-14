import { ContactForm } from '@/components/ContactForm';
import { Mail, MapPin, Phone, Facebook, Send } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Contact Us | JDE Aural Architecture',
  description: 'Get in touch with us for a free consultation. Contact JDE Aural Architecture via our form, email, or phone.',
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Messenger', icon: () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6"><title>Messenger</title><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c2.434 0 4.72-.718 6.643-1.963l3.243 1.963-1.39-3.743A11.95 11.95 0 0 0 24 12c0-6.627-5.373-12-12-12zm0 2.4a9.6 9.6 0 0 1 9.6 9.6c0 2.227-.76 4.29-2.07 5.968l.94 2.536-2.2-1.332a9.548 9.548 0 0 1-5.27.928 9.6 9.6 0 0 1-9.6-9.6A9.6 9.6 0 0 1 12 2.4zM8.4 9.6L12 13.2l3.6-3.6 3.6 3.6V6L15.6 9.6 12 6 8.4 9.6 4.8 6v7.2l3.6-3.6z"/></svg>, href: '#' },
  { name: 'Viber', icon: Phone, href: '#' },
  { name: 'WhatsApp', icon: () => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6"><title>WhatsApp</title><path d="M12.04 0C5.43 0 0 5.42 0 12.03c0 2.2.6 4.28 1.68 6.09l-1.68 6.13 6.3-1.65c1.76.98 3.76 1.55 5.86 1.55 6.61 0 12-5.42 12-12.04S18.65 0 12.04 0zM17.6 15.63c-.34-.17-2-.98-2.31-1.1-.31-.12-.54-.17-.76.17-.22.34-.87 1.1-1.07 1.32-.2.22-.4.25-.74.08-.34-.17-1.45-.53-2.76-1.7-1.02-.91-1.7-2.04-1.95-2.38-.25-.34-.03-.53.15-.7.16-.15.34-.38.51-.57.17-.19.23-.34.34-.57.12-.22.06-.4-.03-.57-.08-.17-.76-1.83-.98-2.51-.22-.68-.45-.58-.61-.58-.17 0-.34 0-.51 0-.17 0-.45.06-.68.34-.23.27-.87.85-.87 2.07 0 1.22.89 2.4 1.02 2.56.12.17 1.75 2.67 4.24 3.74.59.25 1.05.4 1.41.51.59.18 1.13.15 1.55.09.48-.06 1.45-.59 1.65-.98.2-.38.2-..7.14-..81-.06-.11-.22-.17-.48-.34z"/></svg>, href: '#' },
  { name: 'Telegram', icon: Send, href: '#' }
];

export default function ContactPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">Ready to Soundproof Your Space?</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
              We're here to help. Reach out to us with your project details or questions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <Card className="p-8">
                <ContactForm />
              </Card>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold font-headline">Direct Contact Information</h2>
              <div className="mt-6 space-y-6 text-foreground/80">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p>JDE Aural Architecture & Engineering Services</p>
                    <p>603 Lawin St, G2 Pinagsama, Taguig City</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a href="tel:091706581616" className="hover:text-primary">0917 065 81616</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a href="mailto:jdeauralarchitect@gmail.com" className="hover:text-primary">jdeauralarchitect@gmail.com</a>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold font-headline mt-10">Alternative Contact Options</h2>
              <div className="mt-6 flex space-x-4">
                {socialLinks.map((link) => (
                  <Link href={link.href} key={link.name} title={link.name} className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-foreground/70 hover:text-primary hover:bg-primary/10 transition-colors">
                    <link.icon/>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

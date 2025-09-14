'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Info } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const getMessageTemplate = (product: string | null): string => {
    if (!product) return '';
    switch (product) {
        case 'Window Inserts':
            return `I would like to order Window Inserts.

Quantity: [please specify]
Preferred sizes/locations: [please specify]
Additional notes: [optional]`;
        case 'Acoustic Panels':
            return `I would like to order Acoustic Panels.

Quantity: [please specify]
Installation area/room: [please specify]
Finish/color preferences: [optional]`;
        case 'Sound Proofing Services':
            return `I’m interested in Sound Proofing Services.

Property type: [home/condo/office/other]
Areas of concern: [please specify]
Timeline/budget notes: [optional]`;
        default:
            return '';
    }
}

export function ContactForm() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const productName = searchParams.get('product');

  const [initialMessage, setInitialMessage] = useState('');

  useEffect(() => {
    setInitialMessage(getMessageTemplate(productName));
  }, [productName]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  useEffect(() => {
      if (initialMessage) {
        form.setValue('message', initialMessage);
      }
  }, [initialMessage, form]);


  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Message Sent!',
      description: "Thank you for reaching out. We'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <>
        {productName && (
             <Alert className="mb-6 border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-900/30">
                <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <AlertTitle className="text-blue-800 dark:text-blue-300">Requesting an Order/Quote</AlertTitle>
                <AlertDescription className="text-blue-700 dark:text-blue-300/80">
                    You’re requesting an order/quote for <strong>{productName}</strong>. Submit the form and our team will contact you with pricing, lead times, and next steps.
                </AlertDescription>
            </Alert>
        )}
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                    <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                    <Textarea placeholder="How can we help you achieve acoustic comfort?" className="min-h-[150px]" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <Button type="submit" className="w-full">Send Message</Button>
        </form>
        </Form>
    </>
  );
}

import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Sekel Insights team. We\'re here to help you with your data analysis and automation needs.',
};

export default function ContactPage() {
  return (
    <>
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
            Let's Start a Conversation
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            Have a project in mind, a question about our services, or just want to learn more? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
            <div className="space-y-8">
                <h2 className="text-3xl font-bold">Contact Information</h2>
                <div className="space-y-4 text-lg">
                    <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-primary mt-1" />
                        <div>
                            <h3 className="font-semibold">Our Location</h3>
                            <p className="text-muted-foreground">Kent, South East England<br/>United Kingdom</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Mail className="w-6 h-6 text-primary mt-1" />
                         <div>
                            <h3 className="font-semibold">Email Us</h3>
                            <a href="mailto:contact@sekelhive.com" className="text-muted-foreground hover:text-primary transition-colors">contact@sekelhive.com</a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Phone className="w-6 h-6 text-primary mt-1" />
                        <div>
                            <h3 className="font-semibold">Call Us</h3>
                            <p className="text-muted-foreground">
                              <a href="tel:+441234567890" className="hover:underline">
                                +447407320622
                              </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

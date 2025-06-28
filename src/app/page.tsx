import Link from "next/link";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ContactForm } from "@/components/contact-form";
import { LogoCloud } from "@/components/logo-cloud";
import { ArrowRight, BarChart, CheckCircle, Cpu, ShieldCheck } from "lucide-react";

const testimonials = [
  {
    quote: "Working with Sekel Insights transformed our approach to data. Their custom dashboards gave us clarity we never had before, directly impacting our strategic decisions and leading to a 25% increase in operational efficiency.",
    name: "Alex Johnson",
    title: "CEO, Tech Innovators",
    avatar: "https://placehold.co/100x100.png"
  },
  {
    quote: "The team at Sekel Hive are true partners. They didn't just deliver a report; they helped us build a data-driven culture. Their training was invaluable for our team.",
    name: "Samantha Carter",
    title: "Head of Operations, Estate Solutions",
    avatar: "https://placehold.co/100x100.png"
  },
  {
    quote: "Their automation solutions saved us countless hours of manual work. We can now focus on what truly matters - growing our business. Highly recommended.",
    name: "David Lee",
    title: "Founder, Urban E-commerce",
    avatar: "https://placehold.co/100x100.png"
  },
];

const faqItems = [
    {
        question: "What data integrations do you support?",
        answer: "We support a wide range of data sources, including SQL databases (PostgreSQL, MySQL), cloud data warehouses (BigQuery, Redshift, Snowflake), CRM platforms (Salesforce, HubSpot), analytics tools (Google Analytics), and flat files (CSV, Excel). We can also build custom integrations for proprietary systems."
    },
    {
        question: "What are your common engagement models?",
        answer: "We offer flexible engagement models to suit your needs, including project-based work for specific deliverables, monthly retainers for ongoing support and analytics-as-a-service, and custom long-term partnerships for strategic initiatives. Our service tiers provide clear starting points."
    },
    {
        question: "What are typical report delivery times and formats?",
        answer: "Delivery times vary based on complexity, but initial dashboards are often ready within 2-4 weeks. We deliver reports in various formats, including interactive online dashboards (PowerBI, Tableau), scheduled PDF exports, and raw data exports for your own tools."
    },
    {
        question: "How do you ensure the security of sensitive client data?",
        answer: "Data security is our top priority. We adhere to strict data governance protocols, including data encryption in transit and at rest, access control limitations, and compliance with regulations like GDPR. All client data is handled within secure, isolated environments."
    }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary py-20 md:py-32">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight">
            Unlock Actionable Insights, Drive Unprecedented Growth
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            We transform your complex data into clear, strategic actions. Stop guessing and start making decisions that accelerate your revenue and outpace the competition.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                  <p className="text-4xl font-bold text-primary">5+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                  <p className="text-4xl font-bold text-primary">12+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="text-center">
                  <p className="text-4xl font-bold text-primary">98%</p>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
              <div className="text-center">
                  <p className="text-4xl font-bold text-primary">30%</p>
                  <p className="text-sm text-muted-foreground">Avg. Efficiency Gain</p>
              </div>
          </div>
        </div>
      </section>

      {/* Logo Cloud */}
      <section>
        <div className="py-12 bg-background">
          <div className="container">
            <h2 className="text-center text-sm font-semibold uppercase text-muted-foreground tracking-wider">
              Trusted by innovative companies
            </h2>
          </div>
          <LogoCloud />
        </div>
      </section>

      {/* Pain Point Section */}
      <section className="py-20 md:py-28">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div>
                <span className="text-sm font-semibold uppercase text-primary">The Old Way is Broken</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 tracking-tight">Stop Drowning in Data and Start Driving Decisions</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Relying on outdated spreadsheets and generic reports is slow, inefficient, and risky. You're missing critical insights while your team wastes valuable time on manual data wrangling.
                </p>
                <div className="mt-6 space-y-4">
                    <p className="text-lg text-muted-foreground line-through">Manual data entry and errors</p>
                    <p className="text-lg text-muted-foreground line-through">Delayed, static reports</p>
                    <p className="text-lg text-muted-foreground line-through">Decisions based on gut-feelings</p>
                </div>
            </div>
            <div className="bg-secondary p-8 rounded-lg">
                <span className="text-sm font-semibold uppercase text-primary">Our Unique Benefit</span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2">Your Data, Supercharged</h3>
                <p className="mt-4 text-lg text-muted-foreground">
                    We deliver a unified, automated analytics engine tailored to your business. Get real-time, actionable insights that empower your team to act decisively and confidently.
                </p>
                <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                        <p><strong>Automated Workflows:</strong> Save time and eliminate human error with intelligent data integration.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                        <p><strong>Interactive Dashboards:</strong> Access live, easy-to-understand KPIs from anywhere.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                        <p><strong>Predictive Insights:</strong> Move beyond what happened to why it happened and what to do next.</p>
                    </div>
                </div>
                 <Button asChild size="lg" className="mt-8">
                    <Link href="/services">Explore Our Solutions</Link>
                </Button>
            </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 md:py-28 bg-secondary">
          <div className="container">
              <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Go from Data to Decision, Faster Than Ever</h2>
                  <p className="mt-4 text-lg text-muted-foreground">We don't just build reports. We build the strategic assets you need to win in a competitive market.</p>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card>
                      <CardHeader>
                          <BarChart className="w-10 h-10 text-primary mb-4" />
                          <CardTitle>Custom Analytics</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground">Bespoke dashboards and KPI tools that give you clarity, not complexity. See the signals, not the noise.</p>
                      </CardContent>
                  </Card>
                  <Card>
                      <CardHeader>
                          <Cpu className="w-10 h-10 text-primary mb-4" />
                          <CardTitle>Automation & AI</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground">Streamline workflows and integrate AI to save time, minimize risk, and focus on strategy, not manual tasks.</p>
                      </CardContent>
                  </Card>
                   <Card>
                      <CardHeader>
                          <ShieldCheck className="w-10 h-10 text-primary mb-4" />
                          <CardTitle>Data Strategy & Governance</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground">Build a solid, secure, and scalable data foundation that supports trustworthy analytics and protects your assets.</p>
                      </CardContent>
                  </Card>
              </div>
          </div>
      </section>


      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What Our Clients Say</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our clients' success is our success. Here's what they have to say about our partnership.
            </p>
          </div>
          <Carousel className="mt-12" opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="flex flex-col h-full">
                      <CardContent className="p-6 flex-grow">
                        <p className="text-muted-foreground">"{testimonial.quote}"</p>
                      </CardContent>
                      <CardHeader className="flex-row items-center gap-4 pt-0">
                        <Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48} className="rounded-full" data-ai-hint="person avatar" />
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 md:py-28 bg-secondary">
          <div className="container">
              <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Proven Process for Success</h2>
                  <p className="mt-4 text-lg text-muted-foreground">We follow a structured, collaborative process to ensure we deliver solutions that meet your unique needs and drive tangible results.</p>
              </div>
              <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border hidden md:block"></div>
                 <div className="relative flex flex-col items-center text-center">
                    <div className="absolute -top-12 flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold border-4 border-secondary">1</div>
                    <h3 className="mt-8 text-xl font-semibold">Discovery & Strategy</h3>
                    <p className="mt-2 text-muted-foreground">We start by understanding your goals, challenges, and existing data landscape to define a clear roadmap.</p>
                </div>
                <div className="relative flex flex-col items-center text-center">
                    <div className="absolute -top-12 flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold border-4 border-secondary">2</div>
                    <h3 className="mt-8 text-xl font-semibold">Implementation & Build</h3>
                    <p className="mt-2 text-muted-foreground">Our team gets to work building your custom dashboards, automation tools, and data integrations.</p>
                </div>
                 <div className="relative flex flex-col items-center text-center">
                    <div className="absolute -top-12 flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold border-4 border-secondary">3</div>
                    <h3 className="mt-8 text-xl font-semibold">Analysis & Reporting</h3>
                    <p className="mt-2 text-muted-foreground">We deliver initial insights and train your team on how to use the new tools for maximum impact.</p>
                </div>
                 <div className="relative flex flex-col items-center text-center">
                    <div className="absolute -top-12 flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold border-4 border-secondary">4</div>
                    <h3 className="mt-8 text-xl font-semibold">Optimization & Growth</h3>
                    <p className="mt-2 text-muted-foreground">We continue to partner with you, refining solutions and uncovering new opportunities for growth.</p>
                </div>
              </div>
          </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have questions? We've got answers. Here are some of the most common things we get asked.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full mt-12">
            {faqItems.map((item, index) => (
                <AccordionItem value={`item-${index+1}`} key={index}>
                    <AccordionTrigger className="text-lg text-left">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                        {item.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to Transform Your Business with Data?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Let's talk about how we can help you achieve your goals. Schedule a free, no-obligation consultation with one of our data experts today.
              </p>
              <Link href="/about" className="mt-6 inline-flex items-center font-semibold text-primary">
                Learn more about our approach <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Schedule Your Free Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

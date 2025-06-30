import Link from "next/link";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ContactForm } from "@/components/contact-form";
import { LogoCloud } from "@/components/logo-cloud";
import { ArrowRight, BarChart, CheckCircle, Cpu, ShieldCheck, X } from "lucide-react";

const testimonials = [
  {
    quote: "Working with Sekel Insights transformed our approach to data. Their custom dashboards gave us clarity we never had before, directly impacting our strategic decisions and leading to a 25% increase in operational efficiency.",
    name: "Olivia Johnson",
    title: "CEO, Tech Innovators",
    avatar: "/images/image-11.webp"
  },
  {
    quote: "The team at Sekel Hive are true partners. They didn't just deliver a report; they helped us build a data-driven culture. Their training was invaluable for our team.",
    name: "Alex Johnson",
    title: "Head of Operations, Estate Solutions",
    avatar: "/images/image-15.jpg"
  },
  {
    quote: "Their automation solutions saved us countless hours of manual work. We can now focus on what truly matters growing our business. Highly recommended.",
    name: "Emily Roberts",
    title: "Founder, Urban E-commerce",
    avatar: "/images/image-16.jpg"
  },
  {
    quote: "Sekel's insights helped us uncover trends we had never noticed. Their team is responsive, knowledgeable, and deeply committed to helping clients succeed.",
    name: "Lena Moore",
    title: "COO, SmartBuild Systems",
    avatar: "/images/image-12.webp"
  },
  {
    quote: "We were drowning in data with no direction. Sekel Hive gave us the structure we needed to make real-time decisions that drove a 40% revenue increase.",
    name: "Carlos Mendes",
    title: "CMO, BrightPath Logistics",
    avatar: "/images/image-13.avif"
  },
  {
    quote: "What stood out was their attention to detail. From day one, Sekel Hive understood our industry and tailored every solution to fit us perfectly.",
    name: "David Lee",
    title: "Managing Director, Finovate Gulf",
    avatar: "/images/image-14.jpg"
  }
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

const processSteps = [
    {
      title: 'Discovery & Strategy',
      description: 'We start by understanding your goals, challenges, and existing data landscape to define a clear roadmap.',
    },
    {
      title: 'Implementation & Build',
      description: 'Our team gets to work building your custom dashboards, automation tools, and data integrations.',
    },
    {
      title: 'Analysis & Reporting',
      description: 'We deliver initial insights and train your team on how to use the new tools for maximum impact.',
    },
    {
      title: 'Optimization & Growth',
      description: 'We continue to partner with you, refining solutions and uncovering new opportunities for growth.',
    },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-secondary py-24 md:py-40 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-secondary to-accent/10"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.8" className="stroke-primary" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="flex justify-center">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full border border-border/20 mb-6 shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/80 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">The Old Way is Broken</span>
          </div>
        </div>

        {/* Floating animated circles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/20 blur-xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-accent/20 blur-xl animate-float-medium"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-foreground/10 blur-xl animate-float-fast"></div>
        </div>

        <div className="container relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
            Stop Drowning in Data<br />
            <span className="whitespace-nowrap">Start Driving Decisions</span>
          </h1>
          
          <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground font-medium">
            Outdated spreadsheets and generic reports are costing you time, money, and opportunities. Transform your data into actionable intelligence.
          </p>
          {/* Pain points - card grid design */}
          <div className="mt-16 grid gap-6 sm:grid-cols-3 max-w-5xl mx-auto">
            <div className="relative bg-background/80 backdrop-blur-sm p-6 rounded-xl border border-border/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-destructive flex items-center justify-center shadow-sm">
                <X className="h-5 w-5 text-destructive-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Error-Prone Processes</h3>
              <p className="text-muted-foreground">Manual data handling leads to costly mistakes and rework</p>
            </div>
            
            <div className="relative bg-background/80 backdrop-blur-sm p-6 rounded-xl border border-border/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-destructive flex items-center justify-center shadow-sm">
                <X className="h-5 w-5 text-destructive-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Delayed Insights</h3>
              <p className="text-muted-foreground">Static reports mean you're always looking at yesterday's data</p>
            </div>
            
            <div className="relative bg-background/80 backdrop-blur-sm p-6 rounded-xl border border-border/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-destructive flex items-center justify-center shadow-sm">
                <X className="h-5 w-5 text-destructive-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Guesswork Decisions</h3>
              <p className="text-muted-foreground">Lack of real-time analytics forces reliance on intuition</p>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="shadow-lg">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
            {/* <Button asChild variant="outline" size="lg">
              <Link href="/demo">
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Demo
              </Link>
            </Button> */}
          </div>
        </div>
      </section>

      {/* Pain Point Section */}
      <section className="py-20 md:py-28">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div>
                {/* <span className="text-sm font-semibold uppercase text-primary">The Old Way is Broken</span> */}
                <h2 className="text-3xl md:text-4xl font-bold mt-2 tracking-tight">
                  Unlock Actionable Insights, Drive Unprecedented Growth
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  We transform your complex data into clear, strategic actions. Stop guessing and start making decisions that accelerate your revenue and outpace the competition.
                </p>
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

      <div className="mx-5">
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center bg-gray-100 p-10 rounded-xl">
              <p className="text-4xl font-bold text-primary">5+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          <div className="text-center bg-gray-100 p-10 rounded-xl">
              <p className="text-4xl font-bold text-primary">12+</p>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
          </div>
          <div className="text-center bg-gray-100 p-10 rounded-xl">
              <p className="text-4xl font-bold text-primary">98%</p>
              <p className="text-sm text-muted-foreground">Client Satisfaction</p>
          </div>
          <div className="text-center bg-gray-100 p-10 rounded-xl">
              <p className="text-4xl font-bold text-primary">30%</p>
              <p className="text-sm text-muted-foreground">Avg. Efficiency Gain</p>
          </div>
        </div>
      </div>
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


      {/* Testimonials */}
      <section className="py-20 md:py-28 relative">
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
            <CarouselPrevious className="absolute -left-4" />
            <CarouselNext className="absolute -right-4" />
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
          <div className="mt-24 relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 w-3/4 mx-auto h-0.5 bg-border -z-0" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-y-16 md:gap-x-8 relative">
              {processSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold border-8 border-secondary">
                    {index + 1}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
              ))}
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

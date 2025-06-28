import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { CheckCircle, BarChart, Cpu, Database, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our comprehensive data services, including custom analytics, automation, AI integration, data strategy, and employee training.',
};

const serviceTiers = [
    { name: "Tier 1", description: "Short-term reporting support for new or optimized dashboards.", engagement: "Minimum 6-month engagement", price: "Starting at £5,000/month" },
    { name: "Tier 2", description: "Ongoing support for routine and recurring reports.", engagement: "Minimum 12-month engagement", price: "Starting at £7,500/month" },
    { name: "Custom Engagements", description: "Perfect for organizations with evolving or undefined reporting needs.", engagement: "Flexible terms", price: "Starting at £10,000/month" },
]

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
            Intelligent Solutions for Your Business Needs
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            From custom analytics and AI-powered automation to data strategy and team training, we provide end-to-end solutions to help you leverage data as a strategic asset.
          </p>
        </div>
      </section>

      {/* Analytics + Automation */}
      <section id="analytics" className="py-20 md:py-28 scroll-mt-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold uppercase text-primary">Analytics + Automation</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 tracking-tight">Tailored Intelligence, Delivered</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                In a fast-moving market, making decisions based on outdated data puts you at a disadvantage. We close the gap between leadership and IT by delivering actionable analytics and AI solutions that drive performance.
              </p>
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold flex items-center gap-2"><BarChart className="w-6 h-6 text-primary"/>Custom Analytics</h3>
                  <p className="mt-2 text-muted-foreground">Bespoke dashboards, reports, and KPI tools using PowerBI, Tableau, or Excel—designed for clarity, not complexity.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold flex items-center gap-2"><Cpu className="w-6 h-6 text-primary"/>Automation + AI</h3>
                  <p className="mt-2 text-muted-foreground">Streamline data workflows, automate routine processes, and integrate AI for smarter decision-making.</p>
                </div>
                 <div>
                  <h3 className="text-xl font-semibold flex items-center gap-2"><Briefcase className="w-6 h-6 text-primary"/>Analytics as a Service</h3>
                  <p className="mt-2 text-muted-foreground">We go beyond off-the-shelf tools to build predictive models and deliver prescriptive analytics that tell you what to do next.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
                {serviceTiers.map(tier => (
                    <Card key={tier.name}>
                        <CardHeader>
                            <CardTitle>{tier.name}</CardTitle>
                            <CardDescription>{tier.description}</CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-between items-center bg-secondary p-4 rounded-b-lg">
                           <p className="text-sm text-muted-foreground">{tier.engagement}</p>
                           <p className="font-semibold">{tier.price}</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Strategy */}
       <section id="data-strategy" className="py-20 md:py-28 bg-secondary scroll-mt-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Strong Analytics Start with Strong Data</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Poor data quality leads to poor decisions. We help you build the right infrastructure to support scalable, accurate, and trustworthy analytics.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Database className="w-10 h-10 text-primary mx-auto mb-4"/>
                <CardTitle>Data Integrations</CardTitle>
              </CardHeader>
              <CardContent><p className="text-muted-foreground">Break down silos and unify your systems for seamless, secure data flow across platforms.</p></CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="w-10 h-10 text-primary mx-auto mb-4"/>
                <CardTitle>Data Governance</CardTitle>
              </CardHeader>
              <CardContent><p className="text-muted-foreground">Develop and implement governance frameworks that support compliance, trust, and strong internal SOPs.</p></CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                 <BarChart className="w-10 h-10 text-primary mx-auto mb-4"/>
                <CardTitle>Data Architecture</CardTitle>
              </CardHeader>
              <CardContent><p className="text-muted-foreground">Optimize your cloud, on-prem, or hybrid infrastructure to support better analytics and tool performance.</p></CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proprietary Solutions */}
      <section id="proprietary" className="py-20 md:py-28 scroll-mt-20">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold uppercase text-primary">Proprietary Solutions</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 tracking-tight">A Business Asset or a Hidden Liability?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Custom-built tools can fuel growth—or drain resources. We offer commercialization strategies that ensure your technology is viable, valuable, and built to last.
              </p>
               <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">Go-To-Market Strategy</h3>
                  <p className="mt-2 text-muted-foreground">Turn your internal tools into commercial successes with a clear roadmap from concept to launch.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Market Benchmarking</h3>
                  <p className="mt-2 text-muted-foreground">We assess your in-house software against market alternatives to evaluate sustainability and value.</p>
                </div>
              </div>
            </div>
            <div className="bg-secondary p-8 rounded-lg">
                <h3 className="text-2xl font-bold">Is Your Custom Tool Market-Ready?</h3>
                <p className="mt-4 text-muted-foreground">Let us help you unlock the full commercial potential of your internal software solutions. From valuation to launch strategy, we provide the expertise you need.</p>
                <Button asChild className="mt-6">
                    <Link href="/contact">Book an Assessment</Link>
                </Button>
            </div>
        </div>
      </section>

      {/* Training */}
      <section id="training" className="py-20 md:py-28 bg-secondary scroll-mt-20">
        <div className="container text-center">
            <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4"/>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Empowering Teams Through Data Literacy</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Great tools are only effective if your team knows how to use them. We offer tailored training for frontline employees and senior stakeholders to ensure everyone can interpret, apply, and trust data in their decision-making.
            </p>
            <Button asChild size="lg" className="mt-8">
                <Link href="/contact">
                    Request Training Info
                    <ArrowRight className="ml-2 w-4 h-4"/>
                </Link>
            </Button>
        </div>
      </section>
    </>
  );
}

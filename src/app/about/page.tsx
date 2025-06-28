import type { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Award, Target, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Sekel Hive LTD, our mission, and our commitment to helping businesses grow through data-driven insights. More than consultants true partners in your growth.',
};

export default function AboutPage() {
  return (
    <>
      <section className="py-20 md:py-32 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
            More than consultants true partners in your growth.
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
            We are a team of data experts passionate about turning complex information into strategic assets that drive real business value.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/founder.png"
              alt="Founder Ifeoluwa S. Faleye"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              data-ai-hint="professional person"
            />
          </div>
          <div>
            <span className="text-sm font-semibold uppercase text-primary">Our Founder's Vision</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 tracking-tight">From a Career of Solving Complex Challenges</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              With a career spent solving complex business challenges alongside senior executives, I’ve seen firsthand the impact data can have when it’s leveraged strategically. Too often, I encountered analytics that were static, outdated, or lacked the depth needed to drive real decisions.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              That’s why I launched this practice: to deliver real-time, actionable insights tailored for today’s decision-makers. By combining advanced analytics with emerging technologies like AI, machine learning, and predictive modeling, we help organizations not just understand their data but use it to shape their future.
            </p>
             <p className="mt-6 font-semibold text-lg">
              Cheers,
              <br />
              Ifeoluwa S. Faleye
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-28 bg-secondary">
          <div className="container">
              <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Core Values</h2>
                  <p className="mt-4 text-lg text-muted-foreground">These principles guide every decision we make and every solution we deliver.</p>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center p-6">
                      <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold">Client Success</h3>
                      <p className="mt-2 text-muted-foreground">Your success is our ultimate metric. We are committed to delivering tangible results that help you achieve your goals.</p>
                  </div>
                   <div className="text-center p-6">
                      <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold">Integrity & Trust</h3>
                      <p className="mt-2 text-muted-foreground">We handle your data with the utmost care and operate with transparency to build lasting, trust-based partnerships.</p>
                  </div>
                   <div className="text-center p-6">
                      <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold">Collaborative Partnership</h3>
                      <p className="mt-2 text-muted-foreground">We work as an extension of your team, fostering collaboration to ensure our solutions are perfectly aligned with your needs.</p>
                  </div>
              </div>
          </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
           <div>
            <span className="text-sm font-semibold uppercase text-primary">Who We Serve</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 tracking-tight">Built in Kent. Rooted in Community.</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We support a diverse range of clients from agile startups to established enterprises across industries like professional services, education, real estate, and beyond.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Headquartered in Kent, South East England, we’re proud to represent a region that values innovation, resilience, and strong community ties. We’re especially passionate about partnering with local businesses that share our commitment to growth and sustainability. Our clients’ success is our success.
            </p>
            <Button asChild size="lg" className="mt-8">
                <Link href="/contact">Partner With Us</Link>
            </Button>
          </div>
           <div>
            <Image
              src="/images/location.jpg"
              alt="Map of Kent, South East England"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              data-ai-hint="map england"
            />
          </div>
        </div>
      </section>
    </>
  );
}

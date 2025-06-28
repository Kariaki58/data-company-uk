import Link from "next/link";
import { BarChart2, Linkedin, Twitter, Mail, Phone, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";


export function AppFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              {/* <BarChart2 className="h-6 w-6 text-primary" /> */}
              <img src="/data-log.svg" alt="logo" className="h-20 w-30"/>
              {/* <span className="font-bold font-headline inline-block">Sekel Insights</span> */}
            </Link>
            {/* <Link href="/" className="flex items-center space-x-2 mb-4">
              <BarChart2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline">Sekel Insights</span>
            </Link> */}
            <p className="text-sm text-muted-foreground">
              Actionable insights for data-driven growth.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="https://x.com/dataevangelistx?s=21&t=tSsLPG5Rp4Gy0aVa3-HCIg" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/ifeoluwa-faleye-32bb41134?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/the_dataevangelist?igsh=cTZnencxbGluODln&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.tiktok.com/@dataevangelist" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-muted-foreground hover:text-primary transition-colors">
                <FaTiktok />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-3">
            <div>
              <h3 className="font-semibold mb-4 font-headline">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services#analytics" className="text-muted-foreground hover:text-primary transition-colors">Analytics & Automation</Link></li>
                <li><Link href="/services#data-strategy" className="text-muted-foreground hover:text-primary transition-colors">Data Strategy</Link></li>
                <li><Link href="/services#proprietary" className="text-muted-foreground hover:text-primary transition-colors">Proprietary Solutions</Link></li>
                <li><Link href="/services#training" className="text-muted-foreground hover:text-primary transition-colors">Training</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 font-headline">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 font-headline">Get in Touch</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 shrink-0" />
                  <a href="mailto:contact@sekelinsights.com" className="hover:text-primary transition-colors">contact@sekelinsights.com</a>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>+44 123 456 7890</span>
                </li>
                 <li className="flex items-start space-x-2">
                  <span className="w-4 h-4 shrink-0"></span>
                  <span>Kent, South East England</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sekel Hive LTD. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
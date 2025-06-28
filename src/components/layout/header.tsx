"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, BarChart2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function AppHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <BarChart2 className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline inline-block">Sekel Insights</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Book a Call</Link>
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col h-full py-6">
                <Link href="/" className="mb-8 flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <BarChart2 className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline">Sekel Insights</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary",
                        pathname === item.href ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild className="mt-auto">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Book a Call</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";
import { Facebook, Instagram, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "../ui/button";

const socialLinks = [
  { href: "#", icon: X },
  { href: "#", icon: Facebook },
  { href: "#", icon: Instagram },
];

const footerLinks = [
  { title: "Quick Links", links: [
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ]},
  { title: "Legal", links: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
  ]},
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo isFooter />
            <p className="mt-4 text-sm text-foreground/70">
              Morningstar Media – Rise. Shine. Influence.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((item, index) => (
                <Link key={index} href={item.href} className="text-foreground/70 hover:text-accent transition-colors">
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.icon.displayName}</span>
                </Link>
              ))}
            </div>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title} className="md:col-span-2">
              <h3 className="font-headline font-semibold text-foreground">{section.title}</h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-foreground/70 hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="md:col-span-4">
            <h3 className="font-headline font-semibold text-foreground">Subscribe to our newsletter</h3>
            <p className="mt-2 text-sm text-foreground/70">Get the latest news and updates from our universe.</p>
            <form className="mt-4 flex gap-2">
              <input type="email" placeholder="Enter your email" className="flex-grow bg-input px-3 py-2 rounded-md text-sm focus:ring-2 focus:ring-accent focus:outline-none"/>
              <Button type="submit" variant="outline">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} StellarBrand. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

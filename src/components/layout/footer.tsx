
import Link from "next/link";
import { X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "../ui/button";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 48 48"
      {...props}
      aria-label="Instagram"
    >
    <radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fd5"/><stop offset=".328" stopColor="#ff543f"/><stop offset=".348" stopColor="#fc5245"/><stop offset=".504" stopColor="#e64771"/><stop offset=".643" stopColor="#d53e91"/><stop offset=".761" stopColor="#cc39a4"/><stop offset=".841" stopColor="#c837ab"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4168c9"/><stop offset=".999" stopColor="#4168c9" stopOpacity="0"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><path fill="#fff" d="M24,31c-3.859,0-7-3.141-7-7s3.141-7,7-7s7,3.141,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"/><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"/><path fill="#fff" d="M30,37H18c-3.859,0-7-3.141-7-7V18c0-3.859,3.141-7,7-7h12c3.859,0,7,3.141,7,7v12	C37,33.859,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"/></svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 48 48"
      {...props}
      aria-label="Facebook"
    >
      <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"/>
      <path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.582-0.078-2.553-0.246-4.893-0.246c-5.756,0-9.437,3.506-9.437,9.12v3.121h-4.74v4.995h4.74v11.954h6.052V29.036z"/>
    </svg>
);

const socialLinks = [
  { href: "#", icon: X, name: "X (formerly Twitter)" },
  { href: "#", icon: FacebookIcon, name: "Facebook" },
  { href: "#", icon: InstagramIcon, name: "Instagram" },
];

const footerLinks = [
  { title: "Company", links: [
    { href: "/#about", label: "About Us" },
    { href: "/#services", label: "Services" },
    { href: "/#portfolio", label: "Our Work" },
    { href: "/#blog", label: "Blog" },
    { href: "/#contact", label: "Contact Us" },
  ]},
  { title: "Legal", links: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
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
              Elevating brands to cosmic heights with data-driven marketing strategies.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((item, index) => (
                <Link key={index} href={item.href} className="text-foreground/70 hover:text-accent transition-colors">
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.name}</span>
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
            <h3 className="font-headline font-semibold text-foreground">Subscribe to Our Newsletter</h3>
            <p className="mt-2 text-sm text-foreground/70">Get the latest insights and trends from our universe, delivered to your inbox.</p>
            <form className="mt-4 flex gap-2">
              <input type="email" placeholder="Enter your email" className="flex-grow bg-input px-3 py-2 rounded-md text-sm focus:ring-2 focus:ring-accent focus:outline-none"/>
              <Button type="submit" variant="outline">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} AdsVerse. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

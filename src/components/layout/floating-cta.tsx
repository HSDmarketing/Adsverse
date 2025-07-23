
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MessagesSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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


export function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // This runs only on the client, after hydration, to avoid mismatch errors.
    const checkScroll = () => {
       if (window.pageYOffset > 200) { // Show after scrolling down a bit
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    // Run it once to set initial state
    checkScroll();

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50 transition-all duration-300",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
      )}
    >
      <div className="flex items-center gap-2 p-2 bg-card border border-border rounded-full shadow-lg">
        <Button asChild size="icon" variant="ghost" className="rounded-full hover:bg-green-500/20">
            <a href="https://wa.me/919977646156" target="_blank" rel="noopener noreferrer">
                <MessagesSquare className="h-5 w-5 text-green-500" />
                <span className="sr-only">WhatsApp</span>
            </a>
        </Button>
        <Button asChild size="icon" variant="ghost" className="rounded-full hover:bg-transparent p-0">
            <a href="#" target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="h-7 w-7" />
                <span className="sr-only">Instagram</span>
            </a>
        </Button>
        <Button asChild size="icon" variant="ghost" className="rounded-full hover:bg-transparent p-0">
            <a href="#" target="_blank" rel="noopener noreferrer">
                <FacebookIcon className="h-7 w-7" />
                <span className="sr-only">Facebook</span>
            </a>
        </Button>
        <Button asChild className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground text-xs sm:text-sm h-8 sm:h-auto px-3 sm:px-4">
            <Link href="/#contact">Book Consultation</Link>
        </Button>
      </div>
    </div>
  );
}

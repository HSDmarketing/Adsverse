"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Facebook, Instagram, MessagesSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show CTA when scrolled down 100px
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50 transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="flex items-center gap-2 p-2 bg-card border border-border rounded-full shadow-lg">
        <Button asChild size="icon" variant="ghost" className="rounded-full hover:bg-accent/20">
            <Link href="#">
                <MessagesSquare className="h-5 w-5 text-accent" />
                <span className="sr-only">WhatsApp</span>
            </Link>
        </Button>
        <Button asChild size="icon" variant="ghost" className="rounded-full hover:bg-accent/20">
            <Link href="#">
                <Instagram className="h-5 w-5 text-accent" />
                <span className="sr-only">Instagram</span>
            </Link>
        </Button>
        <Button asChild size="icon" variant="ghost" className="rounded-full hover:bg-accent/20">
            <Link href="#">
                <Facebook className="h-5 w-5 text-accent" />
                <span className="sr-only">Facebook</span>
            </Link>
        </Button>
        <Button asChild className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#contact">Book Consultation</Link>
        </Button>
      </div>
    </div>
  );
}

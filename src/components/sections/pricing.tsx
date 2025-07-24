"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const plans = [
  {
    name: "Launchpad",
    price: "299",
    description: "For new ventures ready to establish a strong digital foundation and make their mark.",
    features: [
      "Brand Strategy Session",
      "Social Media Setup & 1 Month Management",
      "5-Page Website Design",
      "Basic SEO Setup",
      "Monthly Reporting",
    ],
    isPopular: false,
  },
  {
    name: "Orbit",
    price: "399",
    description: "The perfect package for growing businesses aiming for a higher trajectory and consistent growth.",
    features: [
      "Everything in Launchpad, plus:",
      "Ongoing Social Media Management",
      "SEO & Content Creation (2 Articles/Mo)",
      "Performance Marketing (1 Platform)",
      "Bi-weekly Strategy Calls",
    ],
    isPopular: true,
  },
  {
    name: "Galaxy",
    price: "999",
    description: "For established brands ready to dominate their industry and achieve market leadership.",
    features: [
      "Everything in Orbit, plus:",
      "Advanced Performance Marketing (Multi-platform)",
      "Full Funnel Building & Automation",
      "Influencer Marketing Campaign",
      "Dedicated Account Manager",
    ],
    isPopular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-background/70">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Pricing That Fits Your Trajectory</h2>
          <p className="mt-4 text-foreground/80">
            Choose your launchpad. Transparent package pricing for stellar results, with custom plans available.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
              <Card key={plan.name} className={cn(
                "flex flex-col h-full transition-all duration-300",
                plan.isPopular ? "border-accent shadow-accent/20 shadow-lg -translate-y-4" : "border-border"
              )}>
                {plan.isPopular && (
                  <div className="bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider text-center py-1 rounded-t-lg">Most Popular</div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div>
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-foreground/70">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
                        <span className="text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className={cn("w-full", plan.isPopular ? "bg-accent hover:bg-accent/90 text-accent-foreground" : "bg-primary")}>
                    <Link href="/#contact">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
          ))}
        </div>
        <div className="text-center mt-16">
            <p className="text-foreground/80">Looking for individual services?</p>
            <Button asChild variant="outline" className="mt-4">
              <Link href="/pricing">
                View A La Carte Pricing <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}

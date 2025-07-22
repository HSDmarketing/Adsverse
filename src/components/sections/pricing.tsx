
"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation } from "@/hooks/use-location";

const plans = [
  {
    name: "Starter",
    price: {
        inr: "49,999",
        usd: "599"
    },
    description: "For new ventures ready to make their mark in the digital cosmos.",
    features: [
      "Brand Strategy Session",
      "Social Media Setup",
      "Basic Website Audit",
      "Monthly Reporting",
    ],
    isPopular: false,
  },
  {
    name: "Growth",
    price: {
        inr: "1,24,999",
        usd: "1,499"
    },
    description: "The perfect package for growing businesses aiming for higher orbits.",
    features: [
      "Everything in Starter, plus:",
      "Full Social Media Management",
      "SEO & Content Creation",
      "Performance Marketing (1 Platform)",
      "Bi-weekly Strategy Calls",
    ],
    isPopular: true,
  },
  {
    name: "Dominator",
    price: {
        inr: "2,49,999",
        usd: "2,999"
    },
    description: "For established brands ready to dominate their industry's universe.",
    features: [
      "Everything in Growth, plus:",
      "Advanced Performance Marketing",
      "Full Website Redesign/Management",
      "Influencer Marketing Campaign",
      "Dedicated Account Manager",
    ],
    isPopular: false,
  },
];

export function Pricing() {
  const { country, isLoading } = useLocation();

  const getPrice = (price: { inr: string; usd: string }) => {
    if (isLoading) {
      return { amount: '...', currency: '' };
    }
    if (country === 'IN') {
      return { amount: price.inr, currency: '₹' };
    }
    return { amount: price.usd, currency: '$' };
  };

  return (
    <section id="pricing" className="py-20 md:py-32 bg-background/70">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Pricing That Fits Your Trajectory</h2>
          <p className="mt-4 text-foreground/80">
            Choose your launchpad. Transparent pricing for stellar results.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => {
            const { amount, currency } = getPrice(plan.price);
            return (
              <Card key={plan.name} className={cn(
                "flex flex-col h-full",
                plan.isPopular ? "border-accent shadow-accent/20 shadow-lg -translate-y-4" : "border-border"
              )}>
                {plan.isPopular && (
                  <div className="bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider text-center py-1 rounded-t-lg">Most Popular</div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div>
                    <span className="text-4xl font-bold">{currency}{amount}</span>
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
                  <Button className={cn("w-full", plan.isPopular ? "bg-accent hover:bg-accent/90 text-accent-foreground" : "bg-primary")}>
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}

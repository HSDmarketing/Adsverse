
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

type LogoProps = {
  className?: string;
  isFooter?: boolean;
};

export function Logo({ className, isFooter = false }: LogoProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 font-headline font-bold",
        isFooter ? "text-2xl" : "text-xl",
        className
      )}
    >
      <Sparkles className="text-accent h-6 w-6" />
      <span>StellarBrand</span>
    </div>
  );
}

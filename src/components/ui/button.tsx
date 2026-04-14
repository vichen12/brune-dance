import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-lato font-bold tracking-widest uppercase transition-all duration-250 cursor-pointer disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary:  "bg-primary text-white text-xs hover:bg-primary-light hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(200,56,77,.38)]",
        outline:  "border-2 border-primary text-primary text-xs hover:bg-primary hover:text-white hover:-translate-y-0.5",
        ghost:    "text-primary text-xs hover:bg-primary/10",
        whatsapp: "bg-[#25D366] text-white text-xs hover:bg-[#1ebe58] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(37,211,102,.38)]",
      },
      size: {
        sm:   "h-9 px-5 text-[0.68rem]",
        md:   "h-11 px-7 text-xs",
        lg:   "h-12 px-9 text-xs",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
export { Button, buttonVariants };

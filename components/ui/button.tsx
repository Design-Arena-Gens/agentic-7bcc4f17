import { cva, type VariantProps } from "class-variance-authority";
import clsx from "classnames";
import { forwardRef } from "react";

const buttonVariants = cva(
  "btn",
  {
    variants: {
      variant: {
        primary: "btn-primary",
        secondary: "btn-secondary",
        outline: "bg-transparent border border-border hover:bg-muted",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4",
        lg: "h-12 px-6 text-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ className, variant, size, ...props }, ref) {
  return (
    <button ref={ref} className={clsx(buttonVariants({ variant, size }), className)} {...props} />
  );
});

export default Button;

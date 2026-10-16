import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Button = (
  props: {
    variant?: "primary" | "secondary";
    iconAfter?: ReactNode;
    className?: string;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { className, children, variant = "primary", iconAfter, ...rest } = props;
  return (
    <button
      className={twMerge(
        "h-11 px-5 rounded-none font-mono text-xs uppercase tracking-wider font-semibold inline-flex items-center gap-2 transition-all duration-200 relative group/button",
        variant === "primary" &&
          "bg-primary text-white border border-primary hover:bg-primary/90",
        variant === "secondary" &&
          "text-stone-600 dark:text-stone-400 border-transparent hover:text-stone-900 dark:hover:text-white hover:tracking-wider after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full",
        className
      )}
      {...rest}
    >
      <span>{children}</span>
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  );
};

export default Button;
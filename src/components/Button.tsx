import { cn } from "@/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "def" | "alt";
  isLoading?: boolean;
}

export const Button = ({
  variant = "def",
  isLoading,
  type = "button",
  disabled,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={cn(
        "flex h-8 w-max items-center justify-center gap-2 rounded-2xl px-3 text-sm",
        "sm:h-10 sm:text-base",
        "transition duration-300 outline-none [&>svg]:size-5",
        "focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        {
          [cn(
            "bg-neutral-900 text-neutral-50",
            "hover:bg-neutral-800",
            "active:bg-neutral-700",
          )]: variant === "def",
          [cn(
            "bg-neutral-50",
            "hover:bg-neutral-100",
            "active:bg-neutral-200",
          )]: variant === "alt",
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

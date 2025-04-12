import { cn } from "@/utils/cn";

import { Spinner } from "@/components/Status";

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
        "flex h-10 w-fit items-center justify-center gap-2 rounded-lg px-3",
        "transition duration-300 outline-none [&>svg]:size-4",
        "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-70",
        {
          [cn(
            "bg-neutral-900 text-neutral-50",
            "hover:bg-neutral-700",
            "active:bg-neutral-600",
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
      {isLoading && <Spinner />}
      {children}
    </button>
  );
};

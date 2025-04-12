import { cn } from "@/utils/cn";

export const Input = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className={cn(
        "w-full rounded-lg border border-neutral-300 px-2.5 py-2 text-neutral-900 transition outline-none",
        "hover:border-neutral-400",
        "focus:ring focus:ring-blue-500",
        className,
      )}
    />
  );
};

export const Textarea = ({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      {...props}
      className={cn(
        "w-full rounded-lg border border-neutral-300 px-2.5 py-2 text-neutral-900 transition outline-none",
        "hover:border-neutral-400",
        "focus:ring focus:ring-blue-500",
        className,
      )}
    />
  );
};

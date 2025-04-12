import { cn } from "@/utils/cn";

interface CarouselDotProps {
  arialLabel: string;
  isSelected: boolean;
  onClick: () => void;
}

export const CarouselDot = ({
  arialLabel,
  isSelected,
  onClick,
}: CarouselDotProps) => {
  return (
    <button
      type="button"
      aria-label={arialLabel}
      onClick={onClick}
      className={cn(
        "size-4 rounded-full border border-neutral-600 outline-hidden transition",
        "focus:ring-2 focus:ring-blue-500",
        { "bg-neutral-900": isSelected, "hover:bg-neutral-600": !isSelected },
      )}
    />
  );
};

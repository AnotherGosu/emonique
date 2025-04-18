import { Button } from "@/components/Button";

interface CarosuleButtonProps {
  icon: React.ReactNode;
  ariaLabel: string;
  isDisabled: boolean;
  onClick: () => void;
}

export const CarouselButton = ({
  icon,
  ariaLabel,
  isDisabled,
  onClick,
}: CarosuleButtonProps) => {
  return (
    <Button
      aria-label={ariaLabel}
      disabled={isDisabled}
      onClick={onClick}
      className="!size-7 rounded-full p-0"
    >
      {icon}
    </Button>
  );
};

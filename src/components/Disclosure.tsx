import {
  Disclosure as HeadlessDisclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/utils/cn";

interface DisclosureProps {
  buttonContent: React.ReactNode;
  panelContent: React.ReactNode;
  className?: string;
}

export const Disclosure = ({
  buttonContent,
  panelContent,
  className,
}: DisclosureProps) => {
  return (
    <HeadlessDisclosure>
      <DisclosureButton
        className={cn(
          "group flex justify-between rounded-xs bg-neutral-100 p-2 text-left transition",
          "hover:bg-neutral-200",
          className,
        )}
      >
        {buttonContent}
        <ChevronDownIcon className="size-5 group-data-[open]:rotate-180" />
      </DisclosureButton>

      <DisclosurePanel className="p-4">{panelContent}</DisclosurePanel>
    </HeadlessDisclosure>
  );
};

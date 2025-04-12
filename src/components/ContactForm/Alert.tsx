import {
  CloseButton,
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import { PropsWithDict } from "@/types/common";

import { cn } from "@/utils/cn";

import { Button } from "@/components/Button";
import { Heading, Paragraph } from "@/components/Typography";

interface AlertProps extends PropsWithDict {
  isOpen: boolean;
  onClose: () => void;
  status: "success" | "error";
}

export const Alert = ({ isOpen, onClose, status, dict }: AlertProps) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      transition
      className={cn(
        "fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4",
        "transition duration-300 ease-out outline-none",
        "data-[closed]:opacity-0",
      )}
    >
      <DialogPanel
        transition
        className="max-w-lg rounded-xs bg-gray-50 p-10"
      >
        <DialogTitle
          as={Heading}
          className="mb-6"
        >
          {status === "success"
            ? dict["headings"]["message_sent"]
            : dict["headings"]["something_went_wrong"]}
        </DialogTitle>

        <Description
          as={Paragraph}
          className="mb-8"
        >
          {status === "success"
            ? dict["contact"]["success"]
            : dict["contact"]["error"]}
        </Description>

        <CloseButton as={Button}>{dict["buttons"]["close"]}</CloseButton>
      </DialogPanel>
    </Dialog>
  );
};

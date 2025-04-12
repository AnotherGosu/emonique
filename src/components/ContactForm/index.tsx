"use client";

import { useState } from "react";

import { PropsWithDict } from "@/types/common";

import { sendEmail } from "@/api/sendEmail";

import { useDialog } from "@/hooks/useDialog";

import { Alert } from "./Alert";
import { FormFields } from "./FormFields";
import { GoogleHint } from "./GoogleHint";
import { SubmitButton } from "./SubmitButton";

interface ContactFormProps extends PropsWithDict {
  context?: { artworkSlug?: string; artistSlug?: string };
}

export const ContactForm = ({ dict, context }: ContactFormProps) => {
  const { onSubmit, status, isOpen, onClose } = useContactForm({ context });

  return (
    <form
      action={onSubmit}
      className="@container flex flex-col gap-4"
    >
      <FormFields dict={dict} />

      <div className="flex items-center gap-4">
        <SubmitButton dict={dict} />

        <GoogleHint dict={dict} />
      </div>

      <Alert
        isOpen={isOpen}
        onClose={onClose}
        status={status}
        dict={dict}
      />
    </form>
  );
};

const useContactForm = ({ context }: Pick<ContactFormProps, "context">) => {
  const { isOpen, onOpen, onClose } = useDialog();
  const [status, setStatus] = useState<"success" | "error">("success");

  const onSubmit = async (formData: FormData) => {
    try {
      grecaptcha.ready(function () {
        grecaptcha
          .execute(process.env.NEXT_PUBLIC_RECAPTCHA_KEY!, { action: "submit" })
          .then(async (token) => {
            return sendEmail({ formData, context, token });
          });
      });
    } catch {
      setStatus("error");
    } finally {
      onOpen();
    }
  };

  return { onSubmit, status, isOpen, onOpen, onClose };
};

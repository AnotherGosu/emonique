"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";

import { Locale } from "@/types/common";

import { ButtonLink } from "@/components/ButtonLink";
import { Heading, Section } from "@/components/Typography";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const { locale } = useParams<{ locale: Locale }>();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section className="flex h-svh flex-col items-center justify-center gap-8 text-center">
      <Heading level="h1">Error</Heading>

      <p>Oops! Something went abstract. Try refreshing or take a step back!</p>

      <ButtonLink href={`/${locale}`}>Home</ButtonLink>
    </Section>
  );
}

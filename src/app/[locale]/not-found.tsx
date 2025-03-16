"use client";

import { useParams } from "next/navigation";

import { Locale } from "@/types/common";

import { ButtonLink } from "@/components/ButtonLink";
import { Heading, Section } from "@/components/Typography";

export default function NotFound() {
  const { locale } = useParams<{ locale: Locale }>();

  return (
    <Section className="flex h-svh flex-col items-center justify-center gap-8 text-center">
      <Heading level="h1">Not Found</Heading>

      <p>Oops! This artwork must have been sold… or maybe it never existed!</p>

      <ButtonLink href={`/${locale}`}>Home</ButtonLink>
    </Section>
  );
}

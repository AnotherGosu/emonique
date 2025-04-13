import { Metadata } from "next";

import { Locale } from "@/types/common";

import { getDictionary } from "@/utils/i18";

import { Markup } from "@/components/Markup";

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { locale } = await props.params;

  const dict = await getDictionary(locale);

  return {
    title: dict["headings"]["terms_of_service"],
    description: dict["meta"]["terms_of_service"],
  };
}

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function Page(props: PageProps) {
  const { locale } = await props.params;

  const dict = await getDictionary(locale);

  const sections = dict["terms_of_service"];

  return (
    <>
      {sections.map((section, idx) => (
        <Markup
          key={idx}
          idx={String(idx)}
          {...section}
        />
      ))}
    </>
  );
}

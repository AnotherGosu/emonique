import { Metadata } from "next";

import { Locale } from "@/types/common";

import { getDictionary } from "@/utils/i18";

import { HeroSection } from "@/components/HeroSection";

import { FAQ } from "./_components/FAQ";
import { Info } from "./_components/Info";

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { locale } = await props.params;

  const dict = await getDictionary(locale);

  return {
    title: dict["headings"]["for_collectors"],
    description: dict["meta"]["for_collectors"],
  };
}

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function Page(props: PageProps) {
  const { locale } = await props.params;

  const dict = await getDictionary(locale);

  return (
    <>
      <HeroSection heading={dict["headings"]["for_collectors"]} />

      <div className="my-20 flex flex-col gap-20">
        <Info dict={dict} />
        <FAQ dict={dict} />
      </div>
    </>
  );
}

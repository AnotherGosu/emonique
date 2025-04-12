import { Metadata } from "next";

import { Locale } from "@/types/common";

import { getDictionary } from "@/utils/i18";

import { HeroSection } from "@/components/HeroSection";

import { Clients } from "./_components/Clients";
import { Contact } from "./_components/Contact";
import { Info } from "./_components/Info";

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { locale } = await props.params;

  const dict = await getDictionary(locale);

  return {
    title: dict["headings"]["about_us"],
    description: dict["meta"]["about"],
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
      <HeroSection heading={dict["headings"]["about_us"]} />

      <div className="my-20 flex flex-col gap-20">
        <Info dict={dict} />
        <Clients dict={dict} />
        <Contact dict={dict} />
      </div>
    </>
  );
}

import { Metadata } from "next";

import { Locale } from "@/types/common";

import { getDictionary } from "@/utils/i18";

import { HeroSection } from "@/components/HeroSection";

import { Posts } from "./_components/Posts";

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { locale } = await props.params;

  const dict = await getDictionary(locale);

  return {
    title: dict["headings"]["blog"],
    description: dict["meta"]["blog"],
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
      <HeroSection heading={dict["headings"]["blog"]} />

      <div className="flex flex-col gap-20 py-20">
        <Posts />
      </div>
    </>
  );
}

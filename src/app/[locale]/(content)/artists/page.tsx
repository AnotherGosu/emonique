import { Locale } from "@/types/common";

import { HeroSection } from "@/components/HeroSection";

import { Artists } from "./_components/Artists";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function Page(props: PageProps) {
  const { locale } = await props.params;

  return (
    <>
      <HeroSection heading="Artists" />

      <div className="flex flex-col gap-20 py-20">
        <Artists />
      </div>
    </>
  );
}

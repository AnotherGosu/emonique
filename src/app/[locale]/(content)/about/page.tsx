import { Locale } from "@/types/common";

import { HeroSection } from "@/components/HeroSection";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function Page(props: PageProps) {
  const { locale } = await props.params;

  return (
    <>
      <HeroSection heading="About Us" />

      <div className="my-20 flex flex-col gap-20"></div>
    </>
  );
}

import { HeroSection } from "@/components/HeroSection";

import { Intro } from "./_components/Intro";
import { Service } from "./_components/Service";

export default function Page() {
  return (
    <>
      <HeroSection heading="For Artists" />

      <div className="flex flex-col gap-20 py-20">
        <Intro />
        <Service />
      </div>
    </>
  );
}

import { HeroSection } from "@/components/HeroSection";

import { Details } from "./_components/Details";
import { Intro } from "./_components/Intro";
import { Service } from "./_components/Service";

export default function Page() {
  return (
    <>
      <HeroSection heading="For Collectors" />

      <div className="flex flex-col gap-20 py-20">
        <Intro />
        <Service />
        <Details />
      </div>
    </>
  );
}

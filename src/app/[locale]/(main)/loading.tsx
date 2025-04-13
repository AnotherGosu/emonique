import { HeroSection } from "@/components/HeroSection";
import { Loader } from "@/components/Status";

export default function Loading() {
  return (
    <div className="grid h-full grid-rows-[max-content_1fr]">
      <HeroSection heading="Emonique" />

      <div className="flex items-center justify-center">
        <Loader />
      </div>
    </div>
  );
}

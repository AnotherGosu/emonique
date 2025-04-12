import { HeroSection } from "@/components/HeroSection";
import { Loader } from "@/components/Status";

export default function Loading() {
  return (
    <>
      <HeroSection heading="Emonique" />

      <div className="flex h-96 items-center justify-center">
        <Loader />
      </div>
    </>
  );
}

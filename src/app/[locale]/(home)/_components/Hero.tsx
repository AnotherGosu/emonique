import Image from "next/image";

import strokeImg from "@/images/stroke.png";

import { cn } from "@/utils/cn";

export const Hero = () => {
  return (
    <section className="relative flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-10">
        <h1
          className={cn(
            "text-center text-7xl text-neutral-50 mix-blend-difference",
            "md:text-9xl",
          )}
        >
          Emonique
        </h1>

        <div className="grid grid-cols-2 gap-10">
          <span className="text-right text-neutral-50">Every Artwork</span>
          <span className="text-neutral-900">Unique Emotion</span>
        </div>
      </div>

      <div className="absolute top-0 left-0 -z-10 h-full w-1/2 bg-neutral-900" />

      <Image
        src={strokeImg}
        alt=""
        priority
        width={320}
        height={320}
        className="absolute top-3/4 left-1/2 size-80 -translate-x-1/2 transform object-contain"
      />
    </section>
  );
};

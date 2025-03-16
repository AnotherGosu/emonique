"use client";

import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { CarouselDot } from "./CarouselDot";

interface CarouselProps {
  images: string[];
}

export const Carousel = ({ images }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { skipSnaps: true, align: "start" },
    [WheelGesturesPlugin()],
  );

  const {
    isPrevButtonDisabled,
    isNextButtonDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = useCarouselButtons(emblaApi);

  const { selectedIndex, scrollSnaps, onDotClick } = useCarouselDots(emblaApi);

  return (
    <div>
      <div
        ref={emblaRef}
        className="mb-4 overflow-hidden"
      >
        <div className="-ml-4 flex">
          {images.map((image) => (
            <div
              key={image}
              className="pointer-events-none min-w-0 flex-[0_0_100%] pl-4 select-none"
            >
              <Image
                src={image}
                width={400}
                height={400}
                alt=""
                priority
                className="h-96 w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        {scrollSnaps.map((_, idx) => (
          <CarouselDot
            key={idx}
            arialLabel={`Go to image ${idx + 1}`}
            isSelected={selectedIndex === idx}
            onClick={() => onDotClick(idx)}
          />
        ))}
      </div>
    </div>
  );
};

const useCarouselButtons = (emblaApi: EmblaCarouselType | undefined) => {
  const [isPrevButtonDisabled, setIsPrevButtonDisabled] = useState(true);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);

  const onPrevButtonClick = () => {
    emblaApi?.scrollPrev();
  };

  const onNextButtonClick = () => {
    emblaApi?.scrollNext();
  };

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setIsPrevButtonDisabled(!emblaApi.canScrollPrev());
    setIsNextButtonDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (emblaApi) {
      onSelect(emblaApi);

      emblaApi.on("reInit", onSelect).on("select", onSelect);
    }
  }, [emblaApi, onSelect]);

  return {
    isPrevButtonDisabled,
    isNextButtonDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

const useCarouselDots = (emblaApi: EmblaCarouselType | undefined) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotClick = (idx: number) => {
    emblaApi?.scrollTo(idx);
  };

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (emblaApi) {
      onInit(emblaApi);
      onSelect(emblaApi);

      emblaApi
        .on("reInit", onInit)
        .on("reInit", onSelect)
        .on("select", onSelect);
    }
  }, [emblaApi, onInit, onSelect]);

  return { selectedIndex, scrollSnaps, onDotClick };
};

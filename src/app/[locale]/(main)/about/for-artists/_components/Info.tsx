import Image from "next/image";

import { PropsWithDict } from "@/types/common";

import { IMAGE_PLACEHOLDER } from "@/constants/common";

import banner from "@/images/for-artists.jpg";

import { cn } from "@/utils/cn";

import { ArticleList } from "@/components/ArticleList";
import { Paragraph, Section } from "@/components/Typography";

export const Info = ({ dict }: PropsWithDict) => {
  return (
    <Section>
      <Paragraph className="mb-12">
        {dict["about"]["for_artists"]["info"]}
      </Paragraph>

      <div
        className={cn(
          "grid grid-cols-1 gap-x-20 gap-y-6",
          "lg:grid-cols-[1fr_max-content]",
        )}
      >
        <ArticleList items={dict["about"]["for_artists"]["list"]} />

        <Image
          src={banner}
          alt=""
          width={300}
          height={450}
          priority
          placeholder={IMAGE_PLACEHOLDER}
          className="rounded-xs"
        />
      </div>
    </Section>
  );
};

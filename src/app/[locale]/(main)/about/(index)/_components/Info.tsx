import Image from "next/image";

import { PropsWithDict } from "@/types/common";

import { IMAGE_PLACEHOLDER } from "@/constants/common";

import banner from "@/images/about-us.png";

import { cn } from "@/utils/cn";

import { Heading, Paragraph, Section } from "@/components/Typography";

export const Info = ({ dict }: PropsWithDict) => {
  return (
    <Section className={cn("flex flex-col gap-x-20 gap-y-6", "lg:flex-row")}>
      <div>
        <Heading className="mb-6">{dict["headings"]["art_agency"]}</Heading>

        <Paragraph className="mb-6">
          {dict["about"]["index"]["info"][0]}
        </Paragraph>

        <Paragraph>{dict["about"]["index"]["info"][1]}</Paragraph>
      </div>

      <Image
        src={banner}
        alt=""
        width={350}
        height={465}
        placeholder={IMAGE_PLACEHOLDER}
        priority
        className="rounded-xs"
      />
    </Section>
  );
};

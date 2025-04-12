import Image from "next/image";

import { PropsWithDict } from "@/types/common";

import banner from "@/images/about-us.png";

import { cn } from "@/utils/cn";

import { ArticleList } from "@/components/ArticleList";
import { Paragraph, Section } from "@/components/Typography";

export const Info = ({ dict }: PropsWithDict) => {
  return (
    <Section>
      <Paragraph className="mb-12">
        {dict["about"]["for_artists"]["info"]}
      </Paragraph>

      <div className={cn("flex flex-col gap-x-20 gap-y-6", "lg:flex-row")}>
        <ArticleList items={dict["about"]["for_artists"]["list"]} />

        <Image
          src={banner}
          alt=""
          width={350}
          className="rounded-xs"
        />
      </div>
    </Section>
  );
};

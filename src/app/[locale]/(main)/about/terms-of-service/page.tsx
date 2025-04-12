import { Metadata } from "next";

import { Locale } from "@/types/common";

import { getDictionary } from "@/utils/i18";

import { HeroSection } from "@/components/HeroSection";
import { Heading, List, Paragraph, Section } from "@/components/Typography";

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { locale } = await props.params;

  const dict = await getDictionary(locale);

  return {
    title: dict["headings"]["terms_of_service"],
    description: dict["meta"]["terms_of_service"],
  };
}

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function Page(props: PageProps) {
  const { locale } = await props.params;

  const dict = await getDictionary(locale);

  const terms = dict["terms_of_service"];

  return (
    <>
      <HeroSection heading={dict["headings"]["terms_of_service"]} />

      <div className="my-20 flex flex-col gap-20">
        <Section>
          <Paragraph>{terms["intro"]}</Paragraph>
        </Section>

        <Section>
          <Heading className="mb-6">{terms["section_1"]["heading"]}</Heading>

          <List items={terms["section_1"]["items"]} />
        </Section>

        <Section>
          <Heading className="mb-6">{terms["section_2"]["heading"]}</Heading>

          <Paragraph>{terms["section_2"]["content"]}</Paragraph>
        </Section>

        <Section>
          <Heading className="mb-6">{terms["section_3"]["heading"]}</Heading>

          <List items={terms["section_3"]["items"]} />
        </Section>

        <Section>
          <Heading className="mb-6">{terms["section_4"]["heading"]}</Heading>

          <section className="mb-6">
            <Heading
              level="h3"
              className="mb-3"
            >
              {terms["section_4"]["sub_section_1"]["heading"]}
            </Heading>

            <List items={terms["section_4"]["sub_section_1"]["items"]} />
          </section>

          <section className="mb-6">
            <Heading
              level="h3"
              className="mb-3"
            >
              {terms["section_4"]["sub_section_2"]["heading"]}
            </Heading>

            <List items={terms["section_4"]["sub_section_2"]["items"]} />
          </section>

          <section className="mb-6">
            <Heading
              level="h3"
              className="mb-3"
            >
              {terms["section_4"]["sub_section_3"]["heading"]}
            </Heading>

            <List items={terms["section_4"]["sub_section_3"]["items"]} />
          </section>

          <section>
            <Heading
              level="h3"
              className="mb-3"
            >
              {terms["section_4"]["sub_section_4"]["heading"]}
            </Heading>

            <List items={terms["section_4"]["sub_section_4"]["items"]} />
          </section>
        </Section>

        <Section>
          <Heading className="mb-6">{terms["section_5"]["heading"]}</Heading>

          <List items={terms["section_5"]["items"]} />
        </Section>

        <Section>
          <Heading className="mb-6">{terms["section_6"]["heading"]}</Heading>

          <Paragraph className="mb-3">
            {terms["section_6"]["content"]}
          </Paragraph>

          <List items={terms["section_6"]["items"]} />
        </Section>

        <Section>
          <Heading className="mb-6">{terms["section_7"]["heading"]}</Heading>

          <section className="mb-6">
            <Heading
              level="h3"
              className="mb-3"
            >
              {terms["section_7"]["sub_section_1"]["heading"]}
            </Heading>

            <List items={terms["section_7"]["sub_section_1"]["items"]} />
          </section>

          <section>
            <Heading
              level="h3"
              className="mb-3"
            >
              {terms["section_7"]["sub_section_2"]["heading"]}
            </Heading>

            <Paragraph className="mb-3">
              {terms["section_7"]["sub_section_2"]["content"]}
            </Paragraph>

            <List items={terms["section_7"]["sub_section_2"]["items"]} />
          </section>
        </Section>

        <Section>
          <Heading className="mb-6">{terms["section_8"]["heading"]}</Heading>

          <Paragraph className="mb-3">
            {terms["section_8"]["content"]}
          </Paragraph>

          <List items={terms["section_8"]["items"]} />
        </Section>

        <Section>
          <Heading className="mb-6">{terms["section_9"]["heading"]}</Heading>

          <Paragraph>{terms["section_9"]["content"]}</Paragraph>
        </Section>

        <Section>
          <Heading className="mb-6">{terms["section_10"]["heading"]}</Heading>

          <section className="mb-6">
            <Heading
              level="h3"
              className="mb-3"
            >
              {terms["section_10"]["sub_section_1"]["heading"]}
            </Heading>

            <Paragraph>
              {terms["section_10"]["sub_section_1"]["content"]}
            </Paragraph>
          </section>

          <section>
            <Heading
              level="h3"
              className="mb-3"
            >
              {terms["section_10"]["sub_section_2"]["heading"]}
            </Heading>

            <List items={terms["section_10"]["sub_section_2"]["items"]} />
          </section>
        </Section>

        <Section>
          <Heading className="mb-6">{terms["section_11"]["heading"]}</Heading>

          <Paragraph className="mb-3">
            {terms["section_11"]["content"]}
          </Paragraph>

          <List items={terms["section_11"]["items"]} />
        </Section>

        <Section>
          <Heading className="mb-6">{terms["section_12"]["heading"]}</Heading>

          <Paragraph>{terms["section_12"]["content"]}</Paragraph>
        </Section>

        <Section>
          <Heading className="mb-6">{terms["section_13"]["heading"]}</Heading>

          <Paragraph className="mb-3">
            {terms["section_13"]["content"]}
          </Paragraph>

          <List items={terms["section_13"]["items"]} />
        </Section>
      </div>
    </>
  );
}

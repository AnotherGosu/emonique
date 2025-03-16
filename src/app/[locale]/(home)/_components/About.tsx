import { cn } from "@/utils/cn";

import { ButtonLink } from "@/components/ButtonLink";
import { Heading, Paragraph, Section } from "@/components/Typography";

export const About = () => {
  return (
    <div className="bg-neutral-900 pt-50 pb-20 text-neutral-50">
      <Section className="flex flex-col gap-8">
        <div className="flex items-center justify-between gap-2">
          <Heading>Art Agency</Heading>

          <ButtonLink
            href="/about"
            variant="alt"
          >
            About us
          </ButtonLink>
        </div>

        <Paragraph>
          <b>Emonique</b> is more than an art platform. It is a global stage for
          artists to share their emotions and uniqueness. We connect creators
          with collectors, turning passion into legacy and originality into
          timeless treasures. Every piece tells a story, and we bring those
          stories to the world.
        </Paragraph>

        <div className="my-8 h-px w-full bg-neutral-50" />

        <div
          className={cn(
            "grid grid-cols-1 gap-x-16 gap-y-8",
            "sm:grid-cols-2 lg:grid-cols-3",
          )}
        >
          <article>
            <Heading
              level="h3"
              className="mb-4"
            >
              Hidden Talents
            </Heading>

            <Paragraph variant="small">
              Art is everywhere, yet many incredible artists remain unseen. We
              seek out undiscovered creators and share their art with those who
              value originality, passion, and storytelling.
            </Paragraph>
          </article>

          <article>
            <Heading
              level="h3"
              className="mb-4"
            >
              Beyond the Canvas
            </Heading>

            <Paragraph variant="small">
              We believe that every artwork holds more than just aesthetic value
              — it carries the artist’s personal journey. Our mission is to help
              collectors find pieces that deeply connect with their own
              experiences.
            </Paragraph>
          </article>

          <article>
            <Heading
              level="h3"
              className="mb-4"
            >
              Accessible and Effortless
            </Heading>

            <Paragraph variant="small">
              Focus on art and leave all operations to us. By bridging the gap
              between artists and collectors, we simplify communication, ensure
              a smooth purchasing process, and handle logistics with care.
            </Paragraph>
          </article>
        </div>
      </Section>
    </div>
  );
};

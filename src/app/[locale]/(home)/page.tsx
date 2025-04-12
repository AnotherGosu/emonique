import { Locale } from "@/types/common";

import { getDictionary } from "@/utils/i18";

import { HomeHeader } from "@/components/Header/HomeHeader";

import { About } from "./_components/About";
import { Artists } from "./_components/Artists";
import { Artworks } from "./_components/Artworks";
import { Clients } from "./_components/Clients";
import { Contact } from "./_components/Contact";
import { Hero } from "./_components/Hero";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function Page(props: PageProps) {
  const { locale } = await props.params;

  const dict = await getDictionary(locale);

  return (
    <>
      <div className="grid h-svh grid-rows-[max-content_1fr]">
        <HomeHeader dict={dict} />
        <Hero />
      </div>

      <main className="flex flex-col gap-20 pb-20">
        <About dict={dict} />

        <Artworks
          locale={locale}
          dict={dict}
        />

        <Artists
          locale={locale}
          dict={dict}
        />

        <Clients dict={dict} />

        <Contact dict={dict} />
      </main>
    </>
  );
}

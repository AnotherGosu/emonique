import { Locale } from "@/types/common";

import { Footer } from "@/components/Footer";

import { About } from "./_components/About";
import { Artists } from "./_components/Artists";
import { Artworks } from "./_components/Artworks";
import { Clients } from "./_components/Clients";
import { Contact } from "./_components/Contact";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function Page(props: PageProps) {
  const { locale } = await props.params;

  return (
    <>
      <div className="grid h-svh grid-rows-[max-content_1fr]">
        <Header />
        <Hero />
      </div>

      <main className="flex flex-col gap-20 pb-20">
        <About />
        <Artworks />
        <Artists />
        <Clients />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

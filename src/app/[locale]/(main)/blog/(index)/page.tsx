import { Metadata } from "next";

import { Locale } from "@/types/common";

import { getDictionary } from "@/utils/i18";

import { Posts } from "./_components/Posts";

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { locale } = await props.params;

  const dict = await getDictionary(locale);

  return {
    title: dict["headings"]["blog"],
    description: dict["meta"]["blog"],
  };
}

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function Page() {
  return (
    <>
      <Posts />
    </>
  );
}

import { Locale } from "@/types/common";

import { Footer } from "@/components/Footer";

import { Header } from "./_components/Header";

interface LayoutProps extends React.PropsWithChildren {
  params: Promise<{ locale: Locale }>;
}

export default async function Layout(props: LayoutProps) {
  const { locale } = await props.params;

  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

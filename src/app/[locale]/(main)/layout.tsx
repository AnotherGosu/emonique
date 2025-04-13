import { Locale } from "@/types/common";

import { getDictionary } from "@/utils/i18";

import { MainHeader } from "@/components/Header/MainHeader";
import { PageHeading } from "@/components/PageHeading";
import { Section } from "@/components/Typography";

interface LayoutProps extends React.PropsWithChildren {
  params: Promise<{ locale: Locale }>;
}

export default async function Layout(props: LayoutProps) {
  const { locale } = await props.params;

  const dict = await getDictionary(locale);

  return (
    <>
      <MainHeader dict={dict} />

      <div className="bg-neutral-900 py-20 text-neutral-50">
        <Section className="text-center">
          <PageHeading dict={dict} />
        </Section>
      </div>

      <main className="my-20 flex flex-col gap-20">{props.children}</main>
    </>
  );
}

import { Locale } from "@/types/common";

import { getDictionary } from "@/utils/i18";

import { MainHeader } from "@/components/Header/MainHeader";

interface LayoutProps extends React.PropsWithChildren {
  params: Promise<{ locale: Locale }>;
}

export default async function Layout(props: LayoutProps) {
  const { locale } = await props.params;

  const dict = await getDictionary(locale);

  return (
    <div className="grid grid-rows-[max-content_1fr]">
      <MainHeader dict={dict} />

      <main>{props.children}</main>
    </div>
  );
}

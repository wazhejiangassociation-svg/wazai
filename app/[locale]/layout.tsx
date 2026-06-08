import {NextIntlClientProvider, hasLocale} from "next-intl";
import {notFound} from "next/navigation";
import {getMessages, setRequestLocale} from "next-intl/server";
import {Navigation} from "@/components/layout/Navigation";
import {Footer} from "@/components/layout/Footer";
import {locales} from "../../i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const {locale} = params;
  if (!hasLocale(locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Navigation />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}

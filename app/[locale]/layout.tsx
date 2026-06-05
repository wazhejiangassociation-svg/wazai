import {NextIntlClientProvider, hasLocale} from "next-intl";
import {notFound} from "next/navigation";
import {getMessages} from "next-intl/server";
import {Navigation} from "@/components/layout/Navigation";
import {Footer} from "@/components/layout/Footer";
import {locales} from "@/i18n";

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

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Navigation />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}

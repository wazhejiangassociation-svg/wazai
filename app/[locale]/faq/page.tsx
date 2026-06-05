import { redirect } from "next/navigation";

export default function FAQPage({ params }: { params: { locale: string } }) {
  redirect(`/${params.locale}/contact`);
}

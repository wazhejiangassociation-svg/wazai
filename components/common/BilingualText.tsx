"use client";

import { useLocale } from "next-intl";

type Props = {
  en: string;
  zh: string;
  className?: string;
};

export function BilingualText({ en, zh, className }: Props) {
  const locale = useLocale();
  const text = locale === "zh" ? zh : en;

  return <span className={className}>{text}</span>;
}

"use client";

import {useLocale} from "next-intl";

type Props = {
  en: string;
  zh: string;
  level?: 1 | 2 | 3 | 4;
  lead?: string;
};

export function BilingualHeading({ en, zh, level = 2, lead }: Props) {
  const locale = useLocale();
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const title = locale === "zh" ? zh : en;

  return (
    <div className="bilingual-title">
      <Tag className="en">{title}</Tag>
      {lead ? <p className="section-lead">{lead}</p> : null}
    </div>
  );
}

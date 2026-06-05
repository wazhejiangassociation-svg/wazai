"use client";

import { useLocale } from "next-intl";

import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Link } from "@/i18n/navigation";

type HeroCommunityProps = {
  titleEn: string;
  titleZh: string;
  subtitleEn: string;
  subtitleZh?: string;
  image: string;
};

export function HeroCommunity({
  titleEn,
  titleZh,
  subtitleEn,
  subtitleZh,
  image,
}: HeroCommunityProps) {
  const locale = useLocale();
  const isZh = locale === "zh";

  return (
    <section
      className="hero-shell"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 26, 23, 0.46), rgba(30, 26, 23, 0.64)), url(${image})`,
      }}
    >
      <div className="container hero-content hero-content-centered">
        <ScrollReveal>
          <div className="hero-copy">
            <h1 className={isZh ? "zh hero-title" : "hero-title"}>
              {isZh ? titleZh : titleEn}
            </h1>
            <p className={isZh ? "zh hero-subtitle" : "hero-subtitle"}>
              {isZh ? (subtitleZh ?? subtitleEn) : subtitleEn}
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="hero-actions hero-actions-centered">
            <Link href="/contact" className="editorial-link editorial-link-light">
              {isZh ? "联系我们" : "Contact Us"}
            </Link>
            <Link href="/events" className="editorial-link editorial-link-light">
              {isZh ? "查看活动" : "View Events"}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

"use client";

import { useLocale } from "next-intl";

import { ScrollReveal } from "@/components/common/ScrollReveal";
import { Link } from "@/i18n/navigation";
import { BilingualText } from "@/components/common/BilingualText";

function Icon({
  type,
}: {
  type: "mail" | "phone" | "map" | "facebook" | "instagram";
}) {
  if (type === "mail") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.6 3.8 9.4 7l-2 2c1.3 2.7 3.5 4.9 6.2 6.2l2-2 3.2 2.8c.5.4.6 1.1.3 1.7-.7 1.4-2.1 2.3-3.7 2.3C9.1 20 4 14.9 4 8.6c0-1.6.9-3 2.3-3.7.6-.3 1.3-.2 1.7.3Z" />
      </svg>
    );
  }

  if (type === "map") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21s7-5.2 7-11a7 7 0 0 0-14 0c0 5.8 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  }

  if (type === "facebook") {
    return <span className="footer-social-letter">f</span>;
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="5" width="14" height="14" rx="4" />
      <circle cx="12" cy="12" r="3" />
      <circle cx="16.5" cy="7.5" r="0.8" />
    </svg>
  );
}

export function Footer() {
  const locale = useLocale();
  const currentYear = new Date().getFullYear();
  const newsletterPlaceholder = locale === "zh" ? "电子邮箱地址" : "Email address";
  const newsletterButton = locale === "zh" ? "订阅" : "Subscribe";

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <ScrollReveal>
          <div className="footer-newsletter">
            <div>
              <span className="footer-kicker">
                <BilingualText en="Newsletter" zh="通讯订阅" />
              </span>

              <h2>
                <BilingualText
                  en="Stay Connected with Us"
                  zh="保持与我们的联系"
                />
              </h2>

              <p>
                <BilingualText
                  en="Receive event updates, member opportunities, and community stories from us."
                  zh="获取联合会的活动更新、会员机会与社区故事。"
                />
              </p>
            </div>

            <form className="footer-newsletter-form">
              <input
                aria-label={newsletterPlaceholder}
                type="email"
                placeholder={newsletterPlaceholder}
              />

              <button type="submit">{newsletterButton}</button>
            </form>
          </div>
        </ScrollReveal>

        <div className="footer-main">
          <ScrollReveal>
            <div className="footer-brand footer-brand-with-logo">
              <div className="footer-logo-slot">
                <img src="/footerlogo.png" alt="WAZAI logo" />
              </div>

              <div className="footer-brand-copy">
                <h3>Western Australia Zhejiang Association Inc</h3>
                <p className="footer-brand-subtitle">西澳浙江联合会</p>
              </div>

              <p className="footer-brand-summary">
                <BilingualText
                  en="A bridge between Zhejiang heritage and Western Australia, connecting people, culture, and opportunity."
                  zh="连接浙江文化与西澳，凝聚人脉、文化与发展机遇。"
                />
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="footer-column">
              <h4>
                <BilingualText en="Quick Links" zh="快速链接" />
              </h4>
              <Link href="/">
                <BilingualText en="Home" zh="首页" />
              </Link>
              <Link href="/events">
                <BilingualText en="Events" zh="活动" />
              </Link>
              <Link href="/about">
                <BilingualText en="About Us" zh="关于我们" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="footer-column">
              <h4>
                <BilingualText en="Explore" zh="探索" />
              </h4>
              <Link href="/gallery">
                <BilingualText en="Gallery" zh="相册" />
              </Link>
              <Link href="/contact">
                <BilingualText en="Contact" zh="联系我们" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <div className="footer-contact">
              <h4>
                <BilingualText en="Contact" zh="联系方式" />
              </h4>

              <div className="footer-contact-row">
                <Icon type="mail" />
                <span>wazhejianassociation@gmail.com</span>
              </div>

              <div className="footer-contact-row">
                <Icon type="phone" />
                <span>0452 558 523</span>
              </div>

              <div className="footer-contact-row">
                <Icon type="map" />
                <span>Unit 5 / 10 Canning Highway, South Perth, WA 6151</span>
              </div>

              <div className="footer-social">
                <span>
                  <BilingualText en="Follow Us" zh="关注我们" />
                </span>

                <a href="#" aria-label="Facebook">
                  <Icon type="facebook" />
                </a>

                <a href="#" aria-label="X" className="footer-social-x">
                  X
                </a>

                <a href="#" aria-label="Instagram">
                  <Icon type="instagram" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} WAZAI. All rights reserved.</p>
          <Link href="/contact">
            <BilingualText en="Contact Us" zh="联系我们" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

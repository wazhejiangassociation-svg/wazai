"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { navLinks } from "@/lib/content";
import { Link, usePathname } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import Image from "next/image";

export function Navigation() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const normalizedPathname = pathname.replace(/^\/(en|zh)(?=\/|$)/, "") || "/";
  const closeDrawer = () => setIsDrawerOpen(false);
  const toggleDrawer = () => setIsDrawerOpen((current) => !current);

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [normalizedPathname]);

  useEffect(() => {
    if (!isDrawerOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDrawer();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        closeDrawer();
      }
    };

    window.addEventListener("resize", handleResize);

    window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isDrawerOpen]);

  const isActive = (href: string) => normalizedPathname === href;

  return (
    <header className="nav-frame">
      <nav className="container nav-shell">
        <Link href="/" className="nav-brand">
          <div className="nav-logo">
            <Image
              src="/icon.png"
              alt="WAZAI Logo"
              width={150}
              height={48}
              priority
            />
          </div>
        </Link>

        <div className="nav-desktop">
          <div className="nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive(link.href) ? "nav-link-active" : ""}`}
              >
                {t(`${link.href}.label`)}
              </Link>
            ))}
          </div>

          <div className="nav-actions">
            <LanguageSwitcher />

            <Link href="/contact" className="editorial-link nav-join-link">
              {t("join")}
            </Link>
          </div>
        </div>

        <button
          type="button"
          className="nav-menu-button"
          aria-label={locale === "zh" ? "打开导航菜单" : "Open navigation menu"}
          aria-controls="site-navigation-drawer"
          aria-expanded={isDrawerOpen}
          onClick={toggleDrawer}
        >
          <span className="nav-menu-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </nav>

      <div
        className={`nav-drawer-overlay ${isDrawerOpen ? "is-open" : ""}`}
        aria-hidden="true"
        onClick={closeDrawer}
      />

      <aside
        id="site-navigation-drawer"
        className={`nav-drawer ${isDrawerOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="site-navigation-drawer-title"
      >
        <div className="nav-drawer-surface">
          <div className="nav-drawer-header">
            <Link href="/" className="nav-drawer-brand" onClick={closeDrawer}>
              <Image src="/icon.png" alt="WAZAI Logo" width={140} height={56} />

              <span id="site-navigation-drawer-title" className="sr-only">
                WAZAI Navigation
              </span>
            </Link>

            <button
              ref={closeButtonRef}
              type="button"
              className="nav-drawer-close"
              aria-label={locale === "zh" ? "关闭导航菜单" : "Close navigation menu"}
              onClick={closeDrawer}
            >
              <span aria-hidden="true">脳</span>
            </button>
          </div>

          <nav
            className="nav-drawer-links"
            aria-label={locale === "zh" ? "移动导航" : "Mobile navigation"}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link nav-drawer-link ${isActive(link.href) ? "nav-link-active" : ""}`}
                onClick={closeDrawer}
              >
                {t(`${link.href}.label`)}
              </Link>
            ))}
          </nav>

          <div className="nav-drawer-footer">
            <LanguageSwitcher />

            <Link href="/contact" className="nav-drawer-cta" onClick={closeDrawer}>
              {t("join")}
            </Link>
          </div>
        </div>
      </aside>
    </header>
  );
}

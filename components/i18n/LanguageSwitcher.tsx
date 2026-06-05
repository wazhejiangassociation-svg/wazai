"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="lang-switcher-wrap">
      <label htmlFor="lang-switcher" className="sr-only">
        Language
      </label>
      <select
        id="lang-switcher"
        className="lang-switcher"
        value={locale}
        onChange={(e) =>
          router.replace(pathname, { locale: e.target.value as "zh" | "en" })
        }
      >
        <option value="zh">中文</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}

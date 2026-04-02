"use client";

import { useLocale } from "next-intl";
import { useEffect } from "react";

/** Root layout keeps a static <html lang>; sync real locale for a11y/SEO. */
export function LocaleHtmlLang() {
  const locale = useLocale();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}

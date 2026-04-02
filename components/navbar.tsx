"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Building2, House, Info, Mail, MapPinned, Package } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

const navItems = [
  { key: "home", href: "#hero", icon: House },
  { key: "about", href: "#about", icon: Info },
  { key: "routes", href: "#routes", icon: MapPinned },
  { key: "cargo", href: "#cargo", icon: Package },
  { key: "terminals", href: "#terminals", icon: Building2 },
  { key: "contact", href: "#contact", icon: Mail }
];

export function Navbar() {
  const t = useTranslations("common");
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 48);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        isOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const onDark = !scrolled;
  const navLinkClass = onDark
    ? "text-white/90 hover:bg-white/10 hover:text-yellow"
    : "text-slate-700 hover:bg-slate-100 hover:text-navy";
  const brandTextClass = onDark ? "text-white" : "text-navy";
  const borderClass = onDark ? "border-white/20" : "border-slate-200";

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-[background,box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-b border-slate-200/90 bg-white/92 shadow-sm backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-padding mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 md:h-[4.25rem]">
        <Link
          href="/"
          className={`font-[var(--font-montserrat)] text-base font-extrabold tracking-tight md:text-lg ${brandTextClass}`}
        >
          {t("brand")}
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold transition ${navLinkClass}`}
            >
              <item.icon className="h-4 w-4 shrink-0 opacity-90" />
              {t(`nav.${item.key}`)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <div
            className={`flex rounded-full p-0.5 ${onDark ? "border border-white/25 bg-black/20" : "border border-slate-200 bg-slate-100/80"}`}
          >
            <Link
              href={pathname}
              locale="pt"
              prefetch={false}
              className={`rounded-full px-3 py-1.5 text-xs font-black transition ${
                locale === "pt"
                  ? "bg-yellow text-navy shadow-sm"
                  : onDark
                    ? "text-white/80 hover:text-white"
                    : "text-slate-600 hover:text-navy"
              }`}
            >
              PT
            </Link>
            <Link
              href={pathname}
              locale="en"
              prefetch={false}
              className={`rounded-full px-3 py-1.5 text-xs font-black transition ${
                locale === "en"
                  ? "bg-yellow text-navy shadow-sm"
                  : onDark
                    ? "text-white/80 hover:text-white"
                    : "text-slate-600 hover:text-navy"
              }`}
            >
              EN
            </Link>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`relative z-[60] inline-flex h-10 w-10 items-center justify-center rounded-full border md:hidden ${borderClass}`}
          aria-label={isOpen ? t("a11y.closeMenu") : t("a11y.openMenu")}
          aria-expanded={isOpen}
        >
          <span className="relative h-4 w-5">
            <motion.span
              className={`absolute left-0 top-0 h-0.5 w-5 ${onDark ? "bg-white" : "bg-navy"}`}
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className={`absolute left-0 top-[7px] h-0.5 w-5 ${onDark ? "bg-white" : "bg-navy"}`}
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className={`absolute left-0 top-[14px] h-0.5 w-5 ${onDark ? "bg-white" : "bg-navy"}`}
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.aside
              ref={drawerRef}
              className="fixed right-0 top-0 z-50 h-screen w-72 bg-white p-6 shadow-2xl md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="mb-6 font-[var(--font-montserrat)] text-base font-extrabold tracking-tight text-navy">
                {t("brand")}
              </div>
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-navy"
                  >
                    <item.icon className="h-4 w-4" />
                    {t(`nav.${item.key}`)}
                  </a>
                ))}
                <div className="mt-4 flex gap-2 rounded-full border border-slate-200 bg-slate-50 p-1">
                  <Link
                    href={pathname}
                    locale="pt"
                    prefetch={false}
                    onClick={() => setIsOpen(false)}
                    className={`flex-1 rounded-full py-2 text-center text-xs font-black ${
                      locale === "pt" ? "bg-yellow text-navy" : "text-slate-600"
                    }`}
                  >
                    PT
                  </Link>
                  <Link
                    href={pathname}
                    locale="en"
                    prefetch={false}
                    onClick={() => setIsOpen(false)}
                    className={`flex-1 rounded-full py-2 text-center text-xs font-black ${
                      locale === "en" ? "bg-yellow text-navy" : "text-slate-600"
                    }`}
                  >
                    EN
                  </Link>
                </div>
              </nav>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

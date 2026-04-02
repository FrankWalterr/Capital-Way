"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Instagram, Mail, Phone } from "lucide-react";

const navItems = [
  { key: "home", href: "#hero" },
  { key: "about", href: "#about" },
  { key: "routes", href: "#routes" },
  { key: "cargo", href: "#cargo" },
  { key: "terminals", href: "#terminals" },
  { key: "contact", href: "#contact" }
];

const footContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 }
  }
};

const footCol = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 }
  }
};

export function Footer() {
  const t = useTranslations("common");

  return (
    <footer className="bg-navy py-12 text-white">
      <motion.div
        variants={footContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="container-padding mx-auto grid max-w-7xl gap-10 md:grid-cols-3"
      >
        <motion.div variants={footCol}>
          <div className="font-[var(--font-montserrat)] text-lg font-extrabold tracking-tight">
            {t("brand")}
          </div>
          <p className="mt-3 text-sm text-slate-300">{t("footer.slogan")}</p>
        </motion.div>

        <motion.div variants={footCol}>
          <h3 className="mb-3 font-semibold text-yellow">{t("footer.quickLinks")}</h3>
          <div className="flex flex-col gap-2 text-sm">
            {navItems.map((item, i) => (
              <motion.a
                key={item.key}
                href={item.href}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                whileHover={{ x: 4, color: "rgb(245, 197, 0)" }}
                className="text-slate-200 transition-colors"
              >
                {t(`nav.${item.key}`)}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={footCol} className="space-y-5 text-sm">
          <div>
            <h3 className="mb-3 font-semibold text-yellow">{t("footer.contact")}</h3>
            <a
              href="tel:+258878771818"
              className="mt-2 flex items-center gap-2 text-slate-200 transition hover:text-yellow"
            >
              <Phone className="h-4 w-4 shrink-0 text-yellow" />
              (+258) 87 877 1818
            </a>
            <a
              href="mailto:info@capitalway.co.mz"
              className="mt-2 flex items-center gap-2 text-slate-200 transition hover:text-yellow"
            >
              <Mail className="h-4 w-4 shrink-0 text-yellow" />
              info@capitalway.co.mz
            </a>
          </div>
          <div>
            <h3 className="mb-2 font-semibold text-yellow">{t("footer.social")}</h3>
            <div className="flex items-center gap-3 text-slate-200">
              <motion.a
                href="https://instagram.com/capitalwaytransporte"
                target="_blank"
                rel="noreferrer"
                aria-label={t("footer.instagramAria")}
                whileHover={{ scale: 1.08, borderColor: "rgba(245,197,0,0.8)" }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition-colors hover:text-yellow"
              >
                <Instagram className="h-4 w-4" />
              </motion.a>
              <span>{t("footer.instagram")}</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="container-padding mx-auto mt-10 max-w-7xl border-t border-white/10 pt-4 text-xs text-slate-400"
      >
        {t("footer.copyright")}
      </motion.p>
    </footer>
  );
}

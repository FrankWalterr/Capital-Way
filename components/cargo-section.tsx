"use client";

import { motion } from "framer-motion";
import { ArrowRight, Package, Scale, Ruler } from "lucide-react";
import { useTranslations } from "next-intl";
import { cargoRates } from "@/lib/data";

const rowVariant = {
  hidden: { opacity: 0, x: 12 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.05 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  })
};

export function CargoSection() {
  const t = useTranslations("common.cargo");

  return (
    <section id="cargo" className="relative overflow-hidden py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(245,197,0,0.08),transparent_55%)]"
        aria-hidden
      />
      <div className="container-padding relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="mb-2 inline-flex items-center gap-2 text-yellow">
            <Package className="h-5 w-5" strokeWidth={2} />
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-navy/50">
              {t("eyebrow")}
            </span>
          </div>
          <h2 className="font-[var(--font-montserrat)] text-3xl font-extrabold text-navy md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-3xl text-slate-600">{t("subtitle")}</p>
        </motion.div>

        {/* Mobile cards */}
        <div className="mt-10 grid gap-4 md:hidden">
          {cargoRates.map((item, i) => (
            <motion.article
              key={item.route}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={rowVariant}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm"
            >
              <p className="flex items-center gap-2 font-semibold text-navy">
                <ArrowRight className="h-4 w-4 text-yellow" />
                <span className="truncate">{item.route}</span>
              </p>

              <div className="mt-4 grid gap-3 rounded-2xl bg-slate-50 p-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 font-semibold text-slate-600">
                    <Scale className="h-4 w-4 text-navy/60" />
                    {t("columns.perKg")}
                  </span>
                  <span className="font-bold text-slate-700">{item.rate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 font-semibold text-slate-600">
                    <Ruler className="h-4 w-4 text-navy/60" />
                    {t("columns.perCm3")}
                  </span>
                  <span className="font-bold text-slate-700">{item.perCm3}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-600">{t("columns.minPrice")}</span>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                    {item.minimum}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
          className="mt-10 hidden overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_24px_60px_-24px_rgba(10,22,40,0.3)] ring-1 ring-yellow/15 md:block"
        >
          <div className="overflow-x-auto [-webkit-overflow-scrolling:touch]">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-yellow via-[#ffd54f] to-yellow text-[11px] font-black uppercase tracking-wider text-navy">
                  <th className="px-5 py-4 sm:px-6">{t("columns.route")}</th>
                  <th className="px-5 py-4 sm:px-6">{t("columns.perKg")}</th>
                  <th className="px-5 py-4 sm:px-6">{t("columns.perCm3")}</th>
                  <th className="px-5 py-4 sm:px-6">{t("columns.minPrice")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {cargoRates.map((item, i) => (
                  <motion.tr
                    key={item.route}
                    custom={i}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.08 }}
                    variants={rowVariant}
                    className="group bg-white transition-colors hover:bg-yellow/[0.06]"
                  >
                    <td className="px-5 py-4 font-semibold text-navy sm:px-6">
                      <span className="inline-flex items-center gap-2">
                        <span className="hidden h-1.5 w-1.5 rounded-full bg-navy opacity-0 transition group-hover:opacity-100 sm:inline" />
                        {item.route}
                      </span>
                    </td>
                    <td className="px-5 py-4 font-medium text-slate-700 sm:px-6">
                      {item.rate}
                    </td>
                    <td className="px-5 py-4 text-slate-600 sm:px-6">{item.perCm3}</td>
                    <td className="px-5 py-4 text-slate-600 sm:px-6">
                      <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                        {item.minimum}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

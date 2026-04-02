"use client";

import { motion } from "framer-motion";
import { ArrowRightLeft, Ticket } from "lucide-react";
import { useTranslations } from "next-intl";
import { passengerRoutes } from "@/lib/data";

const rowVariant = {
  hidden: { opacity: 0, x: -12 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.05 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  })
};

export function RoutesSection() {
  const t = useTranslations("common.routes");

  return (
    <section id="routes" className="relative overflow-hidden bg-slate-50 py-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow/40 to-transparent"
        aria-hidden
      />
      <div className="container-padding mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <div className="mb-2 inline-flex items-center gap-2 text-yellow">
              <Ticket className="h-5 w-5" strokeWidth={2} />
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-navy/50">
                {t("eyebrow")}
              </span>
            </div>
            <h2 className="font-[var(--font-montserrat)] text-3xl font-extrabold text-navy md:text-4xl">
              {t("title")}
            </h2>
          </div>
        </motion.div>

        {/* Mobile cards */}
        <div className="mt-10 grid gap-4 md:hidden">
          {passengerRoutes.map((item, i) => (
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
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="flex items-center gap-2 font-semibold text-navy">
                    <ArrowRightLeft className="h-4 w-4 text-yellow" />
                    <span className="truncate">{item.route}</span>
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                  {item.price}
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm">
                <span className="font-semibold text-slate-600">{t("columns.excess")}</span>
                <span className="font-bold text-slate-700">{item.excess}</span>
              </div>
            </motion.article>
          ))}
          <div className="rounded-2xl border border-slate-200/90 bg-slate-50 px-5 py-4 text-sm text-slate-600">
            {t("note")}
          </div>
        </div>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mt-10 hidden overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_24px_60px_-24px_rgba(10,22,40,0.35)] ring-1 ring-navy/[0.04] md:block"
        >
          <div className="overflow-x-auto [-webkit-overflow-scrolling:touch]">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-navy via-[#0f2340] to-navy text-[11px] font-black uppercase tracking-wider text-white">
                  <th className="px-5 py-4 sm:px-6">{t("columns.route")}</th>
                  <th className="px-5 py-4 sm:px-6">{t("columns.ticket")}</th>
                  <th className="px-5 py-4 sm:px-6">{t("columns.excess")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {passengerRoutes.map((item, i) => (
                  <motion.tr
                    key={item.route}
                    custom={i}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.08 }}
                    variants={rowVariant}
                    className="group bg-white transition-colors hover:bg-yellow/[0.07]"
                  >
                    <td className="px-5 py-4 font-semibold text-navy sm:px-6">
                      <span className="inline-flex items-center gap-2">
                        <span className="hidden h-1.5 w-1.5 rounded-full bg-yellow opacity-0 transition group-hover:opacity-100 sm:inline" />
                        {item.route}
                      </span>
                    </td>
                    <td className="px-5 py-4 font-medium text-slate-700 sm:px-6">
                      <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                        {item.price}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-slate-600 sm:px-6">{item.excess}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border-t border-slate-100 bg-slate-50/90 px-5 py-4 sm:px-6"
          >
            <p className="text-sm text-slate-600">{t("note")}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

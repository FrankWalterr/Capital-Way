"use client";

import { motion } from "framer-motion";
import { Building2, MapPinned, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { terminals } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } }
};

export function TerminalsSection() {
  const t = useTranslations("common.terminals");

  return (
    <section id="terminals" className="bg-slate-50 py-20">
      <div className="container-padding mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="font-[var(--font-montserrat)] text-3xl font-extrabold text-navy">
            {t("title")}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">{t("subtitle")}</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-10 grid gap-5 md:grid-cols-2"
        >
          {terminals.map((terminal) => (
            <motion.article
              key={terminal.phone}
              variants={card}
              whileHover={{
                y: -8,
                boxShadow: "0 24px 50px -12px rgba(10, 22, 40, 0.18)"
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-yellow/10 blur-2xl transition group-hover:bg-yellow/20" />

              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-[#152a45] text-yellow shadow-md ring-2 ring-yellow/25">
                  <Building2 className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-[var(--font-outfit)] text-xl font-bold text-navy">
                    {terminal.city}
                  </h3>
                  <p className="mt-3 flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow/15 text-navy ring-1 ring-yellow/30">
                      <MapPinned className="h-4 w-4 text-yellow" />
                    </span>
                    <span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-navy/60">
                        {t("addressLabel")}
                      </span>
                      <br />
                      {terminal.location}
                    </span>
                  </p>
                  <a
                    href={`tel:${terminal.phone.replace(/[^\d+]/g, "")}`}
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2.5 text-sm font-bold text-navy shadow-sm ring-1 ring-slate-200/80 transition hover:bg-yellow hover:text-navy hover:ring-yellow"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-navy text-yellow">
                      <Phone className="h-4 w-4" strokeWidth={2} />
                    </span>
                    <span>
                      <span className="mb-0.5 block text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                        {t("phoneLabel")}
                      </span>
                      {terminal.phone}
                    </span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

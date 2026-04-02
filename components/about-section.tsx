"use client";

import { motion } from "framer-motion";
import {
  Bus,
  Eye,
  HandCoins,
  MapPin,
  Package,
  ShieldCheck,
  Sofa,
  Sparkles,
  Clock3,
  Target,
  Users
} from "lucide-react";
import { useTranslations } from "next-intl";
import { AnimatedNumber } from "@/components/animated-number";

const valueKeys = [
  {
    key: "safety" as const,
    icon: ShieldCheck
  },
  {
    key: "comfort" as const,
    icon: Sofa
  },
  {
    key: "punctuality" as const,
    icon: Clock3
  },
  {
    key: "fairPrice" as const,
    icon: HandCoins
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  }
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const glassCard =
  "group relative overflow-hidden rounded-2xl border border-white/70 bg-white/75 p-6 shadow-[0_8px_32px_-8px_rgba(10,22,40,0.12)] ring-1 ring-navy/[0.05] backdrop-blur-md transition-shadow duration-300 md:p-8 hover:shadow-[0_20px_50px_-12px_rgba(10,22,40,0.2)]";

const iconWrap =
  "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-[#132a45] text-yellow shadow-md ring-2 ring-yellow/25 transition duration-300 group-hover:scale-105 group-hover:ring-yellow/50";

const quoteBeats = ["quoteBeat1", "quoteBeat2", "quoteBeat3"] as const;

export function AboutSection() {
  const t = useTranslations("common.about");

  return (
    <section id="about" className="container-padding mx-auto max-w-7xl py-20">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.22 }}
        transition={{ duration: 0.55 }}
        className="relative mb-14 overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/80 to-yellow/[0.09] shadow-[0_20px_50px_-20px_rgba(10,22,40,0.35)] ring-1 ring-navy/[0.06]"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.55]"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 100% 0%, rgba(245,197,0,0.14), transparent 55%), radial-gradient(ellipse 60% 50% at 0% 100%, rgba(10,22,40,0.06), transparent 50%)"
          }}
        />
        <div className="pointer-events-none absolute -right-8 top-6 h-40 w-40 rounded-full bg-yellow/15 blur-3xl" aria-hidden />
        <div className="relative p-8 md:p-10">
          <div className="relative mx-auto min-w-0 max-w-4xl">
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-navy/45">
              {t("quoteLabel")}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="relative z-[1] mt-6 max-w-2xl rounded-2xl border border-slate-200/80 bg-white/60 py-8 pl-6 pr-5 shadow-sm backdrop-blur-sm sm:pl-8 sm:pr-8 md:mt-8 md:py-10 md:pl-10"
            >
              <div
                className="absolute bottom-6 left-0 top-6 w-1 rounded-full bg-gradient-to-b from-yellow via-yellow to-yellow/40"
                aria-hidden
              />
              <blockquote className="space-y-3 pl-4 md:pl-5">
                <p className="font-[var(--font-outfit)] text-[1.35rem] font-semibold leading-snug tracking-tight text-navy sm:text-2xl md:text-[1.75rem] lg:text-[2rem]">
                  {t("quoteMainLine1")}
                </p>
                <p className="font-[var(--font-outfit)] text-lg font-medium leading-snug text-navy/75 sm:text-xl md:text-2xl">
                  <span className="text-yellow">{t("quoteMainLine2")}</span>
                </p>
              </blockquote>
            </motion.div>

            <ul className="relative z-[1] mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4 md:mt-10">
              {quoteBeats.map((key, index) => (
                <motion.li
                  key={key}
                  initial={{ opacity: 0, y: 14, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.15 + index * 0.11,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ y: -2 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-4 shadow-sm ring-1 ring-navy/[0.04] backdrop-blur-sm"
                >
                  <span className="absolute inset-y-3 left-0 w-1 rounded-r-full bg-yellow opacity-90 transition group-hover:w-1.5" />
                  <span className="block pl-3 font-[var(--font-outfit)] text-sm font-bold leading-snug text-navy">
                    {t(key)}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="flex items-center gap-2 text-yellow"
      >
        <Users className="h-6 w-6" />
        <span className="text-xs font-black uppercase tracking-widest text-navy/80">
          {t("kicker")}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mt-2 font-[var(--font-montserrat)] text-3xl font-extrabold text-navy md:text-4xl"
      >
        {t("title")}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.05 }}
        className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600"
      >
        {t("intro")}
      </motion.p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 90, damping: 18 }}
          whileHover={{ y: -6 }}
          className={glassCard}
        >
          <div
            className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-yellow/15 blur-2xl transition duration-500 group-hover:bg-yellow/25"
            aria-hidden
          />
          <div className={iconWrap}>
            <Bus className="h-5 w-5" strokeWidth={2} />
          </div>
          <h3 className="font-[var(--font-outfit)] text-lg font-bold text-navy">
            {t("passengersTitle")}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {t("passengersText")}
          </p>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 90, damping: 18, delay: 0.05 }}
          whileHover={{ y: -6 }}
          className={glassCard}
        >
          <div
            className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-yellow/15 blur-2xl transition duration-500 group-hover:bg-yellow/25"
            aria-hidden
          />
          <div className={iconWrap}>
            <Package className="h-5 w-5" strokeWidth={2} />
          </div>
          <h3 className="font-[var(--font-outfit)] text-lg font-bold text-navy">
            {t("cargoTitle")}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {t("cargoText")}
          </p>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 90, damping: 18, delay: 0.08 }}
          whileHover={{ y: -6 }}
          className={glassCard}
        >
          <div
            className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-yellow/15 blur-2xl transition duration-500 group-hover:bg-yellow/25"
            aria-hidden
          />
          <div className={iconWrap}>
            <MapPin className="h-5 w-5" strokeWidth={2} />
          </div>
          <h3 className="font-[var(--font-outfit)] text-lg font-bold text-navy">
            {t("networkTitle")}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {t("networkText")}
          </p>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "spring", stiffness: 90, damping: 18, delay: 0.1 }}
          whileHover={{ y: -6 }}
          className={glassCard}
        >
          <div
            className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-yellow/15 blur-2xl transition duration-500 group-hover:bg-yellow/25"
            aria-hidden
          />
          <div className={iconWrap}>
            <Sparkles className="h-5 w-5" strokeWidth={2} />
          </div>
          <h3 className="font-[var(--font-outfit)] text-lg font-bold text-navy">
            {t("experienceTitle")}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {t("experienceText")}
          </p>
        </motion.article>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          whileHover={{ scale: 1.01 }}
          className="relative overflow-hidden rounded-2xl border border-yellow/35 bg-gradient-to-br from-navy via-[#0d1f35] to-[#0a1628] p-6 text-white shadow-xl shadow-navy/25 md:p-8"
        >
          <div className="pointer-events-none absolute -right-8 top-0 h-32 w-32 rounded-full bg-yellow/10 blur-3xl" aria-hidden />
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow/15 text-yellow ring-1 ring-yellow/30">
              <Target className="h-5 w-5" strokeWidth={2} />
            </span>
            <h3 className="font-[var(--font-outfit)] text-lg font-bold text-yellow">
              {t("missionTitle")}
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-white/85">{t("mission")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ type: "spring", stiffness: 72, damping: 18 }}
          whileHover={{ y: -6, scale: 1.01 }}
          className="group relative overflow-hidden rounded-2xl border border-yellow/30 bg-gradient-to-br from-white via-slate-50/95 to-yellow/[0.07] p-6 shadow-[0_16px_48px_-12px_rgba(10,22,40,0.18)] ring-1 ring-navy/[0.06] backdrop-blur-sm md:p-8"
        >
          <div
            className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-yellow/[0.12] blur-3xl transition duration-500 group-hover:bg-yellow/[0.2]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-navy/[0.04] blur-2xl"
            aria-hidden
          />
          <div className="mb-4 flex items-center gap-3">
            <motion.span
              initial={{ scale: 0.85, rotate: -8 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-[#132a45] text-yellow shadow-lg ring-2 ring-yellow/30"
            >
              <Eye className="h-5 w-5" strokeWidth={2} />
            </motion.span>
            <h3 className="font-[var(--font-outfit)] text-lg font-bold text-navy">
              {t("visionTitle")}
            </h3>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.45 }}
            className="relative text-sm leading-relaxed text-slate-700"
          >
            {t("vision")}
          </motion.p>
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow/40 to-transparent opacity-0 transition group-hover:opacity-100"
            aria-hidden
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55 }}
        className="relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy via-[#0c1f38] to-[#050a12] px-6 py-10 text-white shadow-2xl md:px-12"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 80% 20%, rgba(245,197,0,0.12), transparent), radial-gradient(ellipse 50% 40% at 10% 90%, rgba(255,255,255,0.06), transparent)"
          }}
        />
        <div className="pointer-events-none absolute -left-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-yellow/5 blur-3xl" aria-hidden />
        <h3 className="relative text-center font-[var(--font-outfit)] text-lg font-bold text-yellow md:text-left">
          {t("statsTitle")}
        </h3>
        <div className="relative mt-8 grid gap-8 sm:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-center"
          >
            <p className="font-[var(--font-outfit)] text-4xl font-extrabold tabular-nums text-white md:text-5xl">
              <AnimatedNumber end={4} durationMs={1600} />
            </p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-white/55">
              {t("stats.citiesLabel")}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="text-center"
          >
            <p className="font-[var(--font-outfit)] text-4xl font-extrabold tabular-nums text-white md:text-5xl">
              <AnimatedNumber end={7} durationMs={1900} />
            </p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-white/55">
              {t("stats.routesLabel")}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="text-center"
          >
            <p className="font-[var(--font-outfit)] text-4xl font-extrabold tabular-nums text-white md:text-5xl">
              <AnimatedNumber end={20} suffix=" kg" durationMs={2200} />
            </p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-white/55">
              {t("stats.supportLabel")}
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-14 font-[var(--font-outfit)] text-xl font-bold text-navy"
      >
        {t("valuesTitle")}
      </motion.h3>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {valueKeys.map((value) => (
          <motion.article
            key={value.key}
            variants={item}
            whileHover={{
              y: -8,
              rotate: value.key === "safety" ? -0.5 : 0.5,
              transition: { type: "spring", stiffness: 260, damping: 22 }
            }}
            className="group relative overflow-hidden rounded-2xl border border-white/80 bg-gradient-to-b from-white/95 to-slate-50/95 p-5 shadow-md ring-1 ring-navy/[0.06] backdrop-blur-sm"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow/50 to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="mb-3 inline-flex rounded-full bg-gradient-to-br from-navy to-[#152a45] p-2.5 text-yellow shadow-inner ring-2 ring-yellow/20 transition group-hover:ring-yellow/45">
              <value.icon className="h-5 w-5" strokeWidth={2} />
            </div>
            <h4 className="font-semibold text-navy">{t(`values.${value.key}`)}</h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              {t(`valuesDesc.${value.key}`)}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

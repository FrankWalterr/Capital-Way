"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=80";

const pillKeys = ["pill1", "pill2", "pill3", "pill4"] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
};

export function HeroSection() {
  const t = useTranslations("common.hero");
  const tFollow = useTranslations("common");
  const whatsappHref = `https://wa.me/258878771818?text=${encodeURIComponent(t("whatsappText"))}`;

  return (
    <section id="hero" className="relative min-h-[100svh] overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#050a12]/95 via-[#0a1628]/82 to-[#0a1628]/45"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#050a12]/90 via-transparent to-[#050a12]/50"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_40%,rgba(245,197,0,0.08),transparent_55%)]"
          aria-hidden
        />
      </div>

      <motion.aside
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-14 flex-col items-center justify-center border-r border-white/10 lg:pointer-events-auto lg:flex"
        aria-hidden={false}
      >
        <span
          className="mb-6 inline-block origin-center rotate-180 text-[10px] font-black uppercase tracking-[0.35em] text-white/40"
          style={{ writingMode: "vertical-rl" }}
        >
          {t("follow")}
        </span>
        <a
          href="https://instagram.com/capitalwaytransporte"
          target="_blank"
          rel="noreferrer"
          aria-label={tFollow("footer.instagramAria")}
          className="pointer-events-auto rounded-full border border-white/25 bg-white/5 p-2.5 text-white transition hover:border-yellow hover:bg-yellow/10 hover:text-yellow"
        >
          <Instagram className="h-4 w-4" />
        </a>
      </motion.aside>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-16 pt-24 sm:px-6 lg:pl-24 lg:pr-10 lg:pt-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="mb-5 text-[11px] font-black uppercase tracking-[0.28em] text-yellow/95"
          >
            {t("kicker")}
          </motion.p>

          <motion.p
            variants={item}
            className="mb-5 inline-flex rounded-full border border-white/20 bg-white/[0.07] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-md font-[var(--font-outfit)]"
          >
            {t("badge")}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-[var(--font-outfit)] text-4xl font-extrabold leading-[1.08] tracking-tight text-white drop-shadow-sm sm:text-5xl md:text-6xl md:leading-[1.08]"
          >
            {t("title")}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base font-light leading-relaxed text-slate-200/95 sm:text-lg md:text-xl"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap gap-3 sm:gap-4"
          >
            <motion.a
              href="#routes"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full bg-yellow px-7 py-3.5 text-sm font-black uppercase tracking-wide text-navy shadow-[0_0_28px_rgba(245,197,0,0.35)] transition hover:brightness-110"
            >
              {t("routesCta")}
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full border-2 border-white/80 bg-transparent px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:border-yellow hover:bg-white/[0.06] hover:text-yellow"
            >
              {t("secondaryCta")}
            </motion.a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap gap-2"
          >
            {pillKeys.map((key) => (
              <motion.span
                key={key}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.55 + pillKeys.indexOf(key) * 0.08,
                  duration: 0.4
                }}
                className="rounded-full border border-white/15 bg-black/35 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-white/90 backdrop-blur-md sm:text-[11px]"
              >
                {t(key)}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, type: "spring", stiffness: 120 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className="fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 ring-2 ring-white/20 lg:bottom-8 lg:right-8"
        aria-label={t("whatsappAria")}
      >
        <MessageCircle className="h-7 w-7" strokeWidth={1.75} />
      </motion.a>
    </section>
  );
}

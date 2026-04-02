"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Mail, MessageSquare, Phone, Send, User } from "lucide-react";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";

const FORM_BG_IMAGE =
  "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80";

type FormStatus = "idle" | "success" | "error";

const headerBlock = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const leftContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 }
  }
};

const leftItem = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

const formInner = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.06 }
  }
};

const formField = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  }
};

export function ContactSection() {
  const t = useTranslations("common.contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-20 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(245,197,0,0.09),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-navy/[0.03] blur-3xl"
        aria-hidden
      />

      <div className="container-padding relative mx-auto max-w-7xl">
        <motion.div
          variants={headerBlock}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mb-12 max-w-2xl"
        >
          <motion.span
            className="inline-block text-[11px] font-black uppercase tracking-[0.22em] text-yellow"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            {t("eyebrow")}
          </motion.span>
          <h2 className="mt-3 font-[var(--font-montserrat)] text-3xl font-extrabold text-navy md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{t("intro")}</p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <motion.div
            variants={leftContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-[#0e2340] to-[#050a12] p-8 text-white shadow-[0_28px_60px_-20px_rgba(10,22,40,0.45)] ring-1 ring-white/10 md:p-10"
          >
            <div
              className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-yellow/10 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 rounded-full bg-white/5 blur-2xl"
              aria-hidden
            />

            <motion.div variants={leftItem}>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow/95">
                {t("support")}
              </p>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/75">
                {t("supportLead")}
              </p>
            </motion.div>

            <motion.a
              variants={leftItem}
              href="tel:+258878771818"
              whileHover={{ x: 4, backgroundColor: "rgba(255,255,255,0.1)" }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 ring-1 ring-white/5"
            >
              <motion.span
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow text-navy shadow-lg"
                whileHover={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.45 }}
              >
                <Phone className="h-6 w-6" strokeWidth={2} />
              </motion.span>
              <span>
                <span className="block text-[10px] font-bold uppercase tracking-wider text-white/50">
                  {t("form.phoneHint")}
                </span>
                <span className="text-lg font-bold tracking-tight text-white">
                  (+258) 87 877 1818
                </span>
              </span>
            </motion.a>

            <motion.a
              variants={leftItem}
              href="mailto:info@capitalway.co.mz"
              whileHover={{ x: 4, backgroundColor: "rgba(255,255,255,0.1)" }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 ring-1 ring-white/5"
            >
              <motion.span
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-yellow/95 text-navy shadow-lg"
                whileHover={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.45 }}
              >
                <Mail className="h-6 w-6" strokeWidth={2} />
              </motion.span>
              <span className="min-w-0 break-all">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-white/50">
                  {t("form.emailHint")}
                </span>
                <span className="text-base font-semibold text-white underline decoration-yellow/40 underline-offset-4">
                  info@capitalway.co.mz
                </span>
              </span>
            </motion.a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/90 p-6 shadow-[0_24px_50px_-20px_rgba(10,22,40,0.12)] ring-1 ring-navy/[0.04] backdrop-blur-md md:p-8"
          >
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-navy via-yellow to-navy opacity-90"
              aria-hidden
            />

            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <Image
                src={FORM_BG_IMAGE}
                alt=""
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover opacity-[0.22] blur-[1px]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/92 to-white/95" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(245,197,0,0.14),transparent_55%)]" />
            </div>

            <motion.div
              variants={formInner}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.12 }}
              className="relative mt-6"
            >
              <motion.div variants={formField} className="space-y-2">
              <label
                htmlFor="contact-name"
                className="text-xs font-bold uppercase tracking-wide text-navy/70"
              >
                {t("form.name")}
              </label>
              <div className="relative">
                <User
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition group-focus-within:text-navy"
                  aria-hidden
                />
                <input
                  id="contact-name"
                  required
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder={t("form.namePlaceholder")}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/80 py-3.5 pl-11 pr-4 text-sm text-navy outline-none ring-0 transition placeholder:text-slate-400 focus:border-navy focus:bg-white focus:shadow-[0_0_0_3px_rgba(245,197,0,0.25)]"
                />
              </div>
              </motion.div>

              <motion.div variants={formField} className="mt-5 space-y-2">
              <label
                htmlFor="contact-email"
                className="text-xs font-bold uppercase tracking-wide text-navy/70"
              >
                {t("form.email")}
              </label>
              <div className="relative">
                <Mail
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                  aria-hidden
                />
                <input
                  id="contact-email"
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={t("form.emailPlaceholder")}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/80 py-3.5 pl-11 pr-4 text-sm text-navy outline-none transition placeholder:text-slate-400 focus:border-navy focus:bg-white focus:shadow-[0_0_0_3px_rgba(245,197,0,0.25)]"
                />
              </div>
              </motion.div>

              <motion.div variants={formField} className="mt-5 space-y-2">
              <label
                htmlFor="contact-message"
                className="text-xs font-bold uppercase tracking-wide text-navy/70"
              >
                {t("form.message")}
              </label>
              <div className="relative">
                <MessageSquare
                  className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-slate-400"
                  aria-hidden
                />
                <textarea
                  id="contact-message"
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder={t("form.messagePlaceholder")}
                  rows={5}
                  className="min-h-[140px] w-full resize-y rounded-xl border border-slate-200 bg-slate-50/80 py-3.5 pl-11 pr-4 text-sm text-navy outline-none transition placeholder:text-slate-400 focus:border-navy focus:bg-white focus:shadow-[0_0_0_3px_rgba(245,197,0,0.25)]"
                />
              </div>
              </motion.div>

              <motion.div variants={formField} className="mt-8">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-yellow py-3.5 text-sm font-black uppercase tracking-wide text-navy shadow-[0_8px_28px_-4px_rgba(245,197,0,0.45)] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[200px] sm:px-8"
              >
                {isSubmitting ? (
                  t("form.sending")
                ) : (
                  <>
                    <Send className="h-4 w-4" strokeWidth={2.5} />
                    {t("form.send")}
                  </>
                )}
              </motion.button>
              </motion.div>

              <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.p
                  key="success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mt-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800"
                >
                  {t("success")}
                </motion.p>
              ) : null}
              {status === "error" ? (
                <motion.p
                  key="error"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800"
                >
                  {t("error")}
                </motion.p>
              ) : null}
              </AnimatePresence>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

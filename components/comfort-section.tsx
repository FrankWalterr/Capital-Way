"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Bath,
  Coffee,
  Phone,
  Radio,
  Tv2,
  Usb,
  Wind
} from "lucide-react";

import {
  ACIcon,
  AmenitiesIcon,
  ComfortIcon,
  SeatIcon,
  TVIcon,
  USBIcon,
  WifiIcon
} from "@/components/icons/comfort-icons";

type Card = {
  key: "c1" | "c2" | "c3" | "c4" | "c5" | "c6";
  icon: React.ReactNode;
  icon2?: React.ReactNode;
  hasMiniGrid?: boolean;
};

export function ComfortSection() {
  const t = useTranslations("common.comfort");
  const cards: Card[] = useMemo(
    () => [
      { key: "c1", icon: <ComfortIcon /> },
      { key: "c2", icon: <SeatIcon /> },
      { key: "c3", icon: <ACIcon /> },
      { key: "c4", icon: <TVIcon /> },
      { key: "c5", icon: <USBIcon />, icon2: <WifiIcon /> },
      { key: "c6", icon: <AmenitiesIcon />, hasMiniGrid: true }
    ],
    []
  );

  const total = cards.length;
  const row = useMemo(() => [...cards, ...cards], [cards]);

  const [perView, setPerView] = useState(3);
  const [containerWidth, setContainerWidth] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const gap = 20;
  const cardWidth = containerWidth
    ? (containerWidth - gap * (perView - 1)) / perView
    : 0;

  const singleSetWidth =
    cardWidth > 0 ? total * cardWidth + (total - 1) * gap : 0;

  const scrollDuration = useMemo(
    () => Math.max(14, singleSetWidth / 42),
    [singleSetWidth]
  );

  useEffect(() => {
    function updatePerView() {
      const w = window.innerWidth;
      if (w < 640) setPerView(1);
      else if (w < 1024) setPerView(2);
      else setPerView(3);
    }

    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  useEffect(() => {
    if (!trackRef.current) return;

    const el = trackRef.current;
    const ro = new ResizeObserver(() => setContainerWidth(el.clientWidth));
    setContainerWidth(el.clientWidth);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section id="comfort" className="relative overflow-hidden bg-[#080F1E] py-24 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(245,197,0,0.12), transparent 55%)"
        }}
      />

      <div className="container-padding relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <div className="inline-flex rounded-full bg-white/[0.06] px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-yellow ring-1 ring-yellow/20">
            {t("badge")}
          </div>

          <h2 className="mt-6 font-[var(--font-montserrat)] text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <div className="mt-4 h-1 w-[60px] rounded-full bg-yellow shadow-[0_0_20px_rgba(245,197,0,0.45)]" />
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/75">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="mt-12">
          <div className="relative -mx-1 overflow-hidden rounded-3xl px-1 py-1">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#080F1E] to-transparent sm:w-14"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#080F1E] to-transparent sm:w-14"
              aria-hidden
            />

            <div ref={trackRef} className="overflow-hidden">
              <motion.div
                className="flex w-max"
                style={{ gap }}
                animate={
                  singleSetWidth > 0
                    ? { x: [0, -singleSetWidth] }
                    : { x: 0 }
                }
                transition={{
                  x: {
                    duration: scrollDuration,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  }
                }}
              >
                {row.map((card, i) => (
                  <motion.article
                    key={`${card.key}-${i}`}
                    style={{ width: cardWidth || undefined }}
                    className="group min-h-[300px] flex-none rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#0A1628] to-[#0F2040] p-8 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55)] ring-1 ring-inset ring-white/[0.04] transition duration-300 hover:border-yellow/30 hover:shadow-[0_28px_70px_-14px_rgba(245,197,0,0.12)]"
                  >
                    <div className="border-t-[3px] border-yellow pt-1">
                      <div className="flex items-start gap-4 pt-2">
                        <div className="flex shrink-0 items-center gap-3">
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow/[0.12] text-yellow shadow-inner ring-1 ring-yellow/20 transition group-hover:bg-yellow/[0.18]">
                            <div className="h-7 w-7 [&_svg]:block">{card.icon}</div>
                          </div>
                          {card.icon2 ? (
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow/[0.12] text-yellow shadow-inner ring-1 ring-yellow/20 transition group-hover:bg-yellow/[0.18]">
                              <div className="h-7 w-7 [&_svg]:block">
                                {card.icon2}
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <h3 className="mt-6 font-[var(--font-montserrat)] text-xl font-bold leading-snug text-white">
                        {t(`cards.${card.key}.title`)}
                      </h3>

                      {(() => {
                        const sub = t(`cards.${card.key}.subtitle`);
                        if (!sub || !String(sub).trim()) return null;
                        return (
                          <p className="mt-2 font-[var(--font-sora)] text-sm italic text-yellow/95">
                            {sub}
                          </p>
                        );
                      })()}

                      <p className="mt-4 text-sm leading-relaxed text-white/70">
                        {t(`cards.${card.key}.description`)}
                      </p>

                      {card.hasMiniGrid ? (
                        <div className="mt-8 grid grid-cols-4 gap-3 sm:gap-4">
                          {[
                            { Icon: Phone, labelKey: "phone" },
                            { Icon: Usb, labelKey: "usb" },
                            { Icon: Wind, labelKey: "wind" },
                            { Icon: Tv2, labelKey: "tv" },
                            { Icon: Radio, labelKey: "radio" },
                            { Icon: Coffee, labelKey: "coffee" },
                            { Icon: WifiIcon, labelKey: "wifi" },
                            { Icon: Bath, labelKey: "bath" }
                          ].map(({ Icon, labelKey }) => (
                            <div
                              key={labelKey}
                              className="flex flex-col items-center gap-2 rounded-xl bg-white/[0.04] py-3 text-center text-[10px] font-medium uppercase tracking-wide text-white/65 ring-1 ring-white/10"
                            >
                              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy/80 text-yellow">
                                <Icon className="h-4 w-4" />
                              </div>
                              <span className="px-1 leading-tight">
                                {t(`mini.${labelKey}`)}
                              </span>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

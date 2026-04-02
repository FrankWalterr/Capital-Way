import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { LocaleHtmlLang } from "@/components/locale-html-lang";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = routing.locales.includes(locale as "pt" | "en")
    ? locale
    : "pt";

  const canonicalUrl =
    safeLocale === "pt"
      ? "https://capitalway.co.mz/pt"
      : "https://capitalway.co.mz/en";

  if (safeLocale === "pt") {
    const description =
      "Viaje com conforto e seguranca. Rotas: Maputo, Maxixe, Chimoio e Tete. Bilhetes a partir de 1.000 MZN.";
    return {
      title: "Capital Way | Transporte Seguro em Mocambique",
      description,
      keywords: [
        "transporte mocambique",
        "autocarro maputo",
        "capital way",
        "bilhetes",
        "chimoio",
        "tete",
        "maxixe"
      ],
      alternates: {
        canonical: canonicalUrl,
        languages: {
          pt: "/pt",
          en: "/en"
        }
      },
      openGraph: {
        title: "Capital Way | Conectamos Destinos com Seguranca",
        description,
        url: "https://capitalway.co.mz",
        siteName: "Capital Way",
        locale: "pt_MZ",
        type: "website"
      }
    };
  }

  const description =
    "Travel with comfort and safety. Routes: Maputo, Maxixe, Chimoio and Tete. Tickets from 1,000 MZN.";
  return {
    title: "Capital Way | Safe Transport in Mozambique",
    description,
    keywords: [
      "transport mozambique",
      "bus maputo",
      "capital way",
      "tickets",
      "chimoio",
      "tete",
      "maxixe"
    ],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        pt: "/pt",
        en: "/en"
      }
    },
    openGraph: {
      title: "Capital Way | Connecting Destinations with Safety",
      description,
      url: "https://capitalway.co.mz/en",
      siteName: "Capital Way",
      locale: "en_US",
      type: "website"
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "pt" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <LocaleHtmlLang />
      {children}
    </NextIntlClientProvider>
  );
}

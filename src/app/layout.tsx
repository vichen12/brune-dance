import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/components/providers/I18nProvider";

const playfair = Playfair_Display({
  variable: "--font-playfair-loaded",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato-loaded",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  icons: { icon: "/icon.jpg", apple: "/icon.jpg" },
  title: "Brunela Dance Trainer | Ballet · PBT · PCT · Pilates · Stretching — Barcelona",
  description:
    "Profesora de ballet, PBT, PCT, Pilates Reformer y Stretching en Barcelona. Clases presenciales y online. Brunela — bailarina y coreógrafa de Argentina.",
  keywords:
    "ballet Barcelona, dance trainer, PBT, PCT, pilates reformer, stretching, clases de ballet, ballet online, coreógrafa Barcelona",
  authors: [{ name: "Brunela Dance Trainer" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Brunela Dance Trainer | Barcelona",
    description:
      "Clases de ballet, PBT, PCT, Pilates Reformer y Stretching en Barcelona y online.",
    images: [{ url: "/fotos-landing/about-hero.jpg.jpg", width: 1200, height: 630 }],
    url: "https://brunela.dance",
    locale: "es_ES",
    alternateLocale: ["en_GB", "fr_FR"],
    siteName: "Brunela Dance Trainer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brunela Dance Trainer | Barcelona",
    description: "Clases de ballet, PBT, PCT, Pilates y Stretching en Barcelona y online.",
    images: ["/fotos-landing/about-hero.jpg.jpg"],
  },
  alternates: {
    canonical: "https://brunela.dance",
    languages: {
      es: "https://brunela.dance",
      en: "https://brunela.dance?lang=en",
      fr: "https://brunela.dance?lang=fr",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${playfair.variable} ${lato.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Brunela Dance Trainer",
              description:
                "Profesora de ballet, PBT, PCT, Pilates Reformer y Stretching en Barcelona. Clases presenciales y online.",
              telephone: "+34627323794",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Barcelona",
                addressCountry: "ES",
              },
              sameAs: [
                "https://www.instagram.com/brunela.dance",
                "https://www.tiktok.com/@brunela.dance",
                "https://www.youtube.com/@bruneladance",
                "https://www.facebook.com/brunela.dance",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full antialiased" suppressHydrationWarning>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}

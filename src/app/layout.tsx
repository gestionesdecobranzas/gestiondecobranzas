import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Gestión de Cobranzas SAS - Gateway de Pagos Inteligente Argentina",
    template: "%s | Gestión de Cobranzas SAS"
  },
  description: "🚀 Plataforma líder en Argentina para gestión de cobranzas y gateway de pagos. Transferencias automáticas hasta 10x más económicas que tarjetas. ✅ Sin contracargos ✅ Acreditación inmediata ✅ Soporte 24/7",
  keywords: [
    "gestión cobranzas argentina",
    "gateway pagos", 
    "transferencias automáticas",
    "recaudación inteligente",
    "fintech argentina",
    "pagos online",
    "cobros automáticos",
    "sistema de pagos",
    "procesador pagos",
    "api pagos argentina"
  ],
  authors: [{ name: "Gestión de Cobranzas SAS", url: "https://gestiondecobranzas.com" }],
  creator: "Gestión de Cobranzas SAS",
  publisher: "Gestión de Cobranzas SAS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://gestiondecobranzas.com",
    siteName: "Gestión de Cobranzas SAS",
    title: "Gateway de Pagos Inteligente - Gestión de Cobranzas SAS",
    description: "Revoluciona tu sistema de pagos con transferencias automáticas hasta 10x más económicas. Sin contracargos, acreditación inmediata y soporte 24/7.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gestión de Cobranzas SAS - Gateway de Pagos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gateway de Pagos Inteligente - Gestión de Cobranzas SAS",
    description: "Transferencias automáticas hasta 10x más económicas que tarjetas. Sin contracargos y acreditación inmediata.",
    images: ["/og-image.jpg"],
    creator: "@GestionCobranzas",
  },
  alternates: {
    canonical: "https://gestiondecobranzas.com",
  },
  category: "fintech",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Gestión de Cobranzas SAS",
  "description": "Plataforma líder en Argentina para gestión de cobranzas y gateway de pagos con transferencias automáticas.",
  "url": "https://gestiondecobranzas.com",
  "logo": "https://gestiondecobranzas.com/logo.png",
  "image": "https://gestiondecobranzas.com/og-image.jpg",

  "email": "adm@gestiondecobranzas.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Corrientes 1234, Piso 10",
    "addressLocality": "Ciudad Autónoma de Buenos Aires",
    "addressRegion": "CABA",
    "postalCode": "C1043AAZ",
    "addressCountry": "AR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-34.6037",
    "longitude": "-58.3816"
  },
  "openingHours": [
    "Mo-Fr 09:00-18:00",
    "Sa 09:00-13:00"
  ],
  "serviceType": "Payment Processing",
  "areaServed": {
    "@type": "Country",
    "name": "Argentina"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Gestión de Pagos",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Gateway de Pagos",
          "description": "Procesamiento de pagos con tarjetas y transferencias"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Transferencias Automáticas",
          "description": "Sistema automatizado de transferencias bancarias"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "API de Integración",
          "description": "API para integración con sistemas existentes"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": [
    "https://www.linkedin.com/company/gestion-cobranzas-sas",
    "https://twitter.com/GestionCobranzas"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50">
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}

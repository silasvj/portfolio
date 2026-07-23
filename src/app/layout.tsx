import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CursorProvider } from "@/components/cursor-provider";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const baseUrl = "https://silasvasques.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Silas Vasques — AI Design Engineer & Product Designer",
    template: "%s | Silas Vasques",
  },
  description:
    "Product Designer com 8 anos de experiência. Projeto experiências, valido com usuários e entrego no código.",
  keywords: [
    "Product Designer",
    "AI Design Engineer",
    "Design Systems",
    "UX Design",
    "UI Design",
    "TypeScript",
    "React",
    "Fintech",
    "HealthTech",
    "Portfolio",
    "Silas Vasques",
  ],
  authors: [{ name: "Silas Vasques" }],
  creator: "Silas Vasques",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    siteName: "Silas Vasques — Portfolio",
    title: "Silas Vasques — AI Design Engineer & Product Designer",
    description:
      "Product Designer com 8 anos de experiência. Projeto experiências, valido com usuários e entrego no código.",
    url: baseUrl,
    images: [
      {
        url: "/portfolio/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Silas Vasques — AI Design Engineer & Product Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Silas Vasques — AI Design Engineer & Product Designer",
    description:
      "Product Designer com 8 anos de experiência. Projeto experiências, valido com usuários e entrego no código.",
    images: ["/portfolio/images/og-image.svg"],
    creator: "@silasvasques",
  },
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
  icons: {
    icon: [
      { url: "/portfolio/favicon.ico", sizes: "any" },
      { url: "/portfolio/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/portfolio/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/portfolio/site.webmanifest",
  alternates: {
    canonical: baseUrl,
    languages: {
      "pt-BR": baseUrl,
      "en-US": `${baseUrl}/en`,
    },
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--primary)] focus:text-white focus:rounded-lg focus:outline-none"
        >
          Pular para o conteúdo principal / Skip to main content
        </a>
        <ThemeProvider>
          <CursorProvider />
          <div className="grid-pattern fixed inset-0 pointer-events-none z-0 opacity-[0.25]" />
          <div className="fixed inset-0 overflow-x-hidden">
            <Header />
            <main id="main-content" className="pt-16 relative z-10">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Pages/Header";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://shitalsapkotaportfolio.vercel.app/"),
  title: {
    default: "Shital Sapkota | Full Stack Developer",
    template: "%s | Shital Sapkota"
  },
  description: "Professional portfolio of Shital Sapkota, a Full Stack Developer specializing in Next.js, TypeScript, and modern web technologies.",
  keywords: ["Shital Sapkota", "Full Stack Developer", "Portfolio", "Next.js", "React", "TypeScript", "Web Development"],
  authors: [{ name: "Shital Sapkota" }],
  creator: "Shital Sapkota",
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Shital Sapkota | Full Stack Developer",
    description: "Professional portfolio of Shital Sapkota, a Full Stack Developer specializing in Next.js, TypeScript, and modern web technologies.",
    siteName: "Shital Sapkota Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shital Sapkota | Full Stack Developer",
    description: "Professional portfolio of Shital Sapkota, a Full Stack Developer specializing in Next.js, TypeScript, and modern web technologies.",
    creator: "@shitalsapkota",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <Header />
          <main className="flex-1 md:ml-72">
            {children}
          </main>
        </div>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}


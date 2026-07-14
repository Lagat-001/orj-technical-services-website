import type { Metadata, Viewport } from "next";
import { Montserrat, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const kufi = Noto_Kufi_Arabic({
  variable: "--font-kufi",
  subsets: ["arabic"],
  weight: ["500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ORJ Technical Services L.L.C. — AC, Ventilation & Fit-Out Experts in Dubai",
  description:
    "Professional air conditioning, ventilation, fit-out, electrical, plumbing and technical maintenance services in Dubai, UAE. Licensed since 2014.",
  keywords:
    "AC services Dubai, ventilation Dubai, fit-out Dubai, HVAC maintenance UAE, ORJ Technical Services",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#155536",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${kufi.variable} antialiased`}>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <TopBar />
        <div className="sticky-wrap">
          <Navbar />
        </div>
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

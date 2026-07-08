import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "R & V Minerals SpA | Minería con compromiso, transparencia y eficiencia",
  description:
    "R & V Minerals SpA conecta la producción minera chilena con los mercados globales a través del desarrollo, procesamiento y comercialización de minerales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${barlowCondensed.variable} ${inter.variable} bg-ink-900 font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import "./globals.css";

import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

// need new font for 'fa' langoage
const Iranian = localFont({
  src: [
    {
      path: "../../public/font/Iranian/IranianSans.otf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-Iranian",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" className={`dark ${figtree.variable} ${Iranian.variable}`}>
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] dark:bg-base-100 dark:text-base-content">
        <Header />
        <div className="flex-1 flex">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

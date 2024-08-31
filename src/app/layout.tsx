import "./globals.css";

import { Figtree } from "next/font/google";
import localFont from "next/font/local";

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
    <html dir="rtl" className={`${figtree.variable} ${Iranian.variable}`}>
      <body className="flex flex-col min-h-screen font-bold uppercase">
        <header className="bg-gray-300 flex items-center justify-center h-20">
          دوره معماری ریکت
        </header>
        <div className="flex-1 flex">{children}</div>
        <footer
          className="flex bg-gray-300 items-center justify-center
         h-20"
        >
          FOOTER
        </footer>
      </body>
    </html>
  );
}

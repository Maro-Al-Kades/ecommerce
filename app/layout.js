import "./globals.css";
import Header from "@/components/Global/Header";
import { Tajawal } from "next/font/google";
import Footer from "@/components/Global/Footer";
import { Providers } from "./providers";
import NextTopLoader from "nextjs-toploader";

const font = Tajawal({
  weight: ["300", "500", "800", "900"],
  style: "normal",
  variant: "medium",
  display: "swap",
  fallback: "fallback",
  subsets: ["arabic"],
});

export const metadata = {
  title: "M.Commerce",
  description: "One of the MARO-SYSTEMS System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${font.className} antialiased px-14 py-4`}>
        <Providers>
          <Header />
          <main className="flex-grow">
            <NextTopLoader color="#E11D48" crawl={false} showSpinner={false} />
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

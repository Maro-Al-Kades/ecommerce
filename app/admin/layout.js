import "./globals.css";
import { Tajawal } from "next/font/google";
import { Providers } from "@/app/providers";
import Footer from "@/components/Global/Footer";
import Header from "@/components/Global/Header";
import AdminRightBar from "@/components/other/AdminRightBar";
import UserRightBar from "@/components/other/UserRightBar";

const font = Tajawal({
  weight: ["300", "500", "800", "900"],
  style: "normal",
  variant: "medium",
  display: "swap",
  fallback: "fallback",
  subsets: ["arabic"],
});

export const metadata = {
  title: "User",
  description: "One of the MARO-SYSTEMS System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${font.className} antialiased px-14 py-4`}>
        <Providers>
          <Header />
          <main className="py-8 flex flex-row items-start justify-start gap-10">
            <AdminRightBar />
            <div className="flex-1">{children}</div>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import Sidebar from "@/components/ui/sidebar";
import { Noto_Kufi_Arabic } from "next/font/google";

const kufi = Noto_Kufi_Arabic({ subsets: ["arabic"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Hamuza - ???? ?????? ?????????",
  description: "???? ??????? ?????? ???????? ??????? ??????????.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={kufi.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[280px_1fr]">
            <Sidebar />
            <main className="bg-background">
              <div className="container-ar py-8">{children}</div>
            </main>
          </div>
          <Toaster richColors position="top-left" dir="rtl" />
        </ThemeProvider>
      </body>
    </html>
  );
}

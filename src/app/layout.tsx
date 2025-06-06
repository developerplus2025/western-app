import type { Metadata } from "next";
// "use client";

// import { usePathname } from "next/navigation";
// import { AnimatePresence, motion } from "framer-motion";
import { Inter } from "next/font/google";
import "./globals.css";
// import 'fumadsocs-ui/dist/style.css';
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { DocsNavigation } from "@/components/DocsNavigation";
import { CMDK } from "@/components/command-menu";
// import { Toaster } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/ProgressBarProvider";
import Footer from "@/components/footer";
import { ToasterSonner } from "../components/ui/sonner";
import CookieAlert from "@/components/cookie-alert";
import { RootProvider } from "fumadocs-ui/provider";
import FrameVideo from "./home/components/frame-video";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Western: Buy and Sell Pi Network",
  description: "Western App ",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const pathname = usePathname();
  return (
    <>
      <html
        suppressHydrationWarning
        lang="en"
        className={`${GeistSans.className} custom_command_scroll dark`}
        style={{ colorScheme: "dark" }}
      >
        <head />
        <body className="relative overflow-x-hidden antialiased">
          <Analytics />

          <CookieAlert />
          <ThemeProvider enableSystem attribute="class" defaultTheme="dark">
            <Navigation />
            <DocsNavigation />
            <Toaster />
            <ToasterSonner
              hotkey={["alt + C"]}
              toastOptions={{
                unstyled: false,
                classNames: {
                  cancelButton: "bg-orange-400",
                  closeButton:
                    "dark:bg-black left-[325px] top-1/2 -translate-y-1/2 border border-[#404040] transition-[background] transition-colors  ease-out duration-500 bg-white hover:bg-muted dark:hover:bg-white dark:hover:text-black",
                },
              }}
              closeButton
              className="top-[60px]"
              position="top-center"
            />
            <RootProvider>{children}</RootProvider>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}

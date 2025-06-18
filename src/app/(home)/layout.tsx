import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Decent: A Useful Platform For Musicians",
  description: "Decent - Home",
};
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}

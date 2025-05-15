import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Audio | Western",
  description: "Western - Audio",
};
export default function AudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}

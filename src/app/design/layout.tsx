import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Design | Western",
  description: "Western - Design",
};

export default function DesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}

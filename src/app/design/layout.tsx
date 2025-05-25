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
  return (
    <div className="flex flex-col">
      <div className="flex h-[58.8px] border-b"></div>
      {children}
    </div>
  );
}

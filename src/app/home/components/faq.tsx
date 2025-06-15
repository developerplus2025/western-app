// Dependencies: pnpm install lucide-react

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { Plus } from "lucide-react";
import Image from "next/image";
const branch = [
  {
    id: "1",
    src: "tailwindcss",
  },
  {
    id: "2",
    src: "framer",
  },
  {
    id: "3",
    src: "shadcnui",
  },
  {
    id: "4",
    src: "react",
  },
  {
    id: "5",
    src: "nextjs",
  },
  {
    id: "6",
    src: "swc",
  },
];
const items = [
  {
    id: "1",
    title: "What makes this software unique?",
    content:
      "Our music software prioritizes user experience and performance. Built with TypeScript, it ensures strong type safety, follows accessibility standards, and includes thorough documentation with regular updates.",
  },
  {
    id: "2",
    title: "How can I customize the interface?",
    content:
      "You can use CSS variables for global styling, or className and style props for specific components. We support CSS modules, Tailwind CSS, and built-in dark mode.",
  },
  {
    id: "3",
    title: "Is the software optimized for performance?",
    content:
      "Yes. The software features tree-shaking, code splitting, and minimal runtime overhead. Most components are lightweight—under 5KB gzipped.",
  },
  {
    id: "4",
    title: "Is the software accessible?",
    content:
      "All features follow WAI-ARIA guidelines with proper ARIA attributes, keyboard navigation, and screen reader support. We regularly test with NVDA, VoiceOver, and JAWS.",
  },
  {
    id: "5",
    title: "What platforms are supported?",
    content:
      "The software works on Windows, macOS, and modern browsers. The web version also adapts well to mobile devices.",
  },
  {
    id: "6",
    title: "Is dark mode supported?",
    content:
      "Yes, dark mode is built-in and can be toggled based on your system settings or personal preferences.",
  },
  {
    id: "7",
    title: "How do I import music?",
    content:
      "You can import music files from your computer, via direct links, or from cloud platforms like Google Drive and Dropbox.",
  },
  {
    id: "8",
    title: "Does it require an internet connection?",
    content:
      "No, internet is not required for core functionality. However, features like syncing and updates do require connectivity.",
  },
];

export default function AccordionFAQ() {
  return (
    <div className="flex w-full justify-center px-[3rem]">
      <div className="flex w-full flex-col-reverse items-center gap-[2rem] rounded-lg">
        <div className="w-[800px] space-y-4 divide-y-1">
          {items.map((item) => (
            <div key={item.id}>
              <h1 className="font-medium">{item.title}</h1>
              <p className="text-[#a1a1a1]">{item.content}</p>
            </div>
          ))}
        </div>
        <div className="flex h-full w-[700px] flex-col items-center justify-center gap-[2rem]">
          <h1 className="text-center text-[3.5rem] font-bold leading-[4.5rem] tracking-tighter text-white sm:text-5xl xl:text-[3rem]">
            Frequently asked questions
          </h1>
        </div>
      </div>
    </div>
  );
}

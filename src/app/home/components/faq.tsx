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
      "This software stands out with its developer-friendly, modern design built entirely using TypeScript for strong type safety and easier long-term maintenance. Unlike many alternatives, it prioritizes both user experience and code quality. Accessibility is built-in from the ground up, strictly following WCAG and WAI-ARIA standards. Rich, beginner-friendly documentation is continuously updated alongside new features, ensuring users stay informed. With a lightweight core, minimal dependencies, and modern tooling, the result is a fast, reliable, and delightful experience for developers and end users alike.",
  },
  {
    id: "2",
    title: "How can I customize the interface?",
    content:
      "Customization is flexible and extensive. CSS variables let you easily theme the entire app—colors, typography, spacing, and more. For detailed control, you can use `className` or inline `style` props on any component. The software integrates smoothly with popular styling approaches like Tailwind CSS and CSS Modules, so it fits naturally into almost any frontend stack. Built-in dark mode can be toggled manually or synced with system settings, and everything is designed to be override-friendly for teams with custom branding needs.",
  },
  {
    id: "3",
    title: "Is the software optimized for performance?",
    content:
      "Performance is a key focus throughout the entire architecture. Code-splitting and tree-shaking reduce initial bundle size, while lazy loading defers non-essential features until needed. Each component is optimized to be small (under 5KB gzipped), avoiding unnecessary re-renders via React memoization techniques. Virtualized lists are used when rendering large datasets, minimizing DOM overhead. These strategies ensure the software remains highly responsive—even when handling thousands of tracks or running on lower-end hardware.",
  },
  {
    id: "4",
    title: "Is the software accessible?",
    content:
      "Yes, accessibility is treated as a first-class feature. Every interactive component includes semantic ARIA roles, keyboard navigation, and focus management to support all users. We've tested the app with widely used screen readers such as NVDA (Windows), VoiceOver (macOS/iOS), and JAWS to ensure compatibility. Our design process also emphasizes color contrast, logical tab order, and motion reduction for users with sensitivity. The goal is to create a software experience that works equally well for everyone, regardless of their physical abilities or devices.",
  },
  {
    id: "5",
    title: "What platforms are supported?",
    content:
      "The software runs smoothly across major platforms. Native desktop apps are available for Windows and macOS, enabling offline access and full system integration. There's also a web version that works across all modern browsers including Chrome, Firefox, Safari, and Edge. The UI is fully responsive, adapting seamlessly to tablets and mobile phones. We regularly test on various devices and operating systems to ensure broad compatibility, giving you flexibility to work wherever you are.",
  },
  {
    id: "6",
    title: "Is dark mode supported?",
    content:
      "Yes, dark mode is fully supported and intelligently integrated. By default, it follows your system’s light/dark setting, but you can also switch themes manually from within the app. All interface elements are designed to maintain readability and contrast in both light and dark environments. Developers can also adjust the theme using CSS variables for fine-tuned control, allowing dark mode to blend with custom branding or visual preferences.",
  },
  {
    id: "7",
    title: "How do I import music?",
    content:
      "Importing music is simple and flexible. You can drag and drop files directly, select folders using the file picker, or paste URLs to fetch remote content. It also connects with cloud services like Google Drive and Dropbox, letting you pull in files from your cloud storage instantly. Once imported, tracks are scanned, tagged, and added to your personal library. Features like batch metadata editing, playlist grouping, and multi-format support make organizing and managing your collection easy and intuitive.",
  },
  {
    id: "8",
    title: "Does it require an internet connection?",
    content:
      "No, core features are fully functional offline. Playback, file management, editing, and most user interactions do not require a connection. You can work entirely locally in a studio or on the move. However, certain features—such as cloud syncing, software updates, or access to online help—will require an internet connection. When online, the app checks for new versions and security patches automatically, keeping your system up to date with minimal effort.",
  },
];

export default function AccordionFAQ() {
  return (
    <div className="flex w-full justify-center px-[3rem]">
      <div className="flex w-full flex-col-reverse items-center gap-[1rem] rounded-lg">
        <div className="flex w-[800px] flex-col gap-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-2 border-t pt-4 first:border-t-0 last:border-b-0"
            >
              <h1 className="font-medium">{item.title}</h1>
              <p className="text-sm text-[#a1a1a1]">{item.content}</p>
            </div>
          ))}
        </div>
        <div className="flex h-full w-[700px] flex-col items-center justify-center gap-[2rem]">
          <h1 className="text-center text-[2rem] font-bold leading-[4.5rem] tracking-tighter text-white sm:text-[2rem] xl:text-[2rem]">
            Frequently asked questions
          </h1>
        </div>
      </div>
    </div>
  );
}

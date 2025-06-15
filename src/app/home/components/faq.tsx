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
      "Our music software stands out due to its thoughtful design and developer-focused features. Unlike many competitors, it prioritizes both user experience and technical excellence. The software is built entirely with TypeScript, providing a strongly typed environment that reduces bugs and increases maintainability. We’ve paid special attention to accessibility, adhering to WCAG and WAI-ARIA guidelines to ensure everyone can use the software seamlessly. The documentation is rich, beginner-friendly, and constantly updated with each new feature or patch release. Combined with a lightweight and modern architecture, this makes the software not only powerful but also a pleasure to work with.",
  },
  {
    id: "2",
    title: "How can I customize the interface?",
    content:
      "You have full control over the look and feel of the application. For global themes, CSS variables are provided out of the box, allowing you to quickly change primary colors, fonts, spacing, and more. If you're working at the component level, both `className` and `style` props are supported for fine-grained styling. The software is compatible with various styling methods, including CSS Modules and Tailwind CSS, which means you can integrate it into virtually any design system or existing project with ease. Furthermore, dark mode support is natively built in and easy to toggle, offering a modern visual experience.",
  },
  {
    id: "3",
    title: "Is the software optimized for performance?",
    content:
      "Absolutely. From the ground up, performance has been a key focus in our development. The application uses tree-shaking to eliminate unused code, code splitting to reduce initial load time, and lazy loading to defer non-critical features. Most components are lightweight and modular, with each being under 5KB gzipped in size. We’ve also minimized runtime dependencies and avoided unnecessary re-renders by applying memoization and virtualized lists where appropriate. The end result is a blazing-fast experience, whether you're opening the software, navigating menus, or working with large music libraries.",
  },
  {
    id: "4",
    title: "Is the software accessible?",
    content:
      "Yes, accessibility is a first-class concern in our development process. Every interactive element is designed with proper ARIA roles and attributes to support screen readers and assistive technologies. Keyboard navigation is fully supported, and focus management is carefully implemented to ensure a smooth and predictable experience. We regularly test the interface with popular screen readers such as NVDA (Windows), VoiceOver (macOS and iOS), and JAWS. Our aim is to make the software usable for everyone, regardless of ability or device.",
  },
  {
    id: "5",
    title: "What platforms are supported?",
    content:
      "The software is built to be cross-platform and accessible from nearly any modern environment. Native builds are available for Windows and macOS, offering full offline functionality. The web-based version runs smoothly on all major browsers including Chrome, Firefox, Safari, and Edge. Mobile responsiveness is also a priority—whether you're on a tablet or a smartphone, the interface adapts automatically to deliver an optimal user experience. We continue to test compatibility on a wide range of devices to ensure broad accessibility.",
  },
  {
    id: "6",
    title: "Is dark mode supported?",
    content:
      "Yes, dark mode is integrated directly into the core of the application. It automatically respects your system's theme preferences, switching between light and dark modes as needed. You can also manually toggle it from within the app settings, giving you full control over your visual experience. The dark theme has been carefully designed for legibility and contrast, ensuring that the interface remains comfortable to use for extended periods, particularly in low-light environments. Custom theme variables also allow developers to tweak the color scheme to fit their branding.",
  },
  {
    id: "7",
    title: "How do I import music?",
    content:
      "Importing music is easy and versatile. Users can drag and drop files directly into the application, use a file picker to browse local directories, or paste in URLs to download files from the internet. The software also integrates with popular cloud platforms such as Google Drive and Dropbox, allowing you to connect your account and import music directly. Once added, the files are processed quickly and organized in a library, where you can edit metadata, group tracks into playlists, and more. We support a wide range of audio formats, ensuring compatibility with most music collections.",
  },
  {
    id: "8",
    title: "Does it require an internet connection?",
    content:
      "For the most part, no. The core features of the software, such as playback, library management, and local file editing, are all fully functional without an internet connection. This means you can use the application offline, whether you're in a studio with limited connectivity or on the go. However, certain features—such as syncing with cloud storage, checking for updates, or accessing online help—do require a connection. When connected, the software can automatically check for new releases and security patches to keep your system up to date.",
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

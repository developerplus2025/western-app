"use client";
import classNames from "classnames";
import { motion, useInView } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, {
  PointerEvent,
  FocusEvent,
  useEffect,
  useRef,
  useState,
  CSSProperties,
} from "react";
import Image from "next/image";
import { LinkPreview } from "@/components/ui/link-preview";
import { Toaster, toast } from "sonner";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import {
  EllipsisVertical,
  Heart,
  House,
  ListPlus,
  Play,
  PlayCircle,
  Podcast,
  Save,
  SkipBack,
  SkipForward,
  UserRound,
} from "lucide-react";
import { Library } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { Search } from "lucide-react";
import { CalendarPlus } from "lucide-react";
import { Mic } from "lucide-react";
import { CirclePlay } from "lucide-react";
import { LayoutGrid } from "lucide-react";
import { Radio } from "lucide-react";
import { ListMusic } from "lucide-react";
import { Clock } from "lucide-react";
import { Guitar } from "lucide-react";
import { PanelGroup, Panel } from "react-resizable-panels";
import { Music2 } from "lucide-react";
import { ThumbsUp } from "lucide-react";
import { Pizza } from "lucide-react";
import { Apple } from "lucide-react";
import { CupSoda } from "lucide-react";
import { Fish } from "lucide-react";
import { Ham } from "lucide-react";
import { Cake } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Share2 } from "lucide-react";
import { User } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Mail } from "lucide-react";
import { Lightbulb } from "lucide-react";
import { Headphones } from "lucide-react";
import { WifiOff } from "lucide-react";
import { NotebookText } from "lucide-react";
import { Medal } from "lucide-react";
import { Eye } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollAreaCorner } from "@radix-ui/react-scroll-area";
import { CommandMenu } from "./CommandMenu";
import LogoImage from "./LogoImage";
import { useTheme } from "next-themes";
import ShinyButton from "@/components/magicui/shiny-button";
import ShineBorder from "@/components/magicui/shine-border";
import Sparkles from "./Sparkles";
import GitHub from "./GitHub";
import Discord from "./Discord";
import X from "./x";
import Linkedin from "./Linkedin";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import PopoverNotifications from "./popover-notifications";
import TextHoverEnter from "./TextHoverEnter";
import FeedBack from "./feedback";
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];
export const Navigation = (): JSX.Element => {
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const pathname = usePathname();
  const isWebfilmPath = pathname === "/webfilm";
  const isWebAppPath = pathname === "/webapp";
  const isDocsPath = pathname === "/docs";
  const isAi = pathname === "/ai";
  const isChatV2 = pathname === "/chat-v2";
  const isHelp = pathname === "/help";
  const isDocs = pathname === "/docs";
  const isGuides = pathname === "/guides";
  const isSignIn = pathname === "/signin";
  const isCreative = pathname === "/creative";
  const isGeneration = pathname === "/generation";
  const isDesign = pathname === "/design";
  const theme = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(
        window.scrollY > 60 ||
          window.scrollY + window.innerHeight >=
            document.documentElement.scrollHeight,
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`${
        isWebfilmPath ||
        isWebAppPath ||
        isAi ||
        isChatV2 ||
        isSignIn ||
        isGuides ||
        isDocs ||
        isHelp ||
        isDesign ||
        pathname.startsWith("/docs")
          ? "webfilm-class"
          : ""
      } sticky top-0 z-[20]`}
    >
      <nav className="relative z-[4] flex-shrink-0 items-center justify-center min-[375px]:hidden sm:hidden md:hidden lg:flex xl:flex">
        <nav
          className={`${isScrolled || isBottom ? "border-b bg-[#0c0c0c]" : "border-b"} ${isDocsPath || isCreative || isGeneration ? "border-b bg-[#0c0c0c]" : "border-b"} relative z-[1] flex w-full items-center justify-between gap-[2rem] bg-white px-[2rem] dark:border-[#292929] dark:bg-[#000000]`}
        >
          <div className="flex h-[58px] w-fit items-center gap-[2rem] text-sm">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="font-[BespokeStencil-Bold] text-[1.1rem] font-bold transition-colors duration-300 ease-out dark:text-white"
              >
                WESTERN
              </Link>
              {/* <Link
                href="/"
                className="rounded-full border px-4 py-1 text-xs font-bold transition-colors duration-300 ease-out dark:text-white"
              >
                v10.9.5
              </Link> */}
            </div>
            <NavigationMenu>
              <NavigationMenuList className="font-medium">
                <NavigationMenuItem className="">
                  <NavigationMenuTrigger className="pr-3 text-[#9b9b9b]">
                    Feature
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="flex w-[30rem] gap-[2.5rem] px-[1rem] py-[1rem] data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft">
                    <div className="flex flex-col gap-[2rem]">
                      <div className="group flex cursor-pointer items-center gap-[0.5rem]">
                        <div>
                          <Lightbulb className="h-[2rem] w-[2rem] rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <NavigationMenuLink className="text-nowrap text-sm font-bold">
                            Smart Recommendations
                          </NavigationMenuLink>
                          <p className="text-nowrap text-xs text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                            Discover music curated just for you.
                          </p>
                        </div>
                      </div>
                      <div className="group flex cursor-pointer items-center gap-[0.5rem]">
                        <div>
                          <WifiOff className="h-[2rem] w-[2rem] rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <NavigationMenuLink className="text-nowrap text-sm font-bold">
                            Offline Mode
                          </NavigationMenuLink>
                          <p className="text-nowrap text-xs text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                            Download songs and listen offline.
                          </p>
                        </div>
                      </div>
                      <div className="group flex cursor-pointer items-center gap-[0.5rem]">
                        <div>
                          <Podcast className="h-[2rem] w-[2rem] rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <NavigationMenuLink className="text-nowrap text-sm font-bold">
                            Podcasts
                          </NavigationMenuLink>
                          <p className="text-nowrap text-xs text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                            Access a wide range of podcasts.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-between">
                      <div className="group flex cursor-pointer items-center gap-[0.5rem]">
                        <div>
                          <NotebookText className="h-[2rem] w-[2rem] rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <NavigationMenuLink className="text-nowrap text-sm font-bold">
                            Lyrics Display
                          </NavigationMenuLink>
                          <p className="text-nowrap text-xs text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                            Sing along with on-screen lyrics.
                          </p>
                        </div>
                      </div>
                      <div className="group flex cursor-pointer items-center gap-[0.5rem]">
                        <div>
                          <Medal className="h-[2rem] w-[2rem] rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <NavigationMenuLink className="text-nowrap text-sm font-bold">
                            High-Quality Audio
                          </NavigationMenuLink>
                          <p className="text-nowrap text-xs text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                            Enjoy lossless audio streaming.
                          </p>
                        </div>
                      </div>
                      <div className="group flex cursor-pointer items-center gap-[0.5rem]">
                        <div>
                          <Share2 className="h-[2rem] w-[2rem] rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <NavigationMenuLink className="text-nowrap text-sm font-bold">
                            Social Sharing
                          </NavigationMenuLink>
                          <p className="text-nowrap text-xs text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                            Share your favorite tracks on social media.
                          </p>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="px-3">
                  <Link href="/library" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`relative flex h-7 items-center rounded-full text-sm duration-300 ease-out ${
                        pathname === "/library"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      } cursor-pointer select-none transition-colors dark:hover:text-white`}
                    >
                      <TextHoverEnter
                        className={`${
                          pathname === "/library"
                            ? "dark:text-white"
                            : "dark:text-[#9b9b9b]"
                        }`}
                      >
                        Library
                      </TextHoverEnter>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {/* <NavigationMenuItem >
                  <NavigationMenuTrigger className="text-[#9b9b9b]">
                    Library
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="flex w-[37rem] justify-between gap-[2.5rem] px-[1rem] py-[1rem]">
                    <div className="grid w-[37rem] grid-cols-2 place-content-between gap-[2rem]">
                      <div>
                        <h1 className="text-[1rem] text-[#a1a1a1]">Playlist</h1>
                      </div>
                      <div className="flex flex-col gap-[1.8rem]">
                        <div className="group flex cursor-pointer items-center gap-[0.5rem]">
                          <div>
                            <ListPlus className="h-[2rem] w-[2rem] rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <NavigationMenuLink className="text-nowrap text-sm font-bold">
                              Create New
                            </NavigationMenuLink>
                            <p className="text-nowrap text-xs text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                              Start personalized playlists here.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h1 className="text-md text-[#a1a1a1]">
                          Listening History
                        </h1>
                      </div>
                      <div className="flex flex-col gap-[1.8rem]">
                        <div className="group flex cursor-pointer items-center gap-[0.5rem]">
                          <div>
                            <Clock className="h-[2rem] w-[2rem] rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <NavigationMenuLink className="text-nowrap text-sm font-bold">
                              Recent
                            </NavigationMenuLink>
                            <p className="text-nowrap text-xs text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                              Review recently played songs and albums.
                            </p>
                          </div>
                        </div>
                        <div className="group flex cursor-pointer items-center gap-[0.5rem]">
                          <div>
                            <Save className="h-[2rem] w-[2rem] rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <NavigationMenuLink className="text-nowrap text-sm font-bold">
                              Saved
                            </NavigationMenuLink>
                            <p className="text-nowrap text-xs text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                              Access saved songs and albums.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem> */}
                <NavigationMenuItem className="px-3">
                  <Link href="/creative" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`relative flex h-7 items-center rounded-full text-sm duration-300 ease-out ${
                        pathname === "/creative"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      } cursor-pointer select-none transition-colors dark:hover:text-white`}
                    >
                      <TextHoverEnter
                        className={`${
                          pathname === "/creative"
                            ? "dark:text-white"
                            : "dark:text-[#9b9b9b]"
                        }`}
                      >
                        Creative
                      </TextHoverEnter>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem className="px-3">
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`relative flex h-7 items-center rounded-full text-sm duration-300 ease-out ${
                        pathname === "/pricing"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      } cursor-pointer select-none transition-colors dark:hover:text-white`}
                    >
                      <TextHoverEnter
                        className={`${
                          pathname === "/pricing"
                            ? "dark:text-white"
                            : "dark:text-[#9b9b9b]"
                        }`}
                      >
                        Pricing
                      </TextHoverEnter>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="px-3">
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`relative flex h-7 items-center rounded-full text-sm duration-300 ease-out ${
                        pathname === "/blog"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      } cursor-pointer select-none transition-colors dark:hover:text-white`}
                    >
                      <TextHoverEnter
                        className={`${
                          pathname === "/blog"
                            ? "dark:text-white"
                            : "dark:text-[#9b9b9b]"
                        }`}
                      >
                        Blog
                      </TextHoverEnter>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="px-3">
                  <Link href="/design" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`relative flex h-7 items-center rounded-full text-sm duration-300 ease-out ${
                        pathname === "/design"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      } cursor-pointer select-none transition-colors dark:hover:text-white`}
                    >
                      <TextHoverEnter
                        className={`${
                          pathname === "/design"
                            ? "dark:text-white"
                            : "dark:text-[#9b9b9b]"
                        }`}
                      >
                        Design
                      </TextHoverEnter>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`relative flex h-7 items-center rounded-full px-3 text-sm duration-300 ease-out ${
                        pathname === "/docs"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      } cursor-pointer select-none transition-colors dark:hover:text-white`}
                    >
                      Docs
                      {pathname != "/docs" && (
                        <sup>
                          <svg
                            data-testid="geist-icon"
                            height={12}
                            strokeLinejoin="round"
                            viewBox="0 0 15 15"
                            width={12}
                            style={{ color: "currentcolor" }}
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.75011 4H6.00011V5.5H6.75011H9.43945L5.46978 9.46967L4.93945 10L6.00011 11.0607L6.53044 10.5303L10.499 6.56182V9.25V10H11.999V9.25V5C11.999 4.44772 11.5512 4 10.999 4H6.75011Z"
                              fill="currentColor"
                            />
                          </svg>
                        </sup>
                      )}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/radio" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`relative flex h-7 items-center rounded-full px-3 text-sm duration-300 ease-out ${
                        pathname === "/radio"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      } cursor-pointer select-none transition-colors dark:hover:text-white`}
                    >
                      Radio
                      <sup>
                        <svg
                          data-testid="geist-icon"
                          height={12}
                          strokeLinejoin="round"
                          viewBox="0 0 15 15"
                          width={12}
                          style={{ color: "currentcolor" }}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.75011 4H6.00011V5.5H6.75011H9.43945L5.46978 9.46967L4.93945 10L6.00011 11.0607L6.53044 10.5303L10.499 6.56182V9.25V10H11.999V9.25V5C11.999 4.44772 11.5512 4 10.999 4H6.75011Z"
                            fill="currentColor"
                          />
                        </svg>
                      </sup>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {/* <NavigationMenuItem>
                  <Link href="/aboutus" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`relative flex h-7 items-center rounded-full px-3 text-sm duration-300 ease-out ${
                        pathname === "/aboutus"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      } cursor-pointer select-none transition-colors dark:hover:text-white`}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem> */}
                <NavigationMenuItem className="hidden">
                  <Link href="/generation" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`relative flex h-7 items-center rounded-full text-sm duration-300 ease-out ${
                        pathname === "/generation"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      } ${
                        pathname === "/docs" ||
                        pathname === "/help" ||
                        pathname === "/guides"
                          ? "hidden"
                          : ""
                      } cursor-pointer select-none transition-colors dark:hover:text-white`}
                    >
                      <TextHoverEnter
                        className={`${
                          pathname === "/generation"
                            ? "dark:text-white"
                            : "dark:text-[#9b9b9b]"
                        }`}
                      >
                        Generation
                      </TextHoverEnter>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {/* <NavigationMenuItem>
                  <NavigationMenuTrigger>Support</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[1320px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem> */}
                <NavigationMenuIndicator />
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center gap-[1rem]">
            {/* <div className="flex items-center justify-center gap-[1rem]">
              <LinkPreview
                className="flex cursor-pointer items-center gap-4 rounded-lg border px-3 py-1"
                url="https://github.com/devplus2024"
                isStatic
                imageSrc="/Opera Snapshot_2024-10-31_172630_github.com.png"
              >
                <GitHub />
                <span className="text-sm">Github</span>
              </LinkPreview>
              <LinkPreview
                imageSrc="/Opera Snapshot_2024-10-31_172414_x.com.png"
                isStatic
                className="flex cursor-pointer items-center gap-4 rounded-lg border px-3 py-1"
                url="https://x.com/DeveloperPlus24"
              >
                <X />
                <span className="text-sm">Twitter</span>
              </LinkPreview>
            </div> */}
            <div className="h-[1.2rem] border-r"></div>
            <motion.div
              initial={{ opacity: 0 }} // Trạng thái ban đầu: mờ và di chuyển xuống
              animate={{ opacity: 1 }} // Trạng thái sau khi hoàn thành: rõ và về vị trí ban đầu
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center justify-center gap-2"
            >
              <div className="flex h-[30px] w-[37px] cursor-pointer items-center justify-center rounded-md border transition-all duration-200 ease-out hover:bg-muted dark:hover:bg-[#101010]">
                <GitHub />
              </div>
              <div className="flex h-[30px] w-[37px] cursor-pointer items-center justify-center rounded-md border transition-all duration-200 ease-out hover:bg-muted dark:hover:bg-[#101010]">
                <X />
              </div>

              {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex h-[30px] w-[37px] cursor-pointer items-center justify-center rounded-md border transition-all duration-200 ease-out hover:bg-muted dark:hover:bg-[#101010]"
                  >
                    <svg
                      data-testid="geist-icon"
                      height={16}
                      strokeLinejoin="round"
                      viewBox="0 0 16 16"
                      width={16}
                      style={{ color: "currentcolor" }}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.46968 1.46968C10.1433 -0.203925 12.8567 -0.203923 14.5303 1.46968C16.2039 3.14329 16.2039 5.85674 14.5303 7.53034L12.0303 10.0303L10.9697 8.96968L13.4697 6.46968C14.5575 5.38186 14.5575 3.61816 13.4697 2.53034C12.3819 1.44252 10.6182 1.44252 9.53034 2.53034L7.03034 5.03034L5.96968 3.96968L8.46968 1.46968ZM11.5303 5.53034L5.53034 11.5303L4.46968 10.4697L10.4697 4.46968L11.5303 5.53034ZM1.46968 14.5303C3.14329 16.2039 5.85673 16.204 7.53034 14.5303L10.0303 12.0303L8.96968 10.9697L6.46968 13.4697C5.38186 14.5575 3.61816 14.5575 2.53034 13.4697C1.44252 12.3819 1.44252 10.6182 2.53034 9.53034L5.03034 7.03034L3.96968 5.96968L1.46968 8.46968C-0.203923 10.1433 -0.203925 12.8567 1.46968 14.5303Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[9rem]">
                  <DropdownMenuLabel className="text-center">
                    Social Media
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup style={{ display: "flex" }}>
                    <DropdownMenuItem className="gap-4 text-xs">
                      <GitHub />
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-4 text-xs">
                      <X />
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-4 text-xs">
                      <svg
                        data-testid="geist-icon"
                        height={16}
                        strokeLinejoin="round"
                        viewBox="0 0 16 16"
                        width={16}
                        style={{ color: "currentcolor" }}
                      >
                        <g clipPath="url(#clip0_872_3152)">
                          <path
                            d="M3.42681 10.0787C3.42681 10.9984 2.68351 11.7417 1.76382 11.7417C0.844137 11.7417 0.10083 10.9984 0.10083 10.0787C0.10083 9.15906 0.844137 8.41575 1.76382 8.41575H3.42681V10.0787ZM4.25831 10.0787C4.25831 9.15906 5.00162 8.41575 5.9213 8.41575C6.84099 8.41575 7.58429 9.15906 7.58429 10.0787V14.2362C7.58429 15.1559 6.84099 15.8992 5.9213 15.8992C5.00162 15.8992 4.25831 15.1559 4.25831 14.2362V10.0787Z"
                            fill="currentColor"
                          />
                          <path
                            d="M5.92121 3.40158C5.00152 3.40158 4.25821 2.65827 4.25821 1.73858C4.25821 0.818899 5.00152 0.075592 5.92121 0.075592C6.84089 0.075592 7.5842 0.818899 7.5842 1.73858V3.40158H5.92121ZM5.92121 4.24567C6.84089 4.24567 7.5842 4.98898 7.5842 5.90866C7.5842 6.82835 6.84089 7.57165 5.92121 7.57165H1.75113C0.831442 7.57165 0.0881348 6.82835 0.0881348 5.90866C0.0881348 4.98898 0.831442 4.24567 1.75113 4.24567H5.92121Z"
                            fill="currentColor"
                          />
                          <path
                            d="M12.5858 5.90866C12.5858 4.98898 13.3291 4.24567 14.2488 4.24567C15.1685 4.24567 15.9118 4.98898 15.9118 5.90866C15.9118 6.82835 15.1685 7.57165 14.2488 7.57165H12.5858V5.90866ZM11.7543 5.90866C11.7543 6.82835 11.011 7.57165 10.0913 7.57165C9.17165 7.57165 8.42834 6.82835 8.42834 5.90866V1.73858C8.42834 0.818899 9.17165 0.075592 10.0913 0.075592C11.011 0.075592 11.7543 0.818899 11.7543 1.73858V5.90866Z"
                            fill="currentColor"
                          />
                          <path
                            d="M10.0913 12.5732C11.011 12.5732 11.7543 13.3165 11.7543 14.2362C11.7543 15.1559 11.011 15.8992 10.0913 15.8992C9.17165 15.8992 8.42834 15.1559 8.42834 14.2362V12.5732H10.0913ZM10.0913 11.7417C9.17165 11.7417 8.42834 10.9984 8.42834 10.0787C8.42834 9.15906 9.17165 8.41575 10.0913 8.41575H14.2614C15.1811 8.41575 15.9244 9.15906 15.9244 10.0787C15.9244 10.9984 15.1811 11.7417 14.2614 11.7417H10.0913Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_872_3152">
                            <rect width={16} height={16} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-4 text-xs">
                      <svg
                        data-testid="geist-icon"
                        height={16}
                        strokeLinejoin="round"
                        viewBox="0 0 16 16"
                        width={16}
                        style={{ color: "currentcolor" }}
                      >
                        <g clipPath="url(#clip0_3908_2369)">
                          <path
                            d="M15.5273 6.68664L15.5054 6.63069L13.3858 1.0989C13.3427 0.990478 13.2663 0.898505 13.1676 0.836175C13.0689 0.774904 12.9538 0.745394 12.8378 0.751629C12.7218 0.757865 12.6105 0.799545 12.5189 0.871043C12.4284 0.944593 12.3627 1.04426 12.3308 1.15647L10.8996 5.53519H5.10431L3.67312 1.15647C3.64208 1.04365 3.57625 0.943483 3.485 0.870232C3.39343 0.798734 3.28213 0.757054 3.16613 0.750818C3.05012 0.744583 2.935 0.774093 2.8363 0.835364C2.73788 0.897946 2.66158 0.989838 2.61817 1.09809L0.49449 6.62744L0.473407 6.68339C0.168277 7.48065 0.130614 8.3555 0.366096 9.17603C0.601578 9.99656 1.09744 10.7183 1.77892 11.2324L1.78621 11.2381L1.80567 11.2519L5.03458 13.6699L6.632 14.8789L7.60505 15.6136C7.71887 15.7 7.85785 15.7468 8.00076 15.7468C8.14366 15.7468 8.28264 15.7 8.39646 15.6136L9.36951 14.8789L10.9669 13.6699L14.2153 11.2373L14.2234 11.2308C14.9034 10.7166 15.3981 9.99558 15.6332 9.17616C15.8683 8.35673 15.8312 7.48313 15.5273 6.68664Z"
                            fill="white"
                            style={{ fill: "white", fillOpacity: 1 }}
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_3908_2369">
                            <rect
                              width={16}
                              height={16}
                              fill="white"
                              style={{ fill: "white", fillOpacity: 1 }}
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <PopoverNotifications /> */}
              <ThemeToggle />
              {/* <CommandMenu /> */}
              <FeedBack />
            </motion.div>
            <div className="flex items-center gap-[1rem]">
              <Link
                className="flex items-center justify-center gap-3"
                href="/signin"
              >
                <motion.div
                  initial={{ opacity: 0 }} // Trạng thái ban đầu: mờ và di chuyển xuống
                  animate={{ opacity: 1 }} // Trạng thái sau khi hoàn thành: rõ và về vị trí ban đầu
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Button
                    variant={"outline"}
                    className="flex h-fit items-center px-3 py-1 hover:bg-accent dark:hover:bg-[#1a1a1a]"
                  >
                    {/* <Image
                      src={"/windows11.svg"}
                      className="mr-2 h-[16px] w-[16px] dark:invert-[1]"
                      width={"16"}
                      height={"16"}
                      alt="window-logo"
                    ></Image> */}
                    {/* Install */}
                    Sign In
                  </Button>
                </motion.div>
              </Link>
              <div>
                <motion.div
                  initial={{ opacity: 0 }} // Trạng thái ban đầu: mờ và di chuyển xuống
                  animate={{ opacity: 1 }} // Trạng thái sau khi hoàn thành: rõ và về vị trí ban đầu
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <AlertDialog>
                    <AlertDialogTrigger className="w-[400px]" asChild>
                      <Button
                        variant={"outline"}
                        className="h-fit gap-1 px-3 py-1 [&_svg]:size-[15px]"
                      >
                        Create Account
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#ffffff"
                          viewBox="0 0 256 256"
                        >
                          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm29.66-93.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32L140.69,128,106.34,93.66a8,8,0,0,1,11.32-11.32Z"></path>
                        </svg>
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-center">
                          Login
                        </AlertDialogTitle>
                        <AlertDialogDescription className="flex flex-col gap-[1rem]">
                          <Button variant={"outline"} className="rounded-full">
                            <svg
                              data-testid="geist-icon"
                              height={16}
                              strokeLinejoin="round"
                              style={{ color: "currentColor" }}
                              viewBox="0 0 16 16"
                              width={16}
                            >
                              <g clipPath="url(#clip0_872_3147)">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12.81 5.98797 13.12 6.69773 13.12 7.57743C13.12 10.6464 11.25 11.3262 9.47 11.5261C9.76 11.776 10.01 12.2558 10.01 13.0056C10.01 14.0752 10 14.9349 10 15.2049C10 15.4148 10.15 15.6647 10.55 15.5847C12.1381 15.0488 13.5182 14.0284 14.4958 12.6673C15.4735 11.3062 15.9996 9.67293 16 7.99729C16 3.57879 12.42 0 8 0Z"
                                  fill="currentColor"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_872_3147">
                                  <rect width={16} height={16} fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            Login with Github
                          </Button>
                          <Button variant={"outline"} className="rounded-full">
                            <svg
                              data-testid="geist-icon"
                              height={16}
                              strokeLinejoin="round"
                              viewBox="0 0 16 16"
                              width={16}
                              style={{ color: "currentcolor" }}
                            >
                              <path
                                d="M8.15991 6.54543V9.64362H12.4654C12.2763 10.64 11.709 11.4837 10.8581 12.0509L13.4544 14.0655C14.9671 12.6692 15.8399 10.6182 15.8399 8.18188C15.8399 7.61461 15.789 7.06911 15.6944 6.54552L8.15991 6.54543Z"
                                fill="#4285F4"
                              />
                              <path
                                d="M3.6764 9.52268L3.09083 9.97093L1.01807 11.5855C2.33443 14.1963 5.03241 16 8.15966 16C10.3196 16 12.1305 15.2873 13.4542 14.0655L10.8578 12.0509C10.1451 12.5309 9.23598 12.8219 8.15966 12.8219C6.07967 12.8219 4.31245 11.4182 3.67967 9.5273L3.6764 9.52268Z"
                                fill="#34A853"
                              />
                              <path
                                d="M1.01803 4.41455C0.472607 5.49087 0.159912 6.70543 0.159912 7.99995C0.159912 9.29447 0.472607 10.509 1.01803 11.5854C1.01803 11.5926 3.6799 9.51991 3.6799 9.51991C3.5199 9.03991 3.42532 8.53085 3.42532 7.99987C3.42532 7.46889 3.5199 6.95983 3.6799 6.47983L1.01803 4.41455Z"
                                fill="#FBBC05"
                              />
                              <path
                                d="M8.15982 3.18545C9.33802 3.18545 10.3853 3.59271 11.2216 4.37818L13.5125 2.0873C12.1234 0.792777 10.3199 0 8.15982 0C5.03257 0 2.33443 1.79636 1.01807 4.41455L3.67985 6.48001C4.31254 4.58908 6.07983 3.18545 8.15982 3.18545Z"
                                fill="#EA4335"
                              />
                            </svg>
                            Login with Google
                          </Button>
                          <Button variant={"outline"} className="rounded-full">
                            <svg
                              data-testid="geist-icon"
                              height={16}
                              strokeLinejoin="round"
                              viewBox="0 0 16 16"
                              width={16}
                              style={{ color: "currentcolor" }}
                            >
                              <g clipPath="url(#clip0_872_3176)">
                                <path
                                  d="M15.5274 6.68664L15.5055 6.63069L13.3858 1.0989C13.3427 0.990478 13.2663 0.898505 13.1677 0.836175C13.069 0.774904 12.9539 0.745394 12.8379 0.751629C12.7219 0.757865 12.6106 0.799545 12.519 0.871043C12.4285 0.944593 12.3628 1.04426 12.3309 1.15647L10.8997 5.53519H5.10437L3.67318 1.15647C3.64214 1.04365 3.57631 0.943483 3.48506 0.870232C3.39349 0.798734 3.28219 0.757054 3.16619 0.750818C3.05018 0.744583 2.93506 0.774093 2.83636 0.835364C2.73794 0.897946 2.66164 0.989838 2.61823 1.09809L0.494551 6.62744L0.473468 6.68339C0.168338 7.48065 0.130675 8.3555 0.366157 9.17603C0.601639 9.99656 1.0975 10.7183 1.77898 11.2324L1.78627 11.2381L1.80574 11.2519L5.03464 13.6699L6.63206 14.8789L7.60511 15.6136C7.71893 15.7 7.85791 15.7468 8.00082 15.7468C8.14373 15.7468 8.28271 15.7 8.39652 15.6136L9.36957 14.8789L10.967 13.6699L14.2154 11.2373L14.2235 11.2308C14.9034 10.7166 15.3981 9.99558 15.6332 9.17616C15.8684 8.35673 15.8312 7.48313 15.5274 6.68664Z"
                                  fill="#E24329"
                                />
                                <path
                                  d="M15.5273 6.68661L15.5055 6.63066C14.4726 6.84266 13.4994 7.28014 12.6552 7.91184L8 11.4319C9.58526 12.6311 10.9654 13.6731 10.9654 13.6731L14.2137 11.2405L14.2218 11.234C14.9028 10.7198 15.3982 9.99836 15.6337 9.17823C15.8691 8.35811 15.8318 7.48369 15.5273 6.68661Z"
                                  fill="#FC6D26"
                                />
                                <path
                                  d="M5.03461 13.6731L6.63203 14.8821L7.60508 15.6168C7.7189 15.7032 7.85788 15.75 8.00079 15.75C8.14369 15.75 8.28267 15.7032 8.39649 15.6168L9.36954 14.8821L10.967 13.6731C10.967 13.6731 9.58524 12.6279 7.99998 11.4318C6.41472 12.6279 5.03461 13.6731 5.03461 13.6731Z"
                                  fill="#FCA326"
                                />
                                <path
                                  d="M3.3439 7.91184C2.50043 7.27884 1.52738 6.84022 0.49449 6.62742L0.473407 6.68337C0.168277 7.48063 0.130614 8.35547 0.366096 9.176C0.601578 9.99653 1.09744 10.7183 1.77892 11.2324L1.78621 11.2381L1.80567 11.2518L5.03458 13.6699C5.03458 13.6699 6.41306 12.6279 7.99995 11.4286L3.3439 7.91184Z"
                                  fill="#FC6D26"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_872_3176">
                                  <rect width={16} height={16} fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            Login with GitLab
                          </Button>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="absolute left-0 top-0 z-[3] rounded-full bg-slate-100 transition-[width] dark:bg-[#000000]" />
        </nav>
      </nav>
    </motion.div>
  );
};
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

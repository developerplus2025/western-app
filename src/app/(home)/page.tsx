"use client";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import CompAvatar from "@/components/comp-412";
import AnimateTextHome from "./components/text-animation";
import DownloadButton from "./components/DownloadButton";
import { RadixDialog } from "./components/modal-animation-video";
import BeautifulFeaturesLayout from "./components/beautiful-features-layout";
import SocialProof from "./components/social-proof";
import Metric from "./components/metric";
import PowerBy from "./components/power-by";
import AccordionFAQ from "./components/faq";
import { PeopleSay } from "./components/people-say";
import { NavigationEffect } from "@/components/NavigationEffect";
import Modal from "./components/Modal";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { theme, systemTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState<boolean>(false);
  const [view, setView] = useState(false);

  useEffect(() => {
    const storedClose = localStorage.getItem("close");
    if (storedClose !== null) {
      setClose(storedClose === "true");
    }
  }, []);

  const handleToggle = () => {
    const newCloseValue = !close;
    setClose(newCloseValue);
    localStorage.setItem("close", newCloseValue.toString());
  };

  const [value, setValue] = React.useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="GeistSans relative flex min-h-screen w-full flex-col items-center justify-between gap-[1rem] overflow-x-hidden pb-[1rem] pt-[6rem] dark:bg-black dark:[color-scheme:dark]">
      <CompAvatar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="mx-[5rem] mt-[1rem] flex w-full items-center justify-center gap-[2rem] min-[375px]:flex-col min-[645px]:flex-col xl:flex-col"
      >
        <div
          ref={containerRef}
          className="flex flex-col items-center justify-center gap-[2rem]"
        >
          <AnimateTextHome />
          <h1 className="text-md w-[522px] text-center">
            Dive into a seamless music experience with our cutting edge
            software. Collaborate effortlessly, unleash your creativity, manage
            playlists and craft professional quality tracks all in one powerful
            platform.
          </h1>
        </div>
        <div className="flex gap-[2rem]">
          <DownloadButton />
          <Modal isOpen={open} onClose={() => setOpen(false)} />
          <Button
            onClick={() => setOpen(true)}
            variant={"default"}
            className=""
          >
            <svg
              className="mr-2 h-4 w-4"
              data-testid="geist-icon"
              height={16}
              strokeLinejoin="round"
              viewBox="0 0 16 16"
              width={16}
              style={{ color: "currentcolor" }}
            >
              <path
                fill="#666"
                fillRule="evenodd"
                d="M14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6 11l5.5-3L6 5v6Z"
                clipRule="evenodd"
                style={{ fill: "currentColor" }}
              />
            </svg>
            Wacth Demo Now
          </Button>
        </div>
      </motion.div>
      <div className="mx-auto mb-[4rem] mt-[10rem] h-px w-full bg-[#262626]"></div>
      <div className="w-full">
        <BeautifulFeaturesLayout />
      </div>
      <div className="mx-auto my-[4rem] h-px w-[700px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent dark:via-zinc-300"></div>
      <SocialProof />
      <div className="mx-auto my-[4rem] h-px w-[700px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent dark:via-zinc-300"></div>
      <Metric />
      <div className="mx-auto my-[4rem] h-px w-[700px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent dark:via-zinc-300"></div>
      <PowerBy />
      <div className="mx-auto my-[4rem] h-px w-[700px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent dark:via-zinc-300"></div>
      <AccordionFAQ />
      <div className="mx-auto my-[4rem] h-px w-[700px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent dark:via-zinc-300"></div>
      <PeopleSay />
      <div className="mx-auto my-[4rem] h-px w-[700px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent dark:via-zinc-300"></div>
      <div className="text-center">
        <p className="font-[BespokeStencil-BoldItalic] text-[55px]">Decent</p>
      </div>
      <div>
        <NavigationEffect />
      </div>
      <div className="mb-[5rem]"> </div>
    </main>
  );
}

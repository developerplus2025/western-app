"use client";
import AnimateTextHome from "./text-animation";
import DownloadButton from "./DownloadButton";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Modal from "./Modal";
export default function MainTextHome() {
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
          Dive into a seamless music experience with our cutting edge software.
          Collaborate effortlessly, unleash your creativity, manage playlists
          and craft professional quality tracks all in one powerful platform.
        </h1>
      </div>
      <div className="flex gap-[2rem]">
        <DownloadButton />
        <Modal isOpen={open} onClose={() => setOpen(false)} />
        <Button onClick={() => setOpen(true)} variant={"default"} className="">
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
  );
}

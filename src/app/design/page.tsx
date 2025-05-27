"use client";
import { Slider } from "@/components/ui/slider";
import { cookies } from "next/headers";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import {
  AirplayIcon,
  DevicesIcon,
  MicrophoneStageIcon,
  PictureInPictureIcon,
  PlayIcon,
  PlusCircleIcon,
  QueueIcon,
  RepeatIcon,
  ShuffleAngularIcon,
  SkipBackIcon,
  SkipForwardIcon,
  SpeakerHighIcon,
  SpeakerLowIcon,
} from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSearch } from "./content/SearchContext";
export default function DesignPage() {
  const { songs, loading } = useSearch();
  return (
    <div className="flex h-[calc(100vh-138.8px)] w-full flex-col justify-between">
      <div>
        <SidebarProvider defaultOpen={false}>
          <AppSidebar />
          <main className="flex h-[calc(100vh-138.8px)] w-full flex-col justify-between">
            <SidebarTrigger className="fixed z-20 m-[0.5rem]" />
            <ScrollArea className="flex h-[calc(100vh-138.8px)] w-full justify-center">
              <div className="flex h-[calc(100vh-138.8px)] w-full justify-center">
                <div className="px-4 pt-[2rem]">
                  <ul className="grid w-[1355px] grid-cols-5 justify-items-center gap-x-[1rem] gap-y-[2rem]">
                    {songs.map((song) => (
                      <li
                        key={song.id}
                        className="flex h-full w-[214px] items-center gap-[2rem] rounded-lg px-2 py-2"
                      >
                        <Image
                          className="rounded-md"
                          unoptimized
                          src={song.album.cover_small}
                          alt={song.title}
                          width={56}
                          height={56}
                        />
                        <div className="flex flex-col">
                          <p className="text-xs font-medium">{song.title}</p>
                          <p className="text-xs font-medium text-[#a1a1a1]">
                            by {song.artist.name}
                          </p>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="#f0f0f0"
                          viewBox="0 0 256 256"
                        >
                          <path d="M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z"></path>
                        </svg>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollArea>
          </main>
        </SidebarProvider>
      </div>
    </div>
  );
}

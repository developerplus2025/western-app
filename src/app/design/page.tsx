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
                        className="flex h-full w-[500px] justify-between gap-2 rounded-lg px-2 py-2"
                      >
                        <Image
                          className="rounded-xl"
                          unoptimized
                          src={song.album.cover_small}
                          alt={song.title}
                          width={80}
                          height={80}
                        />
                        <div className="flex flex-col">
                          <p className="text-xs font-medium">{song.title}</p>
                          <p className="text-xs font-medium text-[#a1a1a1]">
                            by {song.artist.name}
                          </p>
                        </div>
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

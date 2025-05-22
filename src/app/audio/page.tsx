"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function AudioPage() {
  const [keyword, setKeyword] = useState("ercv"); // keyword mặc định
  const [songs, setSongs] = useState<any[]>([]);

  useEffect(() => {
    const fetchSongs = async () => {
      if (!keyword.trim()) return;
      const res = await fetch(`/api/deezer?q=${encodeURIComponent(keyword)}`);
      const data = await res.json();
      setSongs(data.data);
    };
    fetchSongs();
  }, [keyword]); // mỗi khi keyword thay đổi, gọi API

  return (
    <div className="px-4 py-6">
      <h1 className="mb-4 text-center text-2xl font-bold">
        The Engine Search Song
      </h1>
      <div className="flex items-center justify-center gap-4">
        <div className="relative">
          <Input
            type="search"
            placeholder="Enter keyword..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-[25rem] rounded-full pl-[42px]"
          />
          <svg
            className="absolute left-[26px] top-1/2 -translate-x-1/2 -translate-y-1/2 border-[#a1a1a1]"
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
              d="M1.5 6.5C1.5 3.73858 3.73858 1.5 6.5 1.5C9.26142 1.5 11.5 3.73858 11.5 6.5C11.5 9.26142 9.26142 11.5 6.5 11.5C3.73858 11.5 1.5 9.26142 1.5 6.5ZM6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C8.02469 13 9.42677 12.475 10.5353 11.596L13.9697 15.0303L14.5 15.5607L15.5607 14.5L15.0303 13.9697L11.596 10.5353C12.475 9.42677 13 8.02469 13 6.5C13 2.91015 10.0899 0 6.5 0Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div>
          <Button className="rounded-full" variant={"outline"} size={"icon"}>
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
                d="M8.50098 1.5H7.50098C6.67255 1.5 6.00098 2.17157 6.00098 3V7C6.00098 7.82843 6.67255 8.5 7.50098 8.5H8.50098C9.32941 8.5 10.001 7.82843 10.001 7V3C10.001 2.17157 9.32941 1.5 8.50098 1.5ZM7.50098 0C5.84412 0 4.50098 1.34315 4.50098 3V7C4.50098 8.65685 5.84412 10 7.50098 10H8.50098C10.1578 10 11.501 8.65685 11.501 7V3C11.501 1.34315 10.1578 0 8.50098 0H7.50098ZM7.25098 13.2088V15.25V16H8.75098V15.25V13.2088C11.5607 12.8983 13.8494 10.8635 14.5383 8.18694L14.7252 7.46062L13.2726 7.08673L13.0856 7.81306C12.5028 10.0776 10.4462 11.75 8.00098 11.75C5.55572 11.75 3.49918 10.0776 2.91633 7.81306L2.72939 7.08673L1.27673 7.46062L1.46368 8.18694C2.15258 10.8635 4.44128 12.8983 7.25098 13.2088Z"
                fill="currentColor"
              />
            </svg>
          </Button>
        </div>
      </div>
      <ul className="mt-[2rem] grid w-[1200px] grid-cols-4 justify-items-center gap-x-[1rem] gap-y-[2rem]">
        {songs.map((song) => (
          <li
            key={song.id}
            className="flex w-fit flex-col gap-4 rounded-lg px-2 py-2"
          >
            <Image
              className="rounded-xl"
              unoptimized
              src={song.album.cover_medium}
              alt={song.title}
              width={250}
              height={250}
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  className="rounded-full"
                  unoptimized
                  src={song.artist.picture_small}
                  alt={song.title}
                  width={50}
                  height={50}
                ></Image>
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-medium">{song.title}</p>
                  <p className="text-xs font-medium text-[#a1a1a1]">
                    by {song.artist.name}
                  </p>
                </div>
              </div>
              <Button
                variant={"outline"}
                className="hidden flex-shrink-0 rounded-full"
                size={"icon"}
              >
                <svg
                  data-testid="geist-icon"
                  height={25}
                  strokeLinejoin="round"
                  viewBox="0 0 16 16"
                  width={25}
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
              </Button>
            </div>
            <div className="w-full">
              <Button variant={"default"} className="w-full rounded-full">
                Listen Now{" "}
                <svg
                  data-testid="geist-icon"
                  height={25}
                  strokeLinejoin="round"
                  viewBox="0 0 16 16"
                  width={25}
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
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

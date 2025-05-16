"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function AudioPage() {
  const [keyword, setKeyword] = useState("cv"); // keyword mặc định
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
              d="M3.5 7C3.5 5.067 5.067 3.5 7 3.5C8.933 3.5 10.5 5.067 10.5 7C10.5 7.88461 10.1718 8.69256 9.63058 9.30876L9.30876 9.63058C8.69256 10.1718 7.88461 10.5 7 10.5C5.067 10.5 3.5 8.933 3.5 7ZM9.96544 11.0261C9.13578 11.6382 8.11014 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7C12 8.11014 11.6382 9.13578 11.0261 9.96544L14.0303 12.9697L14.5607 13.5L13.5 14.5607L12.9697 14.0303L9.96544 11.0261Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div>
          <Button variant={"outline"} size={"icon"}>
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
            className="flex flex-col items-center gap-4 space-x-4 rounded-lg px-2 py-2"
          >
            <Image
              className="rounded-xl"
              unoptimized
              src={song.album.cover_medium}
              alt={song.title}
              width={250}
              height={250}
            />
            <div>
              <p className="text-xs font-medium">
                {song.title} - {song.artist.name}
              </p>
              <a
                href={song.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#858585] hover:underline"
              >
                Listening in Deezer
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

"use client";

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
      <h1 className="mb-4 text-center text-2xl font-bold">Search Song</h1>
      <div className="flex justify-center">
        <div className="relative">
          <Input
            type="search"
            placeholder="Enter keyword..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-[25rem] rounded-full pl-[35px]"
          />
          <svg
            className="absolute left-[20px] top-1/2 -translate-x-1/2 -translate-y-1/2 border-[#a1a1a1]"
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
      </div>
      <ul className="mt-[2rem] grid w-[1200px] grid-cols-4 place-items-center justify-items-center gap-x-[1rem] gap-y-[2rem]">
        {songs.map((song) => (
          <li
            key={song.id}
            className="flex h-[76px] w-[225px] items-center space-x-4 rounded-lg border px-2 py-2"
          >
            <Image
              unoptimized
              src={song.album.cover_small}
              alt={song.title}
              width={50}
              height={50}
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

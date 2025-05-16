"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function AudioPage() {
  const [keyword, setKeyword] = useState("eminem"); // keyword mặc định
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
    <div className="grid grid-cols-4 justify-items-center gap-x-[1rem] gap-y-[2rem] px-4 py-6">
      <h1 className="mb-4 text-center text-2xl font-bold">Search Song</h1>

      <Input
        type="text"
        placeholder="Nhập từ khóa..."
        className="rounded-lg"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <ul className="space-y-4">
        {songs.map((song) => (
          <li
            key={song.id}
            className="flex items-center space-x-4 rounded-lg border px-2"
          >
            <Image
              unoptimized
              src={song.album.cover_small}
              alt={song.title}
              width={50}
              height={50}
            />
            <div>
              <p className="font-medium">
                {song.title} - {song.artist.name}
              </p>
              <a
                href={song.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#858585] hover:underline"
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

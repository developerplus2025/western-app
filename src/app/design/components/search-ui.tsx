"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { useSearch } from "../content/SearchContext";

export default function SearchUi() {
  const { keyword, setKeyword } = useSearch();
  return (
    <div>
      <div className="flex items-center justify-center gap-4 [&_svg]:h-[20px] [&_svg]:w-[20px]">
        <div className="relative">
          <Input
            type="search"
            placeholder="Enter keyword..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-[25rem] rounded-full pl-[42px]"
          />
          <svg
            className="absolute left-[26px] top-1/2 -translate-x-1/2 -translate-y-1/2"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#ffffff"
            viewBox="0 0 256 256"
          >
            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
          </svg>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#ffffff"
          viewBox="0 0 256 256"
        >
          <path d="M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V240a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z"></path>
        </svg>
      </div>
    </div>
  );
}

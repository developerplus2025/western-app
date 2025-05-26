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

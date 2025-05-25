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
export default function DesignPage() {
  const [keyword, setKeyword] = useState("react"); // keyword mặc định
  const [songs, setSongs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchSongs = async () => {
      if (!keyword.trim()) return;
      const res = await fetch(`/api/deezer?q=${encodeURIComponent(keyword)}`);
      const data = await res.json();
      setSongs(data.data);
      setTimeout(function () {
        setLoading(true);
      }, 1000);
    };
    fetchSongs();
  }, [keyword]); // mỗi khi keyword thay đổi, gọi API

  return (
    <div className="flex h-[calc(100vh-58.8px)] w-full flex-col justify-between">
      <div>
        <SidebarProvider defaultOpen={true}>
          <AppSidebar />
          <main className="flex h-[calc(100vh-58.8px)] w-full flex-col justify-between">
            <SidebarTrigger className="m-[1rem]" />
            <div className="h-full w-full">
              <div className="px-4 py-6">
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
                    <Button
                      className="rounded-full"
                      variant={"outline"}
                      size={"icon"}
                    >
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
                      className="flex w-fit flex-col gap-2 rounded-lg px-2 py-2"
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
                            width={40}
                            height={40}
                          ></Image>
                          <div className="flex flex-col">
                            <p className="text-xs font-medium">{song.title}</p>
                            <p className="text-xs font-medium text-[#a1a1a1]">
                              by {song.artist.name}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row-reverse items-center justify-between pt-2">
                        <div className="flex flex-col items-center gap-1">
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
                              d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8.75 4.75V4H7.25V4.75V7.875C7.25 8.18976 7.39819 8.48615 7.65 8.675L9.55 10.1L10.15 10.55L11.05 9.35L10.45 8.9L8.75 7.625V4.75Z"
                              fill="currentColor"
                            />
                          </svg>

                          <p className="text-xs text-[#a1a1a1]">
                            {song.duration}s
                          </p>
                        </div>
                        <div className="flex flex-col items-center gap-1">
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
                              d="M8 1C4.13401 1 1 4.13401 1 8V11H1.75H2.5H3.25C4.35457 11 5.25 10.1046 5.25 9V8.25C5.25 7.14543 4.35457 6.25 3.25 6.25H2.78426C3.51526 4.0704 5.57424 2.5 8 2.5C10.4258 2.5 12.4847 4.0704 13.2157 6.25H12.75C11.6454 6.25 10.75 7.14543 10.75 8.25V9C10.75 10.1046 11.6454 11 12.75 11H13.5C13.5 12.3807 12.3807 13.5 11 13.5H10V13C10 12.4477 9.55229 12 9 12H7C6.44772 12 6 12.4477 6 13V14C6 14.5523 6.44772 15 7 15H9H10H11C13.2091 15 15 13.2091 15 11V8C15 4.13401 11.866 1 8 1ZM12.75 7.75H13.4944C13.4981 7.83287 13.5 7.91622 13.5 8V9.5H12.75C12.4739 9.5 12.25 9.27614 12.25 9V8.25C12.25 7.97386 12.4739 7.75 12.75 7.75ZM2.50558 7.75C2.50187 7.83287 2.5 7.91622 2.5 8V9.5H3.25C3.52614 9.5 3.75 9.27614 3.75 9V8.25C3.75 7.97386 3.52614 7.75 3.25 7.75H2.50558Z"
                              fill="currentColor"
                            />
                          </svg>

                          <p className="text-xs text-[#a1a1a1]">1.4k</p>
                        </div>
                        <div className="flex flex-col items-center gap-1">
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
                              d="M8.75 1V1.75V14.25V15H7.25V14.25V1.75V1H8.75ZM3.5 9V9.75V14.25V15H2V14.25V9.75V9H3.5ZM14 6.75V6H12.5V6.75V14.25V15H14V14.25V6.75Z"
                              fill="currentColor"
                            />
                          </svg>

                          <p className="text-xs text-[#a1a1a1]">#12</p>
                        </div>
                        <div className="flex flex-col items-center gap-1">
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
                              d="M7.06463 3.20474C5.79164 1.93175 3.72772 1.93175 2.45474 3.20474C1.18175 4.47773 1.18175 6.54166 2.45474 7.81465L8 13.3599L13.5453 7.81465C14.8182 6.54166 14.8182 4.47773 13.5453 3.20474C12.2723 1.93175 10.2084 1.93175 8.93537 3.20474L8.53033 3.60979L8 4.14012L7.46967 3.60979L7.06463 3.20474ZM8 2.02321C6.13348 0.286219 3.21165 0.326509 1.39408 2.14408C-0.464694 4.00286 -0.464691 7.01653 1.39408 8.87531L7.46967 14.9509L8 15.4812L8.53033 14.9509L14.6059 8.87531C16.4647 7.01653 16.4647 4.00286 14.6059 2.14408C12.7884 0.326509 9.86653 0.286221 8 2.02321Z"
                              fill="currentColor"
                            />
                          </svg>

                          <p className="text-xs text-[#a1a1a1]">1k</p>
                        </div>
                      </div>
                      <div className="flex w-full items-center gap-4">
                        <Button
                          variant={"outline"}
                          className="w-full rounded-full"
                        >
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
                        <Button className="rounded-full">
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
                              d="M7.06463 3.20474C5.79164 1.93175 3.72772 1.93175 2.45474 3.20474C1.18175 4.47773 1.18175 6.54166 2.45474 7.81465L8 13.3599L13.5453 7.81465C14.8182 6.54166 14.8182 4.47773 13.5453 3.20474C12.2723 1.93175 10.2084 1.93175 8.93537 3.20474L8.53033 3.60979L8 4.14012L7.46967 3.60979L7.06463 3.20474ZM8 2.02321C6.13348 0.286219 3.21165 0.326509 1.39408 2.14408C-0.464694 4.00286 -0.464691 7.01653 1.39408 8.87531L7.46967 14.9509L8 15.4812L8.53033 14.9509L14.6059 8.87531C16.4647 7.01653 16.4647 4.00286 14.6059 2.14408C12.7884 0.326509 9.86653 0.286221 8 2.02321Z"
                              fill="currentColor"
                            />
                          </svg>
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex h-[80px] w-full items-center justify-between border-t px-[2rem]">
              <div className="flex items-center gap-3">
                <div className="h-[50px] w-[50px] rounded-lg border"></div>
                <div className="flex flex-col">
                  <p className="text-xs">
                    REACT (feat. Ella Henderson) (Sam Feldt Remix)
                  </p>
                  <p className="text-xs text-[#a1a1a1]">by lan Walker</p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-[2rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M237.66,178.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L212.69,192H200.94a72.12,72.12,0,0,1-58.59-30.15l-41.72-58.4A56.1,56.1,0,0,0,55.06,80H32a8,8,0,0,1,0-16H55.06a72.12,72.12,0,0,1,58.59,30.15l41.72,58.4A56.1,56.1,0,0,0,200.94,176h11.75l-10.35-10.34a8,8,0,0,1,11.32-11.32ZM143,107a8,8,0,0,0,11.16-1.86l1.2-1.67A56.1,56.1,0,0,1,200.94,80h11.75L202.34,90.34a8,8,0,0,0,11.32,11.32l24-24a8,8,0,0,0,0-11.32l-24-24a8,8,0,0,0-11.32,11.32L212.69,64H200.94a72.12,72.12,0,0,0-58.59,30.15l-1.2,1.67A8,8,0,0,0,143,107Zm-30,42a8,8,0,0,0-11.16,1.86l-1.2,1.67A56.1,56.1,0,0,1,55.06,176H32a8,8,0,0,0,0,16H55.06a72.12,72.12,0,0,0,58.59-30.15l1.2-1.67A8,8,0,0,0,113,149Z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M199.81,34a16,16,0,0,0-16.24.43L64,109.23V40a8,8,0,0,0-16,0V216a8,8,0,0,0,16,0V146.77l119.57,74.78A15.95,15.95,0,0,0,208,208.12V47.88A15.86,15.86,0,0,0,199.81,34ZM192,208,64.16,128,192,48.07Z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,39.87V216.13A15.94,15.94,0,0,0,80,232a16.07,16.07,0,0,0,8.36-2.35L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.94V40l143.83,88Z" />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M200,32a8,8,0,0,0-8,8v69.23L72.43,34.45A15.95,15.95,0,0,0,48,47.88V208.12a16,16,0,0,0,24.43,13.43L192,146.77V216a8,8,0,0,0,16,0V40A8,8,0,0,0,200,32ZM64,207.93V48.05l127.84,80Z"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#ffffff"
                    viewBox="0 0 256 256"
                  >
                    <path d="M24,128A72.08,72.08,0,0,1,96,56H204.69L194.34,45.66a8,8,0,0,1,11.32-11.32l24,24a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L204.69,72H96a56.06,56.06,0,0,0-56,56,8,8,0,0,1-16,0Zm200-8a8,8,0,0,0-8,8,56.06,56.06,0,0,1-56,56H51.31l10.35-10.34a8,8,0,0,0-11.32-11.32l-24,24a8,8,0,0,0,0,11.32l24,24a8,8,0,0,0,11.32-11.32L51.31,200H160a72.08,72.08,0,0,0,72-72A8,8,0,0,0,224,120Z"></path>
                  </svg>
                </div>
                <div className="flex w-[25rem] items-center gap-[1rem]">
                  <p className="text-xs">0:00</p>
                  <Slider className="" defaultValue={[33]} max={100} step={1} />
                  <p className="text-xs">2:04</p>
                </div>
              </div>
              <div className="sh flex w-[20rem] items-center gap-4 [&_svg]:shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M224,72H208V64a24,24,0,0,0-24-24H40A24,24,0,0,0,16,64v96a24,24,0,0,0,24,24H152v8a24,24,0,0,0,24,24h48a24,24,0,0,0,24-24V96A24,24,0,0,0,224,72ZM40,168a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v8H176a24,24,0,0,0-24,24v72Zm192,24a8,8,0,0,1-8,8H176a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Zm-96,16a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h40A8,8,0,0,1,136,208Zm80-96a8,8,0,0,1-8,8H192a8,8,0,0,1,0-16h16A8,8,0,0,1,216,112Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm104,56H40a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm0,64H40a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm112-24a8,8,0,0,1-3.76,6.78l-64,40A8,8,0,0,1,168,200V120a8,8,0,0,1,12.24-6.78l64,40A8,8,0,0,1,248,160Zm-23.09,0L184,134.43v51.14Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M168,16A72.07,72.07,0,0,0,96,88a73.29,73.29,0,0,0,.63,9.42L27.12,192.22A15.93,15.93,0,0,0,28.71,213L43,227.29a15.93,15.93,0,0,0,20.78,1.59l94.81-69.53A73.29,73.29,0,0,0,168,160a72,72,0,1,0,0-144Zm56,72a55.72,55.72,0,0,1-11.16,33.52L134.49,43.16A56,56,0,0,1,224,88ZM54.32,216,40,201.68,102.14,117A72.37,72.37,0,0,0,139,153.86ZM112,88a55.67,55.67,0,0,1,11.16-33.51l78.34,78.34A56,56,0,0,1,112,88Zm-2.35,58.34a8,8,0,0,1,0,11.31l-8,8a8,8,0,1,1-11.31-11.31l8-8A8,8,0,0,1,109.67,146.33Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M216,48H40A16,16,0,0,0,24,64V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM40,64H216v56H136a8,8,0,0,0-8,8v64H40ZM216,192H144V136h72v56Z"></path>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M134.08,154.79a8,8,0,0,0-12.15,0l-48,56A8,8,0,0,0,80,224h96a8,8,0,0,0,6.07-13.21ZM97.39,208,128,172.29,158.61,208ZM232,64V176a24,24,0,0,1-24,24h-8a8,8,0,0,1,0-16h8a8,8,0,0,0,8-8V64a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8V176a8,8,0,0,0,8,8h8a8,8,0,0,1,0,16H48a24,24,0,0,1-24-24V64A24,24,0,0,1,48,40H208A24,24,0,0,1,232,64Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55ZM208,128a39.93,39.93,0,0,1-10,26.46,8,8,0,0,1-12-10.58,24,24,0,0,0,0-31.72,8,8,0,1,1,12-10.58A40,40,0,0,1,208,128Z"></path>
                </svg>

                <Slider defaultValue={[33]} max={100} step={1} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55Zm54-106.08a40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.58,24,24,0,0,0,0-31.72,8,8,0,0,1,12-10.58ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z"></path>
                </svg>
              </div>
            </div>
          </main>
        </SidebarProvider>
      </div>
    </div>
  );
}

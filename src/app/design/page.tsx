import { Slider } from "@/components/ui/slider";
import React from "react";

export default function DesignPage() {
  return (
    <div className="flex h-[calc(100vh-58.8px)] w-full items-center px-4">
      <div className="flex h-[80px] w-full items-center justify-between border px-[2rem]">
        <div className="flex items-center gap-3">
          <div className="h-[50px] w-[50px] rounded-lg border"></div>
          <div className="flex flex-col">
            <p className="text-xs">The Specture</p>
            <p className="text-xs text-[#a1a1a1]">Alan Walker</p>
          </div>
          <div>
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
                d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8.75 4.25V5V7.25H11H11.75V8.75H11H8.75V11V11.75L7.25 11.75V11V8.75H5H4.25V7.25H5H7.25V5V4.25H8.75Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-[2rem]">
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
                d="M4.08144 8.21092C3.92706 8.11268 3.92706 7.88733 4.08144 7.78909L14.3658 1.24451C14.5322 1.1386 14.75 1.25815 14.75 1.45542L14.75 14.5446C14.75 14.7419 14.5322 14.8614 14.3658 14.7555L4.08144 8.21092ZM0.75 2V1.25H2.25V2V14V14.75H0.75V14V2Z"
                fill="currentColor"
              />
            </svg>
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
                d="M14.5528 7.77638C14.737 7.86851 14.737 8.13147 14.5528 8.2236L1.3618 14.8191C1.19558 14.9022 1 14.7813 1 14.5955L1 1.4045C1 1.21865 1.19558 1.09778 1.3618 1.18089L14.5528 7.77638Z"
                fill="currentColor"
              />
            </svg>

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
                d="M11.6686 8.21092C11.8229 8.11268 11.8229 7.88733 11.6686 7.78909L1.38422 1.24451C1.21779 1.1386 1 1.25815 1 1.45542V14.5446C1 14.7419 1.21779 14.8614 1.38422 14.7555L11.6686 8.21092ZM15 2V1.25H13.5V2V14V14.75H15V14V2Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="flex w-[25rem] gap-[1rem]">
            <p className="text-xs">0:00</p>
            <Slider defaultValue={[33]} max={100} step={1} />
            <p className="text-xs">2:04</p>
          </div>
        </div>
        <div className="flex w-[16rem] items-center gap-4">
          <svg
            className="flex-shrink-0"
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
              d="M6.75 13.5H1.5V2.5H14.5V6.75V7.5H16V6.75V2C16 1.44772 15.5523 1 15 1H1C0.447714 1 0 1.44772 0 2V14C0 14.5523 0.447716 15 1 15H6.75H7.5V13.5H6.75ZM10.5 10.5H14.5V13.5H10.5V10.5ZM9 9H10.5H14.5H16V10.5V13.5V15H14.5H10.5H9V13.5V10.5V9Z"
              fill="currentColor"
            />
          </svg>

          <svg
            className="flex-shrink-0"
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
              d="M3.5 11.5H1.5V3.5H14.5V11.5H12.5H11.75V13H12.5H15C15.5523 13 16 12.5523 16 12V3C16 2.44772 15.5523 2 15 2H1C0.447714 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H3.5H4.25V11.5H3.5ZM8.20801 10.312C8.10906 10.1636 7.89094 10.1636 7.79199 10.312L4.25912 15.6113C4.14836 15.7775 4.26746 16 4.46713 16H11.5329C11.7325 16 11.8516 15.7775 11.7409 15.6113L8.20801 10.312Z"
              fill="currentColor"
            />
          </svg>

          <svg
            className="flex-shrink-0"
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
              d="M3.74421 10.6976L3 10.5H1.5V5.5H3L3.74421 5.30236L8.5 2.58477V13.4152L3.74421 10.6976ZM3 4L8.5 0.857143L10 0V1.72763V14.2724V16L8.5 15.1429L3 12H1C0.447715 12 0 11.5523 0 11V5C0 4.44772 0.447715 4 1 4H3ZM13.9115 5.64655L13.5581 4.98506L12.2351 5.69195L12.5885 6.35345C12.8503 6.84344 12.9991 7.40324 12.9991 8C12.9991 8.59676 12.8503 9.15657 12.5885 9.64655L12.2351 10.3081L13.558 11.0149L13.9115 10.3534C14.2867 9.65129 14.4991 8.84933 14.4991 8C14.4991 7.15067 14.2867 6.34871 13.9115 5.64655Z"
              fill="currentColor"
            />
          </svg>

          <Slider defaultValue={[33]} max={100} step={1} />
          <svg
            className="flex-shrink-0"
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
              d="M3.74421 10.6976L3 10.5H1.5V5.5H3L3.74421 5.30236L8.5 2.58477V13.4152L3.74421 10.6976ZM3 4L8.5 0.857143L10 0V1.72763V14.2724V16L8.5 15.1429L3 12H1C0.447715 12 0 11.5523 0 11V5C0 4.44772 0.447715 4 1 4H3ZM14.2585 2.96051L14.6728 3.58567C15.5116 4.85121 16 6.3697 16 8C16 9.6303 15.5116 11.1488 14.6728 12.4143L14.2585 13.0395L13.0082 12.2108L13.4225 11.5857C14.1034 10.5582 14.5 9.32657 14.5 8C14.5 6.67343 14.1034 5.44176 13.4225 4.41433L13.0082 3.78916L14.2585 2.96051ZM12.059 4.98506L12.4125 5.64655C12.7876 6.34871 13 7.15067 13 8C13 8.84933 12.7876 9.65129 12.4125 10.3534L12.059 11.0149L10.736 10.3081L11.0895 9.64655C11.3513 9.15657 11.5 8.59676 11.5 8C11.5 7.40324 11.3513 6.84344 11.0895 6.35345L10.736 5.69195L12.059 4.98506Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

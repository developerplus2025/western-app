import { Slider } from "@/components/ui/slider";
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
            <PlusCircleIcon size={16} color="#f0f0f0" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-[2rem]">
            <ShuffleAngularIcon size={16} color="#f0f0f0" />
            <SkipBackIcon size={16} color="#f0f0f0" />
            <PlayIcon size={16} color="#f0f0f0" />
            <SkipForwardIcon size={16} color="#f0f0f0" />
            <RepeatIcon size={16} color="#f0f0f0" />
          </div>
          <div className="flex w-[25rem] gap-[1rem]">
            <p className="text-xs">0:00</p>
            <Slider defaultValue={[33]} max={100} step={1} />
            <p className="text-xs">2:04</p>
          </div>
        </div>
        <div className="flex w-[16rem] items-center gap-4">
          <DevicesIcon size={16} color="#f0f0f0" />
          <QueueIcon size={16} color="#f0f0f0" />
          <MicrophoneStageIcon size={16} color="#f0f0f0" />
          <PictureInPictureIcon size={16} color="#f0f0f0" />

          <AirplayIcon size={16} color="#f0f0f0" />

          <SpeakerLowIcon size={16} color="#f0f0f0" />

          <Slider defaultValue={[33]} max={100} step={1} />
          <SpeakerHighIcon size={16} color="#f0f0f0" />
        </div>
      </div>
    </div>
  );
}

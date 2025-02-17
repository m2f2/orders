import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckSquare, CirclePlay, PauseCircle, Expand, Shrink, Timer, MoreVertical, CircleStop } from "lucide-react";

interface ChatStatusBarProps {
  onFullscreenToggle: () => void;
  isFullscreen: boolean;
}

const buttonBaseClasses = "rounded-xl bg-white text-[#98A2B2] border border-[#98A2B2] hover:bg-gray-200 transition-colors text-[11px]";
const iconSize = "h-3 w-3 text-[#98A2B2]";

export const ChatStatusBar = ({ onFullscreenToggle, isFullscreen }: ChatStatusBarProps) => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const secs = (time % 60).toString().padStart(2, "0");
    return `00:${minutes}:${secs}`;
  };

  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center gap-3">
        <div className={`${buttonBaseClasses} flex items-center gap-2 px-2`}>
          <Timer className={iconSize} />
          <span>{formatTime(seconds)}</span>
          <div className="h-9 border-l border-[#98A2B2]"></div>
          <div className="cursor-pointer">
            {isRunning ? (
              <PauseCircle
                className="text-red-500"
                onClick={() => setIsRunning(false)}
              />
            ) : seconds > 0 ? (
              <CircleStop
                className="text-red-500"
                onClick={() => setSeconds(0)}
              />
            ) : (
              <CirclePlay className="text-green-500" onClick={() => setIsRunning(true)} />
            )}
          </div>
        </div>

        <Button className={`${buttonBaseClasses} flex items-center gap-2`}>
          <CheckSquare className={`${iconSize} `} />
          تحويل لمهمة
        </Button>

        <Button
          onClick={onFullscreenToggle}
          className={`${buttonBaseClasses} px-3 py-1`}
        >
          {isFullscreen ? <Shrink className={iconSize} /> : <Expand className={iconSize} />}
        </Button>

        <Button className={`${buttonBaseClasses} p-1`}>
          <MoreVertical className={iconSize} />
        </Button>
      </div>
    </div>
  );
};
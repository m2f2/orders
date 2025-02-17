import { useRef } from "react";
import { useAtom } from "jotai";
import { ChatStatusBar } from "./chat/ChatStatusBar";
import { ChatMessagesList } from "./chat/ChatMessagesList";
import { fullscreenAtom } from "@/store/fullscreenAtom";

export function ChatContainer() {
  const [isFullscreen, setIsFullscreen] = useAtom(fullscreenAtom);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFullscreenToggle = async () => {
    if (!containerRef.current) return;

    try {
      if (!isFullscreen) {
        if (containerRef.current.requestFullscreen) {
          await containerRef.current.requestFullscreen();
        }
        setIsFullscreen(true);
      } else {
        if (document.fullscreenElement) {
          await document.exitFullscreen();
        }
        setIsFullscreen(false);
      }
    } catch (error) {
      console.error("Fullscreen toggle error:", error);
    }
  };

  return (
    <div
      className={`flex flex-col bg-white h-full`}
      ref={containerRef}
      dir="rtl"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between py-3 px-4 md:px-6 gap-2">
        <h1 className="font-bold text-sm md:text-base text-right w-auto">
          نواجه مشكلة في عدم عمل واجهة المستخدم
        </h1>
        <ChatStatusBar
          isFullscreen={isFullscreen}
          onFullscreenToggle={handleFullscreenToggle}
        />
      </div>

      {/* Messages Area */}
      <ChatMessagesList />

      {/* Reply Section */}
      <h1>test</h1>
    </div>
  );
}

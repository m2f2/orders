import { ChatContainer } from "@/components/common/ChatContainer";
import SidebarContent from "@/components/layout/SidebarContent";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useEffect, useState } from "react";

export default function Orders({ className }: { className?: string }) {
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const updateSidebarState = () => {
      if (window.innerWidth < 768) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    };

    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateSidebarState, 150);
    };

    updateSidebarState();
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div dir="ltr" className={`${className} flex relative max-h-[calc(100%-120px)]`}>
      <SidebarProvider dir="ltr">
        {/* Sidebar Panel */}
        <div
          className={`bg-white border-r transition-all duration-300 ease-in-out z-20 hidden md:block ${
            isExpanded ? "w-[300px]" : "w-0 overflow-hidden"
          }`}
        >
          {isExpanded && <SidebarContent />}
        </div>

        {/* Main Content Area */}
        <div className="relative flex-1 min-w-[300px] w-full">
          {/* Sidebar Toggle Button */}
          <div className="absolute top-6 left-3 md:-left-3 pointer-events-auto !z-50">
            <SidebarTrigger
              onClick={toggleSidebar}
              className="p-1 rounded-full bg-white text-[#98A2B2] border border-[#98A2B2] hover:bg-gray-200 transition-colors shadow-md"
            />
          </div>

          {/* Main Content */}
          <ChatContainer />
        </div>
      </SidebarProvider>
    </div>
  );
}
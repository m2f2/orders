import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Message } from "@/store/messagesAtom";
import { Reply, Mail } from "lucide-react";
import DropdownAction from "./DropdownAction";

interface ChatMessageProps extends Message {
  className?: string;
}

export const ChatMessage = ({
  sender,
  time,
  date,
  message,
  avatarSrc,
  className,
  id,
  emails,
  forwardTo,
}: ChatMessageProps) => {
  const fallbackAvatar = "/avatars/default.png";

  const colorMap = new Map<number, string>([
    [1, "bg-[#00ca7c]/10 border-[#00ca7c]"],
    [2, "bg-[#ffa43d]/5 border-[#ffa43d]"],
    [3, "bg-gray-50 border-gray-300"],
  ]);

  const defaultColor = "bg-white";
  const userIndex = (+id % 3) + 1;
  const messageColor = colorMap.get(userIndex) || defaultColor;

  return (
    <article
      className={cn("group flex my-2 w-full  min-w-[41rem]", className)}
      dir={"rtl"}
    >
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem
          value={`message-${sender}-${date}-${time}`}
          className={`border rounded-lg p-1 ${messageColor}`}
        >
          <AccordionTrigger className="relative p-2 rounded-lg flex items-center ">
            <div className="absolute top-5 left-2">
              <DropdownAction />
            </div>

            <div className="flex items-center gap-3 w-full justify-between">
              <Avatar className="h-10 w-10 shrink-0">
                <AvatarImage
                  src={avatarSrc || fallbackAvatar}
                  alt={`${sender}'s profile picture`}
                  className="object-cover"
                />
                <AvatarFallback className="text-xs font-medium text-gray-600 bg-gray-200 flex items-center justify-center h-10 w-10">
                  {sender
                    .split(" ")
                    .map((word) => word[0])
                    .slice(0, 2)
                    .join("")
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div className="flex flex-col flex-grow">
                <div className="flex gap-3 items-center">
                  <span className="font-semibold text-gray-800 truncate">
                    {sender}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-[#7a8899]">
                    {+id % 2 === 0 ? "منذ 1 أسبوع" : `${date} ${time} م`}
                  </span>
                </div>
                <div className="flex items-center gap-5 text-sm text-[#7a8899]">
                  <div className="flex items-center gap-2">
                    <Reply className="w-4 h-4" />
                    <span>{forwardTo}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span className="text-[#7a8899]">
                      {emails.map((email, index) => (
                        <span key={email} className="">
                          &lt;{email}&gt;{index !== emails.length - 1 && ", "}
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent className=" rounded-lg shadow-md ">
            {message.split("\n").map((line, index) => (
              <p
                key={`${sender}-${date}-${time}-line-${index}`}
                className="text-gray-700 leading-relaxed break-words"
              >
                {line}
              </p>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </article>
  );
};

import { messagesAtom } from '@/store/messagesAtom';
import { useAtom } from 'jotai';
import { useLayoutEffect, useRef } from 'react';
import { ChatMessage } from './ChatMessage';

export const ChatMessagesList = ()=> {
  const [messages] = useAtom(messagesAtom);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const container = messagesContainerRef.current;
    if (container) {
      setTimeout(() => {
        container.scrollTop = container.scrollHeight;
      }, 50);
    }
  }, [messages]);

  return (
    <div
      ref={messagesContainerRef}
      className={`flex flex-col space-y-4  px-6 max-h-[70vh] overflow-y-auto scrollbar-hidden`}
    >
      {messages.map((msg) => (
        <ChatMessage key={msg.id} {...msg} />
      ))}
    </div>
  );
};
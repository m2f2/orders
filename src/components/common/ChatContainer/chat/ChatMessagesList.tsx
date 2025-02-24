import { messagesAtom } from '@/store/messagesAtom';
import { useAtom } from 'jotai';
import { ChatMessage } from './ChatMessage';

export const ChatMessagesList = ()=> {
  const [messages] = useAtom(messagesAtom);
  

  return (
    <div
      className={`flex flex-col space-y-4  px-6 pb-3` }
    >
      {messages.map((msg) => (
        <ChatMessage key={msg.id} {...msg} />
      ))}
    </div>
  );
};
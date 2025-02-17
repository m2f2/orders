import { atom } from 'jotai';

export interface Message {
    isRead: boolean;
    id: string;
    sender: string;
    time: string;
    date: string;
    message: string;
    isCurrentUser: boolean;
    forwardTo: string;
    emails: string[]; 
    avatarSrc: string;
}

const initialMessages: Message[] = [
    {
        id: "1",
        sender: "بندر احمد",
        time: "10:30",
        date: "2024-03-15",
        message: "السلام عليكم، هل يوجد تحديثات على الطلب؟".repeat(5),
        forwardTo: "موجهة إلى راشد فهد",
        isCurrentUser: false,
        isRead: false,
        emails: ["bandar@example.com"],
        avatarSrc: "/avatars/bandar.png",
    },
    {
        id: "2",
        sender: "نور علي",
        time: "11:15",
        date: "2024-03-15",
        message: "نعم، تم شحن الطلب اليوم",
        forwardTo: "موجهة إلى بندر احمد",
        isCurrentUser: true,
        isRead: true,
        emails: ["bandar@example.com","nour@example.com"],
        avatarSrc: "/avatars/nour.png",
    },
    {
        id: "3",
        sender: "علي سالم",
        time: "11:20",
        date: "2024-03-15",
        message: "شكراً على التوضيح، هل يوجد رقم تتبع للشحنة؟",
        forwardTo: "موجهة إلى نور علي",
        isCurrentUser: false,
        isRead: false,
        emails: ["ali@example.com","nour@example.com"],
        avatarSrc: "/avatars/ali.jpeg",
    },
    {
        id: "4",
        sender: "نور علي",
        time: "11:35",
        date: "2024-03-15",
        message: "نعم، رقم التتبع هو 123456789",
        forwardTo: "موجهة إلى علي سالم",
        isCurrentUser: true,
        isRead: true,
        emails: ["ali@example.com"],
        avatarSrc: "/avatars/nour.png",
    },
    {
        id: "5",
        sender: "راشد فهد",
        time: "12:00",
        date: "2024-03-15",
        message: "تمام، شكراً جزيلاً!",
        forwardTo: "موجهة إلى نور علي",
        isCurrentUser: false,
        isRead: false,
        emails: ["nour@example.com","rashid@example.com"],
        avatarSrc: "/avatars/rashid.png",
    },
    {
        id: "6",
        sender: "نور علي",
        time: "12:05",
        date: "2024-03-15",
        message: "على الرحب والسعة، في خدمتك دائماً.",
        forwardTo: "موجهة إلى راشد فهد",
        isCurrentUser: true,
        isRead: true,
        emails: ["ali@example.com"],
        avatarSrc: "/avatars/nour.png",
    },
    {
        id: "7",
        sender: "بندر احمد",
        time: "14:15",
        date: "2024-03-15",
        message: "هل من المتوقع أن تصل غداً؟",
        forwardTo: "موجهة إلى نور علي",
        isCurrentUser: false,
        isRead: false,
        emails: ["nour@example.com"],
        avatarSrc: "/avatars/bandar.png",
    },
    {
        id: "8",
        sender: "نور علي",
        time: "14:30",
        date: "2024-03-15",
        message:
            "وصف مطول للتذكرة مثل نحتاج عرض سعر لخدمات الصيانة اللازمة للمعدات.".repeat(5),
        forwardTo: "موجهة إلى بندر احمد",
        isCurrentUser: true,
        isRead: true,
        emails: ["bandar@example.com",],
        avatarSrc: "/avatars/nour.png",
    },
];

export default initialMessages;

export const messagesAtom = atom<Message[]>(initialMessages);
export const newMessageAtom = atom<string>('');

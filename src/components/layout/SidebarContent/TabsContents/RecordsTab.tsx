import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, TicketPlus, ReplyAll, CircleUser, NotepadText, StretchHorizontal } from "lucide-react";
import clsx from "clsx"; 

const records = [
  {
    id: 1,
    user: "محمد صقر",
    action:
      "قام @محمد صقر بإنشاء تذكرة باسم نواجه مشكلة في عدم عمل واجهة المستخدم الحالية، ارجو الرد",
    date: "22-09-2024",
    time: "02:32 م",
    icon: <TicketPlus className="text-blue-500" />,
    color: "blue-500",
  },
  {
    id: 2,
    user: "راشد فهد",
    action: "قام @راشد فهد بالرد على التذكرة بـ جاري العمل على اصلاح المشكلة",
    date: "22-09-2024",
    time: "02:32 م",
    icon: <ReplyAll className="text-gray-500" />,
    color: "gray-500",
  },
  {
    id: 3,
    user: "العميل",
    action: "قام @العميل بالرد على التذكرة شاكرين لمجهوداتكم والرد السريع",
    date: "22-09-2024",
    time: "02:32 م",
    icon: <CircleUser className="text-green-500" />,
    color: "green-500",
  },
  {
    id: 4,
    user: "راشد فهد",
    action:
      "قام @راشد فهد بإضافة ملاحظة بـ ارجو العمل على حل المشكلة بأسرع ما يمكن",
    date: "22-09-2024",
    time: "02:32 م",
    icon: <NotepadText className="text-yellow-500" />,
    color: "yellow-500",
  },
  {
    id: 5,
    user: "محمد صقر",
    action: "قام @محمد صقر بتغيير حالة التذكرة من مفتوح إلى مغلق",
    date: "22-09-2024",
    time: "02:32 م",
    icon: <StretchHorizontal className="text-purple-500" />,
    color: "purple-500",
  },
];

export default function RecordsTab() {
  return (
    <div className="h-full min-w-52">
      <div className="flex items-center mb-4">
        <h2 className="text-base font-medium px-4 py-1">السجلات الزمنية</h2>
        <span className="px-3 border py-1 rounded-xl text-sm font-medium text-gray-700">
          {records.length}
        </span>
      </div>

      <Card className="border-0 shadow-none bg-white rounded-lg">
        <CardContent className="px-4">
          <div className="relative flex flex-col items-start gap-2">
            {records.map((record, index) => (
              <div key={record.id} className="relative flex flex-row-reverse items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-medium text-xs text-[#181C34]">أحدث الطلبات</h3>
                  <div className="text-[9px] text-gray-400">
                    <span>{record.date}</span>
                    <span> - {record.time}</span>
                  </div>
                  <p className="text-[9px] text-[#29304c] my-2">{record.action}</p>
                </div>
                <div className="relative flex flex-col items-center">
                  <div
                    className={clsx(
                      "relative z-10 w-7 h-7 flex items-center justify-center bg-white border rounded-full shadow p-1",
                      `${record.color}/10 `
                    )}
                  >
                    {record.icon}
                  </div>

                  {index !== records.length - 1 && (
                    <div className="relative flex flex-col items-center">
                      <div className={clsx("w-[1px]", `bg-${record.color}`)} style={{ height: "40px" }}></div>
                      <ArrowDown className={clsx("w-4 h-4 mt-[-6px]", `text-${record.color}`)} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
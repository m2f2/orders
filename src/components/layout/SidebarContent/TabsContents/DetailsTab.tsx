import SelectField from "@/components/common/SelectSection";
import { Card, CardContent } from "@/components/ui/card";
import { SelectSection } from "@/types/SelectSection";
import { ChevronDown, Plus } from "lucide-react";

const selectSections: SelectSection[] = [
  {
    label: "التصنيف",
    fieldName: "classification",
    defaultValue: "training-requests",
    options: [
      { value: "training-requests", label: "طلبات التدريب" },
      { value: "technical-support", label: "الدعم الفني" },
    ],
    icon: <Plus className="w-4 h-4" />,
  },
  {
    label: "مسؤول الدعم",
    fieldName: "support-manager",
    defaultValue: "bandar-ahmed",
    options: [
      { value: "bandar-ahmed", label: "بندر احمد", avatar: "avatars/bandar.png" },
    ],
  },
  {
    label: "الاهمية",
    fieldName: "priority",
    defaultValue: "low",
    options: [
      { value: "low", label: "منخفضة", textColor: "text-[#ffa43d]" },
      { value: "medium", label: "متوسطة", textColor: "text-yellow-400" },
    ],
    icon: <ChevronDown className="w-4 h-4" />,
  },
  {
    label: "الحالة",
    fieldName: "status",
    defaultValue: "open",
    options: [
      { value: "open", label: "مفتوح", textColor: "text-[#5a91ff]" },
      { value: "closed", label: "مغلق", textColor: "text-gray-400" },
    ],
    icon: <ChevronDown className="w-4 h-4" />,
  },
  {
    label: "القسم",
    fieldName: "department",
    defaultValue: "maintenance",
    options: [
      { value: "maintenance", label: "الصيانة" },
      { value: "sales", label: "المبيعات" },
    ],
    icon: <Plus className="w-4 h-4" />,
  },
  {
    label: "اسم القناة",
    fieldName: "channel",
    defaultValue: "email",
    options: [
      { value: "email", label: "Email" },
      { value: "whatsapp", label: "WhatsApp" },
    ],
    icon: <Plus className="w-4 h-4" />,
  },
];

export default function DetailsTab() {
  return (
<div className="text-right min-w-52 ">
        <h2 className="text-base font-medium px-4 py-1">التفاصيل</h2>
      <Card className="border-0 shadow-none">
        <CardContent className="space-y-4 p-4">
          {selectSections.map((section) => (
            <SelectField key={section.fieldName} section={section} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
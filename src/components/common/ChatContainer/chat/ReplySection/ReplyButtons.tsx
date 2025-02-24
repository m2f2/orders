import { Button } from "@/components/ui/button";
import { X, ChevronUp } from "lucide-react";

interface ReplyButtonsProps {
  onCancel: () => void;
  onSubmit: () => void;
}

const  ReplyButtons: React.FC<ReplyButtonsProps> = ({ onCancel, onSubmit }) => {
  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="sm"
        className="text-[#7A8699] hover:bg-gray-100 transition-colors rounded-xl flex items-center gap-2 border border-gray-300"
        aria-label="إلغاء الرسالة"
        onClick={onCancel}
      >
        <X className="h-4 w-4" />
        إلغاء
      </Button>

      <Button
        size="sm"
        className="bg-green-500 hover:bg-green-600 rounded-xl transition-all duration-200 text-white flex items-center gap-2 px-4 shadow-md focus:ring-2 focus:ring-green-300"
        aria-label="إرسال الرسالة"
        onClick={onSubmit}
      >
        إضافة رد
        <ChevronUp className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ReplyButtons;
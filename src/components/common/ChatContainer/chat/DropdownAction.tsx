import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, EllipsisVertical, Trash2 } from "lucide-react";

const DropdownAction = () => {
  return (
    <DropdownMenu dir="rtl">
      <DropdownMenuTrigger asChild>
        <div className="text-[#98A2B2] transition-colors">
          <EllipsisVertical className="h-4 w-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white border border-[#E2E8F0] rounded-xl shadow-lg mt-2 p-3" >
        <DropdownMenuItem
          onClick={() => console.log("Edit clicked")}
          className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
        >
          <Edit className="h-5 w-5 text-[#98A2B2]" />
          تعديل
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => console.log("Delete clicked")}
          className="flex items-center gap-2 p-2 text-[#F5355B] hover:text-[#F5355B] hover:bg-gray-100 cursor-pointer"
        >
          <Trash2 className="h-5 w-5 text-[#F5355B]" />
          حذف
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownAction;

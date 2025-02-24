import { Button } from "@/components/ui/button";
import { FilePlus } from "lucide-react";

type QuickResponsesProps = {
            responses: string[];
          };
const QuickResponses:React.FC<QuickResponsesProps> = ({ responses }) => {
  return (
    <div className="flex items-center justify-between whitespace-nowrap py-2 text-[#7A8699]">
      <div className="flex items-center gap-4">
        <span className="text-sm">ردود سريعة</span>
        <div className="flex gap-2.5 overflow-x-auto w-[600px] bg-gray-100 p-2 rounded-xl scrollbar-hidden flex-nowrap">
          {responses.map((response, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full inline-block border text-[9px] flex-shrink-0"
            >
              {response}
            </span>
          ))}
        </div>
      </div>
      <Button variant='ghost' className="flex items-center gap-2 border rounded-[8px] px-3 py-2">
      <FilePlus className="w-3 h-3"/>
        استدعاء من قالب 
        </Button>
    </div>
  );
};

export default QuickResponses;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRightLeft, Contact, FileText, FlagTriangleRight, SquareMenu, WalletCards } from "lucide-react";
import DetailsTab from "./TabsContents/DetailsTab";
import ContactTab from "./TabsContents/ContactTab";
import RecordsTab from "./TabsContents/RecordsTab";
import TicketsTab from "./TabsContents/TicketsTab";
import ActivityTab from "./TabsContents/ActivityTab";
import ActivitiesTab from "./TabsContents/ActivitiesTab";


export default function SidebarContent() {
  return (
    <Tabs defaultValue="details" className="flex h-full flex-wrap ">
      <TabsList className="w-[71px] flex flex-col justify-start gap-2 md:gap-3  bg-transparent">
        {[
          { value: "activity", label: "الإجراءات", icon: <ArrowRightLeft /> },
          { value: "contact", label: "بيانات الاتصال", icon: <Contact /> },
          { value: "tickets", label: "تذاكر مرتبطة", icon: <WalletCards /> },
          { value: "details", label: "التفاصيل", icon: <FileText /> },
          { value: "records", label: "السجلات الزمنية", icon: <FlagTriangleRight /> },
          { value: "activities", label: "الأنشطة", icon: <SquareMenu /> },
        ].map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="flex flex-col items-center text-[8px] group text-[#98A2B2] data-[state=active]:text-[#00CA7C] mx-1"
          >
            <span className="w-8 h-8 md:w-10 md:h-10 mb-1 p-2 rounded-lg group-data-[state=active]:bg-[#00CA7C]/10">
              {tab.icon}
            </span>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Content Section */}
      <div className="w-full flex-1 overflow-hidden border-l border-gray-200 z-0" dir="rtl">
        <TabsContent value="details" className="h-full overflow-y-auto">
          <DetailsTab />
        </TabsContent>
        <TabsContent value="contact" className="h-full overflow-y-auto">
          <ContactTab />
        </TabsContent>
        <TabsContent value="tickets" className="h-full overflow-y-auto">
          <TicketsTab />
        </TabsContent>
        <TabsContent value="activity" className="h-full overflow-y-auto">
          <ActivityTab />
        </TabsContent>
        <TabsContent value="records" className="h-ful overflow-y-auto">
          <RecordsTab />
        </TabsContent>
        <TabsContent value="activities" className="h-full overflow-y-auto">
          <ActivitiesTab />
        </TabsContent>
      </div>
    </Tabs>
  );
}

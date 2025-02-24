import { useState } from "react";
import EmailRecipients from "./EmailRecipients";
import QuickResponses from "./QuickResponses";
import ReplyButtons from "./ReplyButtons";
import { Plate, PlateContent } from "@udecode/plate/react";
import { Paperclip, Sparkle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ToolbarComponent from "./ToolbarComponent";
import { useCreateEditor } from "@/hooks/use-create-editor";

const Editor = () => {
  const sampleResponses = [
    "مرحبا بك، سيتم تحويل المشكلة للفريق المختص",
    "أهلا، تم استلام طلبكم وجاري معالجته",
    "مرحبا بك، سيتم تحويل المشكلة للفريق المختص",
    "مرحبا بك، سيتم تحويل المشكلة للفريق المختص",
    "أهلا، تم استلام طلبكم وجاري معالجته",
    "مرحبا بك، سيتم تحويل المشكلة للفريق المختص",
  ];
  const buttonBaseClasses =
    "rounded-full bg-white text-[#98A2B2] border border-[#98A2B2] transition-colors text-[14px]";

  const [toRecipients, setToRecipients] = useState<string[]>([]);
  const [ccRecipients, setCcRecipients] = useState<string[]>([]);
  const [isCcVisible, setIsCcVisible] = useState(false);
  const [isToolbarVisible, setIsToolbarVisible] = useState(false);

  const addRecipient =
    (setter: React.Dispatch<React.SetStateAction<string[]>>) =>
    (email: string) =>
      setter((prev) => [...prev, email]);

  const removeRecipient =
    (setter: React.Dispatch<React.SetStateAction<string[]>>) =>
    (email: string) =>
      setter((prev) => prev.filter((r) => r !== email));

  const toggleCcVisibility = () => setIsCcVisible((prev) => !prev);
  const toggleToolbar = () => setIsToolbarVisible((prev) => !prev);

  const editor = useCreateEditor();
  const handleSubmit = () => {};

  const handleCancel = () => {};

  return (
    <Plate editor={editor}>
      <QuickResponses responses={sampleResponses} />
      <div className="border border-gray-300 rounded-md w-full">
        <div className="border-b">
          <EmailRecipients
            toRecipients={toRecipients}
            addToRecipient={addRecipient(setToRecipients)}
            removeToRecipient={removeRecipient(setToRecipients)}
            ccRecipients={ccRecipients}
            addCcRecipient={addRecipient(setCcRecipients)}
            removeCcRecipient={removeRecipient(setCcRecipients)}
            isCcVisible={isCcVisible}
            toggleCcVisibility={toggleCcVisibility}
          />
        </div>

          <PlateContent
            placeholder={`إضافة رد ...`}
            className="rounded-xl p-2 w-full border-0 outline-none text-sm min-h-9 max-h-36  overflow-y-scroll scrollbar-hidden"
          />
          <div className="flex gap-4 justify-between items-center p-2 mt-4">
            <div className="flex  gap-2">
              <Button
                className={`${buttonBaseClasses}  hover:bg-green-600 hover:text-white ${
                  isToolbarVisible ? "bg-[#00CA7C] text-white " : ""
                }`}
                size="sm"
                onClick={toggleToolbar}
              >
                A
              </Button>
              <Button className={`rounded-full bg-gradient-ai`} size="sm">
                <Sparkle className="w-3 h-3" />
              </Button>
              <Button
                className={`border-0 bg-white text-[#7a8699] hover:bg-white`}
                size="sm"
              >
                <Paperclip className="w-3 h-3" />
              </Button>
            </div>
            <ReplyButtons onSubmit={handleSubmit} onCancel={handleCancel} />
          </div>
      </div>
                
      {isToolbarVisible && (
        <div className="bg-white border  rounded-lg p-2 flex gap-2 mt-2">
          <ToolbarComponent />
        </div>
      )}
    </Plate>
  );
};

export default Editor;

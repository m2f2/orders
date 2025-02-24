import { Button } from "@/components/ui/button";
import EmailInput from "./EmailInput";
import { Expand, Shrink } from "lucide-react";
import { EmailRecipientsProps } from "@/types/EmailRecipients";

const EmailRecipients: React.FC<EmailRecipientsProps> = ({
  toRecipients,
  addToRecipient,
  removeToRecipient,
  ccRecipients,
  addCcRecipient,
  removeCcRecipient,
  isCcVisible,
  toggleCcVisibility,
}) => {
  const buttonBaseClasses =
    "rounded-xl bg-white text-[#98A2B2] border border-[#98A2B2] transition-colors text-[11px]";
  const iconSize = "h-3 w-3 text-[#98A2B2]";
  return (
    <div className="flex justify-between items-center p-2">
      <div className="flex flex-col gap-2">
        <EmailInput
          label="رد الى"
          placeholder="ahmed@example.com"
          onAddRecipient={(email) => {
            if (toRecipients.length === 0) {
              addToRecipient(email);
            }
          }}
          recipients={toRecipients}
          onRemoveRecipient={removeToRecipient}
        />
        {isCcVisible && (
          <EmailInput
            label="CC"
            placeholder="ادخل الاسم"
            onAddRecipient={addCcRecipient}
            recipients={ccRecipients}
            onRemoveRecipient={removeCcRecipient}
            isCcField={true}
          />
        )}
      </div>
      <div className="flex items-start gap-2">
        <Button
          className={`${buttonBaseClasses} px-3 py-2.5 hover:bg-green-600 hover:text-white ${
            isCcVisible ? "bg-[#00CA7C] text-white " : "bg-white"
          }`}
          onClick={toggleCcVisibility}
        >
          CC
        </Button>
        <Button className={`${buttonBaseClasses} px-3 py-1 hover:bg-gray-200 active:bg-gray-200`}>
          {false ? (
            <Shrink className={iconSize} />
          ) : (
            <Expand className={iconSize} />
          )}
        </Button>
      </div>
    </div>
  );
};

export default EmailRecipients;

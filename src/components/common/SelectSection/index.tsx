import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { SelectSection } from "@/types/SelectSection";

const SelectField = ({ section }: { section: SelectSection }) => {
  const [value, setValue] = useState(section.defaultValue);
  const selectedOption = section.options.find((opt) => opt.value === value);

  const isHexColor = selectedOption?.textColor?.includes("#");
  const customColor = isHexColor
    ? selectedOption?.textColor?.replace("text-[", "").replace("]", "")
    : "";

  return (
    <div className="space-y-2" dir="rtl">
      {/* Label Section */}
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground text-[11px]">
          {section.label}
        </span>
      </div>

      {/* Select Field */}
      <Select value={value} onValueChange={setValue} dir="rtl">
        <SelectTrigger className="w-full justify-between rounded-xl outline-none focus:ring-0 focus:outline-none">
          <div className="flex items-center gap-2">
            {/* Avatar */}
            {selectedOption?.avatar && (
              <Avatar className="w-6 h-6">
                <AvatarImage src={selectedOption.avatar} />
                <AvatarFallback>
                  {selectedOption.label.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
            )}

            {/* Selected Value */}
            {selectedOption?.textColor ? (
              <span
                className={`px-4 rounded-md text-[11px] border ${
                  isHexColor ? "" : selectedOption.textColor
                }`}
                style={{
                  color: isHexColor ? customColor : undefined,
                  backgroundColor: isHexColor ? `${customColor}1A` : undefined,
                  borderColor: isHexColor ? customColor : undefined,
                }}
              >
                {selectedOption.label}
              </span>
            ) : (
              <h3 className="text-[11px]">{selectedOption?.label}</h3>
            )}
          </div>
        </SelectTrigger>

        {/* Dropdown Options */}
        <SelectContent className="rounded-xl text-[11px]">
          {section.options.map(({ value, label, avatar }) => (
            <SelectItem key={value} value={value}>
              <div className="flex items-center gap-2 text-[11px]">
                {/* Avatar */}
                {avatar && (
                  <Avatar className="w-6 h-6">
                    <AvatarImage src={avatar} />
                    <AvatarFallback>{label.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                )}

                {/* Option Label */}
                {label}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectField;
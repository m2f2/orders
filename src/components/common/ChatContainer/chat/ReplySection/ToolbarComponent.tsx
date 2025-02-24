import * as Toolbar from "@radix-ui/react-toolbar";
import { MarkToolbarButton } from "@/components/plate-ui/mark-toolbar-button";
import { useEditorRef } from "@udecode/plate/react";
import { setAlign } from "@udecode/plate-alignment";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  BoldIcon,
  ItalicIcon,
} from "lucide-react";
import { BoldPlugin, ItalicPlugin } from "@udecode/plate-basic-marks/react";
import { EmojiDropdownMenu } from "@/components/plate-ui/emoji-dropdown-menu";

const ToolbarComponent = () => {
  const editor = useEditorRef();

  const handleAlignClick = (align: "left" | "center" | "right" | "justify") => {
    if (editor) {
      setAlign(editor, { value: align });
    }
  };

  return (
    <Toolbar.Root dir="rtl">
      <div className="flex gap-2 w-full ">
        {[
          { plugin: BoldPlugin, icon: <BoldIcon />, tooltip: "عريض (⌘+B)" },
          { plugin: ItalicPlugin, icon: <ItalicIcon />, tooltip: "مائل (⌘+I)" },
        ].map(({ plugin, icon, tooltip }) => (
          <MarkToolbarButton
            key={tooltip}
            nodeType={plugin.key}
            tooltip={tooltip}
          >
            <span className="text-[#7A8699] px-1">{icon}</span>
          </MarkToolbarButton>
        ))}

        {[
          {
            align: "right",
            icon: <AlignRight />,
            tooltip: "محاذاة لليمين (⌘+R)",
          },
          {
            align: "center",
            icon: <AlignCenter />,
            tooltip: "توسيط النص (⌘+E)",
          },
          {
            align: "left",
            icon: <AlignLeft />,
            tooltip: "محاذاة لليسار (⌘+L)",
          },
        ].map(({ align, icon, tooltip }) => (
          <MarkToolbarButton
            key={tooltip}
            nodeType=""
            tooltip={tooltip}
            onClick={() => handleAlignClick(align)}
            
          >
            <span className="text-[#7A8699] px-1">{icon}</span>
          </MarkToolbarButton>
          
        ))}
        
        <EmojiDropdownMenu className="text-[#7A8699]" />
        {/* list number  */}
      </div>
    </Toolbar.Root>
  );
};

export default ToolbarComponent;

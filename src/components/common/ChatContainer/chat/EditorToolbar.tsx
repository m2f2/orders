import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  FileText,
  AlignRight,
  AlignCenter,
  AlignLeft,
  AlignJustify,
  List,
  Bold,
  Italic,
  FilePlus
} from "lucide-react";

type ToolGroup = {
  icon: React.ElementType;
  name: string;
};

export const EditorToolbar = () => {
  const [activeTools, setActiveTools] = useState<Record<string, boolean>>({});

  const toolGroups: ToolGroup[] = [
    { icon: Bold, name: "bold" },
    { icon: List, name: "list" },
    { icon: Italic, name: "italic" },
    { icon: FileText, name: "file" },
    { icon: AlignRight, name: "align-right" },
    { icon: AlignCenter, name: "align-center" },
    { icon: AlignLeft, name: "align-left" },
    { icon: AlignJustify, name: "align-justify" },
  ];

  const handleToolToggle = (toolName: string) => {
    setActiveTools((prev) => ({
      ...prev,
      [toolName]: !prev[toolName],
    }));
  };

  return (
    <div className=" w-full flex justify-between items-center p-2 border-b ">
      <div className="flex items-center gap-2">
        {toolGroups.map(({ icon: Icon, name }) => (
          <Button
            key={name}
            variant="ghost"
            size="icon"
            onClick={() => handleToolToggle(name)}
            className={`h-8 w-8 text-gray-500 rounded-xl ${
              activeTools[name]
                ? "bg-primary/10 hover:bg-primary/20 "
                : "hover:bg-muted"
            }`}
            aria-pressed={activeTools[name]}
          >
            <Icon className="h-4 w-4" />
          </Button>
        ))}
      </div>
      <Button className="h-9 rounded-xl gap-2 text-gray-500 bg-muted p-" variant='outline'>
        <FilePlus className="h-4 w-4" />
        استدعاء من قالب</Button>
    </div>
  );
};

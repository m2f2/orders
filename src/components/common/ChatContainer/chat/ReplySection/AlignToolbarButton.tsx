import { ToolbarButton } from "@radix-ui/react-toolbar";
import { setAlign } from "@udecode/plate-alignment";
import { useEditorRef } from "@udecode/plate/react";

interface AlignmentButtonProps {
  align: "left" | "center" | "right" | "justify";
  tooltip: string;
  icon: React.ReactNode;
}

const AlignToolbarButton = ({
  align,
  tooltip,
  icon,
}: AlignmentButtonProps) => {
  const editor = useEditorRef();

  const handleClick = () => {
    if (editor) {
      setAlign(editor, { value: align });
    }
  };

  return (
    <ToolbarButton
      onClick={handleClick}
      title={tooltip}
    >
      {icon}
    </ToolbarButton>
  );
};

export default AlignToolbarButton;
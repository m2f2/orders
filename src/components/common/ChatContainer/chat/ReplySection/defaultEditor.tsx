import { Plate, PlateContent, usePlateEditor } from "@udecode/plate/react";
import ReplyButtons from "./ReplyButtons";

const DefaultEditor = () => {
  const editor = usePlateEditor();

  const handleCancel = () => {
  };

  const handleSubmit = () => {
  };

  return (
    <section className="max-h-[87px]">
      <Plate editor={editor}>
        <div className="flex items-center gap-3">
          <PlateContent
            placeholder="إضافة رد ..."
            className="rounded-xl p-3 w-full border-0 outline-none"
          />

          <ReplyButtons onSubmit={handleSubmit} onCancel={handleCancel} />
        </div>
      </Plate>
    </section>
  );
};

export default DefaultEditor;
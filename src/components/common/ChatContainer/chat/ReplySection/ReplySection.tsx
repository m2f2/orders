import { useState } from "react";
import DefaultEditor from "./defaultEditor";
import Editor from "./Editor";

const ReplySection = () => {
  const [showEditor, setShowEditor] = useState(false);

  return (
    <section className="w-full bg-white py-2 border-t px-6 transition-all duration-300">
      {!showEditor ? (
        <div onClick={() => setShowEditor(true)} className="cursor-pointer">
          <DefaultEditor />
        </div>
      ) : (
        <Editor />
      )}

    </section>
  );
};

export default ReplySection;

import React, { useEffect, useRef } from "react";
import { Textarea } from "@/components/ui/textarea";

interface EditorProps {
  code: string;
  setCode: (code: string) => void;
  language: "html" | "css" | "javascript";
}

const Editor: React.FC<EditorProps> = ({ code, setCode, language }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "400px";
    }
  }, []);

  return (
    <div className="relative border rounded-md overflow-hidden">
      <div className="absolute top-2 right-2 bg-secondary text-xs px-2 py-1 rounded-sm font-mono">
        {language}
      </div>
      <Textarea
        ref={textareaRef}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="font-mono text-sm h-full min-h-[400px] resize-none p-4"
        placeholder={`Enter your ${language} code here...`}
      />
    </div>
  );
};

export default Editor;

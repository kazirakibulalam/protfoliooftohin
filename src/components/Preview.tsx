
import React, { useEffect, useRef } from "react";

interface PreviewProps {
  htmlCode: string;
  cssCode: string;
  jsCode: string;
}

const Preview: React.FC<PreviewProps> = ({ htmlCode, cssCode, jsCode }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    updatePreview();
  }, [htmlCode, cssCode, jsCode]);

  const updatePreview = () => {
    if (!iframeRef.current) return;

    const previewContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
      </html>
    `;

    const iframe = iframeRef.current;
    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
    
    if (iframeDoc) {
      iframeDoc.open();
      iframeDoc.write(previewContent);
      iframeDoc.close();
    }
  };

  return (
    <div className="border rounded-md overflow-hidden bg-white w-full h-[400px]">
      <iframe
        ref={iframeRef}
        title="Preview"
        className="w-full h-full"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
};

export default Preview;

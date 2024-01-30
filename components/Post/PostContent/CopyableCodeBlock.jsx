"use client";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CopyableCodeBlock = ({ children }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    const textToCopy = children?.code;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset the copied state after 2 seconds
    });
  };

  const codeHighlightCache = new Map();

  const retrieveCodeFromHighlightCache = (language, content) => {
    const cachedItem = codeHighlightCache.get(content);
    if (cachedItem === undefined) {
      const highlighterProps = {
        language,
        children: content,
        style: oneDark,
        wrapLines: true,
        customStyle: {
          borderRadius: "10px",
        },
      };
      SyntaxHighlighter(highlighterProps);
      const cachedVar = SyntaxHighlighter(highlighterProps);
      codeHighlightCache.set(content, cachedVar);
      return cachedVar;
    }

    return cachedItem;
  };

  return (
    <div className="relative">
      <div className="absolute right-2 top-1 p-2">
        <button
          onClick={handleCopyClick}
          className="rounded-lg bg-blue-800 p-2 text-sm text-white"
        >
          {isCopied ? "Copied" : "Copy"}
        </button>
      </div>
      {retrieveCodeFromHighlightCache(children?.language, children?.code)}
    </div>
  );
};

export default CopyableCodeBlock;

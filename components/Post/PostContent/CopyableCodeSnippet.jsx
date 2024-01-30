"use client";

import React from "react";
import { useState } from "react";

const CopyableCodeSnippet = ({ children }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    const textToCopy = children?.[0];
    navigator.clipboard.writeText(textToCopy).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset the copied state after 2 seconds
    });
  };

  return (
    <span className="mt-12 flex items-center justify-between rounded-md bg-[#282C34] p-4 text-primary-dark">
      <span>
        <span className="mr-5 text-green-500">&gt;</span>
        {children}
      </span>
      <button
        onClick={handleCopyClick}
        className="rounded-lg bg-blue-800 p-2 text-sm text-white"
      >
        {isCopied ? "Copied" : "Copy"}
      </button>
    </span>
  );
};

export default CopyableCodeSnippet;

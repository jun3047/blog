"use client";

import { Highlight, themes } from "prism-react-renderer";
import React, { useState, useEffect } from "react";

const CodeEditor = ({
  initialCode = "코드를 입력하세요",
  language = "javascript",
}: {
  initialCode?: string;
  language?: string;
}) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      try {
        const capturedLogs: string[] = [];

        // Override console.log
        // eslint-disable-next-line no-console
        const originalConsoleLog = console.log;
        // eslint-disable-next-line no-console
        console.log = (...args) => {
          capturedLogs.push(args.map(arg => String(arg)).join(" "));
        };

        try {
          // Safely execute the code using Function constructor
          const executeCode = new Function(code);
          const result = executeCode();
          if (capturedLogs.length > 0) {
            setOutput(capturedLogs.join("\n"));
          } else {
            setOutput(String(result));
          }
        } finally {
          // Restore original console.log
          // eslint-disable-next-line no-console
          console.log = originalConsoleLog;
        }
      } catch (error) {
        if (error instanceof Error) {
          setOutput(`Error: ${error.message}`);
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [code]);

  return (
    <div>
      {/* Highlight Section */}
      <Highlight theme={themes.dracula} code={code || ""} language={language}>
        {({ className, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${className} not-prose p-4 rounded-md`}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>

      {/* Textarea for Code Input */}
      <textarea
        value={code}
        onChange={e => setCode(e.target.value || "")}
        className="not-prose h-36 mt-4 font-mono text-sm border border-gray-300 rounded-md p-4"
      />

      {/* Output Section */}
      <div className="not-prose mt-4 p-4 bg-gray-800 text-gray-100 rounded-md font-mono text-sm">
        <strong>Output:</strong>
        <pre>{output || "No output yet"}</pre>
      </div>
    </div>
  );
};

export default CodeEditor;

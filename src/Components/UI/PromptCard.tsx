import * as React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

interface IPromptCardProps {
  aiTool: string;
  category: string;
  content: string;
  accuracy?: string;
}

const PromptCard: React.FunctionComponent<IPromptCardProps> = ({
  aiTool,
  category,
  content,
  accuracy = "100%",
}) => {
  return (
    <div className="flex flex-col border-gray-300 border shadow-md rounded h-[20rem] w-[20rem] p-4 justify-between overflow-hidden">
      <div className="flex justify-start gap-2 mb-2">
        <span className="bg-black px-2 py-1 text-sm rounded text-green-300">
          {aiTool}
        </span>{" "}
        <span className="bg-gray-300 px-2 py-1 text-sm rounded text-gray-800">
          {category}
        </span>
      </div>
      <p className="text-xl font-serif text-gray-600">
        <ReactMarkdown className="prose">{content.slice(0, 100)}</ReactMarkdown>
      </p>

      <div className="flex gap-2 mt-4 items-center justify-between">
        <h3 className="text-sm font-mono font-bold text-green-600">
          {accuracy}
        </h3>
        <div className="flex justify-end gap-2">
          <button className="px-4 border py-1 rounded">Share</button>
          <button className="px-4 border py-1">View</button>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;

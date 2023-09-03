import * as React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { AiOutlineCopy, AiOutlineShareAlt } from "react-icons/ai";

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
    <div className=" box-border flex flex-col  border-gray-700 shadow-md rounded h-[20rem] w-[20rem] p-4 justify-between overflow-hidden bg-cardBackground transition-all ease-in-out">
      <div className="flex justify-start gap-2 mb-2">
        <span className="bg-black px-2 py-1 text-sm rounded text-green-300">
          {aiTool}
        </span>{" "}
        <span className="bg-gray-300 px-2 py-1 text-sm rounded text-gray-800">
          {category}
        </span>
      </div>
      <p className="text-xl text-gray-600 flex-1 mt-2 ">
        <ReactMarkdown className="font-semibold  text-paragraphColor tracking-wide">
          {content}
        </ReactMarkdown>
      </p>

      <div className="flex gap-2 mt-4 items-center justify-between">
        <h3
          className="text-sm font-mono font-bold text-green-600"
          aria-label="accuracy"
        >
          {accuracy}
        </h3>
        <div className="flex justify-end gap-2">
          <button className="" aria-label="share">
            <AiOutlineShareAlt className="text-3xl" />
          </button>
          <button className="py-1" aria-label="copy">
            <AiOutlineCopy className="text-3xl  text-primaryButtonText" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;

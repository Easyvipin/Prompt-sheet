import InputPrompt from "@src/Components/InputPrompt";
import { createPrompt } from "@src/services/apiRequests";
import React from "react";

interface IPromptContainerProps {}

const PromptContainer: React.FunctionComponent<IPromptContainerProps> = (
  props
) => {
  const [prompt, setPrompt] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(event.target.value);
  };

  const handleCreatePrompt = async () => {
    const response = await createPrompt({
      que: prompt,
    });
    if (response.status == "200") {
      console.log("added");
    }
  };

  return (
    <main className="border-2 h-screen">
      <InputPrompt
        name="prompt"
        labelFor="PROMPT"
        maxLength={400}
        minLength={400}
        disabled={false}
        onChange={handleChange}
      />
      <button
        className="text-md focus:outline-none border rounded-md p-2 bg-neutral-950 text-white"
        onClick={handleCreatePrompt}
      >
        ADD PROMPT
      </button>
    </main>
  );
};

export default PromptContainer;

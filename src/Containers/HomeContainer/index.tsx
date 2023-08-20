import { useAuth } from "@clerk/nextjs";
import { userUpsert } from "@src/services/apiRequests";
import React, { useEffect } from "react";
import { useAllPrompts } from "./hooks";
import PromptCard from "@src/Components/UI/PromptCard";
import Loader from "@src/Components/UI/Loader";

interface IHomeContainerProps {}

const HomeContainer: React.FunctionComponent<IHomeContainerProps> = (props) => {
  const { isLoaded, userId } = useAuth();

  useEffect(() => {
    async function checkUser(userId: string) {
      await userUpsert(userId);
    }

    if (userId) {
      checkUser(userId);
    }
  }, [userId]);

  const { data, isLoading, error } = useAllPrompts();

  return (
    <div className="">
      <div className="flex justify-between">
        <h1 className="text-xl">Your prompts!</h1>

        <div className="flex gap-3 flex-wrap justify-start">
          <select
            name="cars"
            id="cars"
            form="carform"
            className="p-2 border rounded px-2 text-sm"
            placeholder="Choose Category"
          >
            <option value="" className="text-center" disabled selected>
              chatGPT
            </option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <select
            name="cars"
            id="cars"
            form="carform"
            className="p-2 border rounded px-2 text-sm  "
            placeholder="Choose Category"
          >
            <option value="" className="text-center" disabled selected>
              Choose Category
            </option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <button className="border px-6 bg-black text-white rounded text-sm">
            Filter
          </button>
        </div>
      </div>
      <div className="cards flex h-[75vh] border border-dashed border-gray-300 overflow-y-scroll justify-between gap-y-[2rem] flex-wrap p-8 mt-2">
        {isLoading && (
          <Loader size={40} color="#000" message="Looking for prompts" />
        )}
        {!isLoading &&
          data.length > 0 &&
          data.map((eachPrompt) => (
            <PromptCard
              key={eachPrompt.id}
              aiTool={eachPrompt.aiTool}
              category={eachPrompt.category.type}
              content={eachPrompt.content}
            />
          ))}
      </div>
    </div>
  );
};

export default HomeContainer;

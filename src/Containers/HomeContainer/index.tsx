import { useAuth } from "@clerk/nextjs";
import { userUpsert } from "@src/services/apiRequests";
import React, { useEffect } from "react";
import { useAllPrompts } from "./hooks";
import PromptCard from "@src/Components/UI/PromptCard";

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
        <h1 className="text-2xl">Your prompts!</h1>

        <div className="flex gap-3 flex-wrap justify-start">
          <select
            name="cars"
            id="cars"
            form="carform"
            className="p-2 border rounded px-2"
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
            className="p-2 border rounded px-2"
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
          <input
            className="rounded p-2 border"
            placeholder="Add new Category"
          />
          <button className="border px-6 rounded">Filter</button>
        </div>
      </div>
      {!isLoading && data.length > 0 && (
        <div className="cards flex gap-8 mt-8 flex-wrap ">
          {data.map((eachPrompt) => (
            <PromptCard
              key={eachPrompt.id}
              aiTool={eachPrompt.aiTool}
              category={eachPrompt.category.type}
              content={eachPrompt.content}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeContainer;

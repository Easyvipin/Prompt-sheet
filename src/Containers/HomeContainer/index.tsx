import { useAuth } from "@clerk/nextjs";
import { userUpsert } from "@src/services/apiRequests";
import React, { useEffect, useRef, useState } from "react";
import { useAllPrompts } from "./hooks";
import PromptCard from "@src/Components/UI/PromptCard";
import Loader from "@src/Components/UI/Loader";
import { aiToolsOption, promptCategories } from "@src/utils/constants";
import { useGetCategories } from "@src/hooks/swrhooks";

interface IHomeContainerProps {}

const HomeContainer: React.FunctionComponent<IHomeContainerProps> = (props) => {
  const { userId } = useAuth();
  const [category, setCategory] = useState("");
  const [tool, setTool] = useState("");

  useEffect(() => {
    async function checkUser(userId: string) {
      await userUpsert(userId);
    }

    if (userId) {
      checkUser(userId);
    }
  }, [userId]);

  const { data: prompts, isLoading, error } = useAllPrompts(category, tool);

  const { data: categories } = useGetCategories(userId);

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
            onChange={(e) => {
              setTool(e.target.value);
            }}
          >
            <option value="" className="text-center" disabled selected>
              Choose Tool
            </option>
            {aiToolsOption.map((eachOption) => (
              <option
                key={eachOption.value}
                className="text-center"
                value={eachOption.value}
              >
                {eachOption.label}
              </option>
            ))}
          </select>
          <select
            name="cars"
            id="cars"
            form="carform"
            className="p-2 border rounded px-2 text-sm  "
            placeholder="Choose Category"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="" className="text-center" disabled selected>
              Choose Category
            </option>
            <option value="general">General</option>
            {categories?.map((eachCategory) => (
              <option key={eachCategory.type} value={eachCategory.id}>
                {eachCategory.type}
              </option>
            ))}
          </select>
          <div className="border px-6 py-2 bg-black text-white rounded text-sm cursor-pointer disabled:bg-gray-500">
            Filter
          </div>
        </div>
      </div>
      <div className="cards flex h-[75vh] border border-dashed border-gray-300 overflow-y-scroll justify-center  gap-y-[2rem] gap-x-5 flex-wrap p-8 mt-2">
        {isLoading && (
          <Loader size={40} color="#000" message="Looking for prompts" />
        )}
        {!isLoading &&
          prompts.length > 0 &&
          prompts.map((eachPrompt) => (
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

import React, { RefObject } from "react";
import dynamic from "next/dynamic";
import "@mdxeditor/editor/style.css";
import { aiToolsOption } from "@src/utils/constants";

const MDXEditor = dynamic(
  () => import("@mdxeditor/editor").then((mod) => mod.MDXEditor),
  { ssr: false }
);

interface IInputAreaProps {
  categoryRef: RefObject<HTMLSelectElement>;
  toolRef: RefObject<HTMLSelectElement>;
  newCategoryRef: RefObject<HTMLInputElement>;
  onSubmit: () => void; // Replace 'void' with the appropriate return type if needed
  setPrompt: () => void;
}

const InputArea: React.FunctionComponent<IInputAreaProps> = ({}) => {
  const defaultToolbarComponents = [];

  return (
    <form className="">
      <div className="flex justify-between items-center flex-wrap">
        <h3 className="text-xl md:text-3xl m-2 font-semibold">
          Describe your prompt here !
        </h3>
        <div className="flex gap-3 flex-wrap justify-start">
          <select
            name="tools"
            id="tools"
            form=""
            className="p-2 border rounded px-2"
            placeholder="Choose tool"
          >
            {aiToolsOption.map((eachOption, index) => {
              if (index === 0) {
                return (
                  <option
                    key={eachOption.value}
                    value={eachOption.value}
                    className="text-center"
                    selected
                  >
                    {eachOption.label}
                  </option>
                );
              }
              return (
                <option key={eachOption.value} value={eachOption.value}>
                  {eachOption.label}
                </option>
              );
            })}
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
          <button className="border px-6 rounded" onClick={onSubmit}>
            Save
          </button>
        </div>
      </div>

      <div className="border mt-10 min-h-[60vh]">
        <MDXEditor
          markdown="Add your Prompt here!"
          onChange={(markdown) => setPrompt(markdown)}
          contentEditableClassName=""
        />
      </div>
    </form>
  );
};

export default InputArea;

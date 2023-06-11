import * as React from "react";

interface IHomeContainerProps {
  prompts: [];
}

const HomeContainer: React.FunctionComponent<IHomeContainerProps> = ({
  prompts,
}) => {
  return (
    <div className="flex flex-row gap-2">
      {prompts.map((eachPrompt) => (
        <div key={eachPrompt.id} className="p-4">
          <h1 className="italic">{eachPrompt.que}</h1>
        </div>
      ))}
    </div>
  );
};

export default HomeContainer;

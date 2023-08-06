import InputArea from "@src/Components/UI/InputArea";
import React, { useRef, useState } from "react";
import { useGetCategories } from "./hooks";
import { useAuth } from "@clerk/nextjs";

interface ICreateContainerProps {}

const CreateContainer: React.FunctionComponent<ICreateContainerProps> = (
  props
) => {
  const categoryRef = useRef();
  const toolRef = useRef();
  const newCategoryRef = useRef();
  const [prompt, setPrompt] = useState("");

  const { userId } = useAuth();
  const { data, categoriesLoading } = useGetCategories(userId);

  const handleSubmit = () => {};

  return (
    <div>
      <InputArea
        categoryRef={categoryRef}
        toolRef={toolRef}
        newCategoryRef={newCategoryRef}
        onSubmit={handleSubmit}
        setPrompt={setPrompt}
      />
    </div>
  );
};

export default CreateContainer;

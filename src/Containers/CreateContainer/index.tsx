import InputArea from "@src/Components/UI/InputArea";
import React, { useRef, useState } from "react";
import { useGetCategories } from "./hooks";
import { useAuth } from "@clerk/nextjs";

import { createPrompt } from "@src/services/apiRequests";

interface ICreateContainerProps {}

const CreateContainer: React.FunctionComponent<ICreateContainerProps> = (
  props
) => {
  const { userId } = useAuth();
  const { data, categoriesLoading } = useGetCategories(userId);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (
    category: string,
    tool: string,
    prompt: string
  ) => {
    const data = {
      category,
      tool,
      prompt,
      userId,
    };
    setLoading(true);
    const response = await createPrompt(data);
  };

  return (
    <div>
      <InputArea handleSubmit={handleSubmit} />
    </div>
  );
};

export default CreateContainer;

import InputArea from "@src/Components/UI/InputArea";
import React, { useRef, useState } from "react";
import { useAuth } from "@clerk/nextjs";

import { createPrompt } from "@src/services/apiRequests";
import { useRouter } from "next/router";
import { useGetCategories } from "@src/hooks/swrhooks";

interface ICreateContainerProps {}

const CreateContainer: React.FunctionComponent<ICreateContainerProps> = (
  props
) => {
  const router = useRouter();
  const { userId } = useAuth();
  const { data: allCategories, categoriesLoading } = useGetCategories(userId);
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
    if (response?.status == 201) {
      setLoading(false);
      router.push("/");
    }
  };

  return (
    <div>
      <InputArea
        handleSubmit={handleSubmit}
        loading={isLoading}
        categories={allCategories}
      />
    </div>
  );
};

export default CreateContainer;

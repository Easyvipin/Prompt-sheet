import InputArea from "@src/Components/UI/InputArea";
import React, { useRef, useState } from "react";
import { useGetCategories } from "./hooks";
import { useAuth } from "@clerk/nextjs";

interface ICreateContainerProps {}

const CreateContainer: React.FunctionComponent<ICreateContainerProps> = (
  props
) => {
  const { userId } = useAuth();
  const { data, categoriesLoading } = useGetCategories(userId);

  const handleSubmit = () => {};

  return (
    <div>
      <InputArea />
    </div>
  );
};

export default CreateContainer;

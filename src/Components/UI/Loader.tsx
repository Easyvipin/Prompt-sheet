import React from "react";
import { ClipLoader } from "react-spinners";

interface ILoaderProps {
  size: number;
  color: string;
  message?: React.ReactNode;
}

const Loader: React.FunctionComponent<ILoaderProps> = ({
  size,
  color,
  message,
}) => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <ClipLoader size={size} color={color} />
      {message && (
        <span className="text-sm font-sans mt-4 text-gray-500">{message}</span>
      )}
    </div>
  );
};

export default Loader;

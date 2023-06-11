import React, { ChangeEvent } from "react";

interface IInputPromptProps {
  labelFor: string;
  name: string;
  maxLength: number;
  minLength: number;
  disabled: boolean;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputPrompt: React.FunctionComponent<IInputPromptProps> = ({
  name,
  labelFor,
  maxLength = 200,
  minLength = 50,
  disabled = false,
  onChange,
}) => {
  return (
    <div className="box-border p-2 h-96">
      <label className="text-sm text-neutral-500 " aria-label={labelFor}>
        {labelFor}
      </label>
      <textarea
        className="block border rounded-sm w-full h-80 focus:outline-none p-3"
        name={name}
        maxLength={maxLength}
        minLength={minLength}
        disabled={disabled}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default InputPrompt;

import React, { RefObject } from "react";
import { object, string } from "yup";
import dynamic from "next/dynamic";
import "@mdxeditor/editor/style.css";
import { aiToolsOption } from "@src/utils/constants";
import { ErrorMessage, Field, Form, Formik } from "formik";

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
  const initialValues = {
    tool: "",
    category: "",
    newCategory: "",
    prompt: "## hello world",
  };

  const validationSchema = object({
    tool: string().required("Tool is required"),
    category: string().required("Category is required"),
    newCategory: string(),
  });

  const onSubmit = (values: any) => {
    // Handle form submission here
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleChange, values, errors }) => (
        <Form className="">
          <div className="flex justify-between items-center flex-wrap">
            <h3 className="text-xl md:text-3xl m-2 font-semibold">
              Describe your prompt here!
            </h3>
            <div className="flex gap-3 flex-wrap justify-start">
              <div className="flex flex-col">
                <Field
                  as="select"
                  name="tool"
                  className="p-2 border rounded px-2"
                  placeholder="Choose tool"
                >
                  <option value="" className="text-center" disabled>
                    Choose Tool
                  </option>
                  {aiToolsOption.map((eachOption) => (
                    <option key={eachOption.value} value={eachOption.value}>
                      {eachOption.label}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="tool"
                  component="div"
                  className="text-red-500 text-[0.8rem] mt-1 text-center"
                />
              </div>
              <div className="flex flex-col">
                <Field
                  as="select"
                  name="category"
                  className="p-2 border rounded px-2"
                  placeholder="Choose Category"
                >
                  <option value="" className="text-center" disabled>
                    Choose Category
                  </option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </Field>
                <ErrorMessage
                  name="category"
                  component="div"
                  className="text-red-500 text-[0.8rem] mt-1 text-center"
                />
              </div>

              <div className="flex flex-col">
                <Field
                  type="text"
                  name="newCategory"
                  className="rounded p-2 border"
                  placeholder="Add new Category"
                />
                <ErrorMessage
                  name="newCategory"
                  component="div"
                  className="text-red-500 text-[0.8rem] mt-1 text-center"
                />
              </div>

              <button
                type="submit"
                className="border px-6 rounded h-11 bg-black text-white"
              >
                Save
              </button>
            </div>
          </div>

          <div className="border mt-10 min-h-[60vh]">
            <MDXEditor
              markdown={values.prompt}
              onChange={(markdown) => {
                handleChange({ target: { name: "prompt", value: markdown } });
                return;
              }}
              contentEditableClassName="prose"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default InputArea;

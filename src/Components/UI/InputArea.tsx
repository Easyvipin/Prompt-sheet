import React from "react";
import { object, string } from "yup";
import dynamic from "next/dynamic";
import "@mdxeditor/editor/style.css";
import { aiToolsOption, promptCategories } from "@src/utils/constants";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { ClipLoader } from "react-spinners";

const MDXEditor = dynamic(
  () => import("@mdxeditor/editor").then((mod) => mod.MDXEditor),
  { ssr: false }
);

interface IInputAreaProps {
  category: string;
  tool: string;
  handleSubmit: (category: string, tool: string, prompt: string) => void;
  isEdit?: boolean;
  loading: boolean;
}

const InputArea: React.FunctionComponent<IInputAreaProps> = ({
  category,
  tool,
  handleSubmit,
  isEdit,
  loading,
}) => {
  const initialValues = {
    tool: "",
    category: "",
    newCategory: "",
    prompt: "Enter or paste your AI prompt here...",
  };

  const validationSchema = object({
    tool: string().required("Tool is required"),
    category: string(),
    newCategory: string(),
  });

  const onSubmit = (values: any, { setErrors }: FormikHelpers<any>) => {
    const { prompt, category, tool, newCategory } = values;
    const selectedCategory = newCategory || category;
    if (!prompt) {
      setErrors({ prompt: "Please describe your prompt here before saving.." });
    } else if (!selectedCategory) {
      setErrors({ category: "Please select or add a ctegory" });
    } else {
      handleSubmit(category, tool, prompt);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleChange, values, errors }) => (
        <Form className="">
          <div className="flex justify-between items-start flex-wrap h-20 gap-2">
            <h3 className=" text-lg md:text-3xl font-semibold">
              Describe your prompt here!
            </h3>
            <div className="flex gap-3 flex-wrap justify-start">
              <div className="flex flex-col">
                <Field
                  as="select"
                  name="tool"
                  className="p-2 border rounded px-2 text-gray-600"
                  placeholder="Choose tool"
                >
                  <option value="" className="text-center" disabled>
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
                  <option value="general">General</option>
                  {promptCategories.map((eachCategory) => (
                    <option key={eachCategory.label} value={eachCategory.value}>
                      {eachCategory.label}
                    </option>
                  ))}
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
                className=" flex justify-center gap-2 items-center border px-6 rounded h-11 bg-black text-white"
                disabled={loading}
              >
                {!loading ? (
                  "Save"
                ) : (
                  <>
                    Saving
                    <ClipLoader size={20} color={"#ccc"} />
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="border mt-2 min-h-[60vh]">
            <ErrorMessage
              name="prompt"
              component="div"
              className="text-red-400 text-[1rem] mt-1 text-center px-2 py-2 bg-black"
            />
            <MDXEditor
              markdown={values.prompt}
              onChange={(markdown) => {
                handleChange({ target: { name: "prompt", value: markdown } });
                return;
              }}
              contentEditableClassName="prose prose-gray"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default InputArea;

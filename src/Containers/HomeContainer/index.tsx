import { useAuth } from "@clerk/nextjs";
import { userUpsert } from "@src/services/apiRequests";
import React, { useEffect } from "react";

interface IHomeContainerProps {}

const HomeContainer: React.FunctionComponent<IHomeContainerProps> = (props) => {
  const { isLoaded, userId } = useAuth();

  useEffect(() => {
    async function checkUser(userId: string) {
      await userUpsert(userId);
    }

    if (userId) {
      checkUser(userId);
    }
  }, [userId]);

  return (
    <div className="">
      <div className="flex justify-between">
        <h1 className="text-2xl">Your prompts!</h1>

        <div className="flex gap-3 flex-wrap justify-start">
          <select
            name="cars"
            id="cars"
            form="carform"
            className="p-2 border rounded px-2"
            placeholder="Choose Category"
          >
            <option value="" className="text-center" disabled selected>
              chatGPT
            </option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
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
          <button className="border px-6 rounded">Filter</button>
        </div>
      </div>
      <div className="cards flex gap-8 mt-8 flex-wrap ">
        <div className="flex flex-col border-gray-300 border shadow-md rounded h-[20rem] w-[20rem] p-4 justify-between overflow-hidden">
          <div className="flex justify-start gap-2 mb-2">
            <span className="bg-black px-2 py-1 text-sm rounded text-green-300">
              ChatGpt
            </span>{" "}
            <span className="bg-gray-300 px-2 py-1 text-sm rounded text-gray-800">
              Category
            </span>
          </div>
          <p className="text-xl font-serif text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            consectetur deleniti assumenda exercitationem sequi corrupti
            consequatur fuga error earum rerum.
          </p>

          <div className="flex gap-2 mt-4 items-center justify-between">
            <h3 className="text-sm font-mono font-bold text-green-600">80%</h3>
            <div className="flex justify-end gap-2">
              <button className="px-4 border py-1 rounded">Share</button>
              <button className="px-4 border py-1">View</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-gray-300 border shadow-md rounded h-[20rem] w-[20rem] p-4 justify-between">
          <div className="flex justify-start gap-2 mb-2">
            <span className="bg-black px-2 py-1 text-sm rounded text-green-300">
              ChatGpt
            </span>{" "}
            <span className="bg-gray-300 px-2 py-1 text-sm rounded text-gray-800">
              Category
            </span>
          </div>
          <p className="text-xl font-serif text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            consectetur deleniti assumenda exercitationem sequi corrupti
            consequatur fuga error earum rerum.
          </p>

          <div className="flex gap-2 mt-4 items-center justify-between">
            <h3 className="text-sm font-mono font-bold text-green-600">80%</h3>
            <div className="flex justify-end gap-2">
              <button className="px-4 border py-1 rounded">Share</button>
              <button className="px-4 border py-1">View</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-gray-300 border shadow-md rounded h-[20rem] w-[20rem] p-4 justify-between">
          <div className="flex justify-start gap-2 mb-2">
            <span className="bg-black px-2 py-1 text-sm rounded text-green-300">
              ChatGpt
            </span>{" "}
            <span className="bg-gray-300 px-2 py-1 text-sm rounded text-gray-800">
              Category
            </span>
          </div>
          <p className="text-xl font-serif text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            consectetur deleniti assumenda exercitationem sequi corrupti
            consequatur fuga error earum rerum.
          </p>

          <div className="flex gap-2 mt-4 items-center justify-between">
            <h3 className="text-sm font-mono font-bold text-green-600">80%</h3>
            <div className="flex justify-end gap-2">
              <button className="px-4 border py-1 rounded">Share</button>
              <button className="px-4 border py-1">View</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-gray-300 border shadow-md rounded h-[20rem] w-[20rem] p-4 justify-between">
          <div className="flex justify-start gap-2 mb-2">
            <span className="bg-black px-2 py-1 text-sm rounded text-green-300">
              ChatGpt
            </span>{" "}
            <span className="bg-gray-300 px-2 py-1 text-sm rounded text-gray-800">
              Category
            </span>
          </div>
          <p className="text-xl font-serif text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            consectetur deleniti assumenda exercitationem sequi corrupti
            consequatur fuga error earum rerum.
          </p>

          <div className="flex gap-2 mt-4 items-center justify-between">
            <h3 className="text-sm font-mono font-bold text-green-600">80%</h3>
            <div className="flex justify-end gap-2">
              <button className="px-4 border py-1 rounded">Share</button>
              <button className="px-4 border py-1">View</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-gray-300 border shadow-md rounded h-[20rem] w-[20rem] p-4 justify-between">
          <div className="flex justify-start gap-2 mb-2">
            <span className="bg-black px-2 py-1 text-sm rounded text-green-300">
              ChatGpt
            </span>{" "}
            <span className="bg-gray-300 px-2 py-1 text-sm rounded text-gray-800">
              Category
            </span>
          </div>
          <p className="text-xl font-serif text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            consectetur deleniti assumenda exercitationem sequi corrupti
            consequatur fuga error earum rerum.
          </p>

          <div className="flex gap-2 mt-4 items-center justify-between">
            <h3 className="text-sm font-mono font-bold text-green-600">80%</h3>
            <div className="flex justify-end gap-2">
              <button className="px-4 border py-1 rounded">Share</button>
              <button className="px-4 border py-1">View</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-gray-300 border shadow-md rounded h-[20rem] w-[20rem] p-4 justify-between">
          <div className="flex justify-start gap-2 mb-2">
            <span className="bg-black px-2 py-1 text-sm rounded text-green-300">
              ChatGpt
            </span>{" "}
            <span className="bg-gray-300 px-2 py-1 text-sm rounded text-gray-800">
              Category
            </span>
          </div>
          <p className="text-xl font-serif text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            consectetur deleniti assumenda exercitationem sequi corrupti
            consequatur fuga error earum rerum.
          </p>

          <div className="flex gap-2 mt-4 items-center justify-between">
            <h3 className="text-sm font-mono font-bold text-green-600">80%</h3>
            <div className="flex justify-end gap-2">
              <button className="px-4 border py-1 rounded">Share</button>
              <button className="px-4 border py-1">View</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-gray-300 border shadow-md rounded h-[20rem] w-[20rem] p-4 justify-between">
          <div className="flex justify-start gap-2 mb-2">
            <span className="bg-black px-2 py-1 text-sm rounded text-green-300">
              ChatGpt
            </span>{" "}
            <span className="bg-gray-300 px-2 py-1 text-sm rounded text-gray-800">
              Category
            </span>
          </div>
          <p className="text-xl font-serif text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            consectetur deleniti assumenda exercitationem sequi corrupti
            consequatur fuga error earum rerum.
          </p>

          <div className="flex gap-2 mt-4 items-center justify-between">
            <h3 className="text-sm font-mono font-bold text-green-600">80%</h3>
            <div className="flex justify-end gap-2">
              <button className="px-4 border py-1 rounded">Share</button>
              <button className="px-4 border py-1">View</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-gray-300 border shadow-md rounded h-[20rem] w-[20rem] p-4 justify-between">
          <div className="flex justify-start gap-2 mb-2">
            <span className="bg-black px-2 py-1 text-sm rounded text-green-300">
              ChatGpt
            </span>{" "}
            <span className="bg-gray-300 px-2 py-1 text-sm rounded text-gray-800">
              Category
            </span>
          </div>
          <p className="text-xl font-serif text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            consectetur deleniti assumenda exercitationem sequi corrupti
            consequatur fuga error earum rerum.
          </p>

          <div className="flex gap-2 mt-4 items-center justify-between">
            <h3 className="text-sm font-mono font-bold text-green-600">80%</h3>
            <div className="flex justify-end gap-2">
              <button className="px-4 border py-1 rounded">Share</button>
              <button className="px-4 border py-1">View</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-gray-300 border shadow-md rounded h-[20rem] w-[20rem] p-4 justify-between">
          <div className="flex justify-start gap-2 mb-2">
            <span className="bg-black px-2 py-1 text-sm rounded text-green-300">
              ChatGpt
            </span>{" "}
            <span className="bg-gray-300 px-2 py-1 text-sm rounded text-gray-800">
              Category
            </span>
          </div>
          <p className="text-xl font-serif text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            consectetur deleniti assumenda exercitationem sequi corrupti
            consequatur fuga error earum rerum.
          </p>

          <div className="flex gap-2 mt-4 items-center justify-between">
            <h3 className="text-sm font-mono font-bold text-green-600">80%</h3>
            <div className="flex justify-end gap-2">
              <button className="px-4 border py-1 rounded">Share</button>
              <button className="px-4 border py-1">View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;

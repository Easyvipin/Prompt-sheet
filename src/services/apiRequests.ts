import axios from "axios";

export const createPrompt = (data: any) => {
  return axios.post("/api/prompt/create", data);
};

export const getPrompts = () => {
  return axios.get("/api/prompt/getPrompts");
};

import axios from "axios";

export const createPrompt = (data: any) => {
  return axios.post("/api/prompt/create", data);
};

export const getPrompts = () => {
  return axios.get("/api/prompt/getPrompts");
};

export const userUpsert = (userId: string) => {
  return axios.post("/api/user/upsert", {
    userId,
  });
};

export const getCategories = async (...args) => {
  return await axios.get(...args);
};

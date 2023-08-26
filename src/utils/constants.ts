export const aiToolsOption = [
  {
    label: "chatGPT",
    value: "chatgpt",
  },
  {
    label: "Bard",
    value: "bard",
  },
  {
    label: "DALL-E",
    value: "dalle",
  },
];

export type CategoryType = {
  type: string;
  authorId?: string;
};

export const promptCategories: CategoryType[] = [
  { type: "Text Generation" },
  { type: "Code and Programming" },
  { type: "Translation and Interpretation" },
  { type: "Question Answering" },
  { type: "Education Support" },
  { type: "Conversational Agents" },
  { type: "Data Analysis" },
  { type: "Art and Design" },
  { type: "Scientific Assistance" },
  { type: "Philosophical Discussions" },
  { type: "Interactive Narratives" },
  { type: "Personal Assistance" },
  { type: "Medical Support" },
  { type: "Business and Marketing" },
  { type: "Legal Assistance" },
];

export const promptCategoriesMapWithUser = (userId: string) => {
  console.log("prompt", userId);
  return promptCategories.map((eachType) => ({
    ...eachType,
    authorId: userId,
  }));
};

export const validatePromptMarkdown = (markdownText: string) => {
  const headings = markdownText.match(/^#{1,6}\s.+/gm) || [];
  if (headings[0]) {
    console.log(headings[0]);
    return true;
  }
  return false;
};

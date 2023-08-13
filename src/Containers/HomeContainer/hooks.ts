import { getPrompts } from "@src/services/apiRequests";
import useSWR from "swr";

export function useAllPrompts(category?: string, tool?: string) {
  const { data, isLoading, error } = useSWR(
    `/api/prompt/getPrompts`,
    getPrompts
  );

  return {
    data: data?.data?.prompts,
    isLoading,
    error,
  };
}

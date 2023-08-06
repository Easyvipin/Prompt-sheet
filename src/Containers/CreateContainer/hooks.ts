import { getCategories } from "@src/services/apiRequests";
import useSWR from "swr";

export function useGetCategories(userId: string) {
  const { data, isLoading: categoriesLoading } = useSWR(
    `/api/user/categories?user=${userId}`,
    getCategories
  );

  return {
    data: data?.data?.categories?.Categories,
    categoriesLoading,
  };
}

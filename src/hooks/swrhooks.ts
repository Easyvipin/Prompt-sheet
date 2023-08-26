import { getCategories } from "@src/services/apiRequests";
import useSWR from "swr";

export function useGetCategories(userId: string) {
  console.log(userId ? `/api/user/categories?user=${userId}` : null);
  const { data, isLoading: categoriesLoading } = useSWR(
    userId ? `/api/user/categories?user=${userId}` : null,
    getCategories
  );
  return {
    data: data?.data?.categories,
    categoriesLoading,
  };
}

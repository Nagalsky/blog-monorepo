import { fetchPosts } from "@/actions/post.actions";
import { DEFAULT_PAGE_SIZE } from "@/lib/constants";
import { postsKeys } from "@/lib/query-keys";
import { useQuery } from "@tanstack/react-query";

export const usePosts = (page: number | undefined) => {
  return useQuery({
    queryKey: postsKeys.all,
    queryFn: () =>
      fetchPosts({
        page: page ? +page : undefined,
        pageSize: DEFAULT_PAGE_SIZE,
      }),
  });
};

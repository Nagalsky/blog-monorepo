import { fetchPosts } from "@/actions/post.actions";
import { DEFAULT_PAGE_SIZE } from "@/lib/constants";
import { Post } from "@/types/post.type";
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
  useInfiniteQuery,
} from "@tanstack/react-query";

interface PostsResponse {
  posts: Post[];
  totalPosts: number;
}

interface UsePostsOptions {
  pageSize?: number;
}

interface UsePostsReturn {
  posts: Post[];
  fetchNextPage: (
    options?: FetchNextPageOptions,
  ) => Promise<
    InfiniteQueryObserverResult<InfiniteData<PostsResponse, unknown>, Error>
  >;
  hasNextPage: boolean;
  isFetching: boolean;
  isFetchingNextPage: boolean;
  status: "pending" | "error" | "success";
}

export function usePosts({
  pageSize = DEFAULT_PAGE_SIZE,
}: UsePostsOptions = {}): UsePostsReturn {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: async ({ pageParam = 1 }) =>
      fetchPosts({
        page: pageParam,
        pageSize,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.posts.length === pageSize ? allPages.length + 1 : undefined,
  });

  const posts = data?.pages.flatMap((page) => page.posts) ?? [];

  return {
    posts,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  };
}

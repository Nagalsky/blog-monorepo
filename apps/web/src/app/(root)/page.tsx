import { fetchPosts } from "@/actions/post.actions";
import Hero from "@/components/common/hero";
import Posts from "@/components/common/posts";
import { DEFAULT_PAGE_SIZE } from "@/lib/constants";
import getQueryClient from "@/lib/get-query-client";
import { postsKeys } from "@/lib/query-keys";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Home({ searchParams }: Props) {
  const queryClient = getQueryClient();

  const { page } = await searchParams;

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: postsKeys.all,
      queryFn: () =>
        fetchPosts({
          page: page ? +page : undefined,
          pageSize: DEFAULT_PAGE_SIZE,
        }),
    }),
  ]);

  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <Hero />
      <HydrationBoundary state={dehydratedState}>
        <Posts currentPage={page ? +page : 1} />
      </HydrationBoundary>
      {/* <Suspense fallback={<p>Loading...</p>}>
  
      </Suspense> */}
    </>
  );
}

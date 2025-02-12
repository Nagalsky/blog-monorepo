import { fetchPosts } from "@/actions/post.actions";
import Hero from "@/components/common/hero";
import Posts from "@/components/common/posts";
import { DEFAULT_PAGE_SIZE } from "@/lib/constants";
import { Suspense } from "react";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Home({ searchParams }: Props) {
  const { page } = await searchParams;
  const { posts, totalPosts } = await fetchPosts({
    page: page ? +page : undefined,
    pageSize: DEFAULT_PAGE_SIZE,
  });

  return (
    <>
      <Hero />
      <Suspense fallback={<p>Loading...</p>}>
        <Posts
          posts={posts}
          currentPage={page ? +page : 1}
          totalPages={Math.ceil(totalPosts / DEFAULT_PAGE_SIZE)}
        />
      </Suspense>
    </>
  );
}

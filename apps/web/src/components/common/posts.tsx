"use client";
import { usePosts } from "@/hooks/query/use-posts";
import { DEFAULT_PAGE_SIZE } from "@/lib/constants";
import PostCard from "./post-card";
import PostsPagination from "./posts-pagination";
import PostsSkeleton from "./posts-skeleton";

type Props = {
  currentPage: number;
};

const Posts = ({ currentPage }: Props) => {
  const { data, isLoading, error } = usePosts(currentPage);

  if (isLoading) return <PostsSkeleton />;
  if (error) return <p>Error loading data {error.message}</p>;

  return (
    <section className="py-8 md:py-14">
      <div className="container">
        <h1 className="mb-5 text-center text-3xl leading-normal font-semibold md:text-5xl">
          Latest posts
        </h1>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data?.posts.map((post) => <PostCard key={post.id} {...post} />)}
        </div>
      </div>

      <PostsPagination
        currentPage={currentPage}
        totalPages={Math.ceil(data?.totalPosts / DEFAULT_PAGE_SIZE)}
        className="py-8"
      />
    </section>
  );
};

export default Posts;

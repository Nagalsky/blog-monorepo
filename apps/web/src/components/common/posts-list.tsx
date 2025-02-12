"use client";
import { usePosts } from "@/hooks/use-posts";
import { Loader2 } from "lucide-react";
import InfiniteScrollContainer from "./infinite-scroll-container";
import PostCard from "./post-card";
import PostsSkeleton from "./posts-skeleton";

const PostsList = () => {
  const {
    posts,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = usePosts();

  if (status === "pending") {
    return <PostsSkeleton />;
  }

  if (status === "success" && !posts.length && !hasNextPage) {
    return (
      <p className="text-muted-foreground text-center">
        You don&apos;t have any posts yet.
      </p>
    );
  }

  if (status === "error") {
    return (
      <p className="text-destructive text-center">
        An error occurred while loading posts.
      </p>
    );
  }

  return (
    <>
      <InfiniteScrollContainer
        className="grid gap-4 space-y-5 sm:grid-cols-2 lg:grid-cols-3"
        onBottomReached={() => hasNextPage && !isFetching && fetchNextPage()}
      >
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </InfiniteScrollContainer>
      {isFetchingNextPage && (
        <div className="flex justify-center py-4">
          <Loader2 className="mx-auto animate-spin" />
        </div>
      )}
    </>
  );
};

export default PostsList;

import { Suspense } from "react";
import PostsList from "./posts-list";
import PostsSkeleton from "./posts-skeleton";

const Posts = () => {
  return (
    <section className="py-8">
      <div className="container">
        <h1 className="mb-5 text-center text-3xl leading-normal font-semibold md:text-5xl">
          Latest posts
        </h1>

        <Suspense fallback={<PostsSkeleton />}>
          <PostsList />
        </Suspense>
      </div>
    </section>
  );
};

export default Posts;

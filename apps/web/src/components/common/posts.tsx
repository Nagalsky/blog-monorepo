import { Post } from "@/types/post.type";
import PostCard from "./post-card";
import PostsPagination from "./posts-pagination";

type Props = {
  posts: Post[];
  currentPage: number;
  totalPages: number;
};

const Posts = ({ posts, currentPage, totalPages }: Props) => {
  return (
    <section className="py-8">
      <div className="container">
        <h1 className="mb-5 text-center text-3xl leading-normal font-semibold md:text-5xl">
          Latest posts
        </h1>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </div>

      <PostsPagination
        currentPage={currentPage}
        totalPages={totalPages}
        className="py-8"
      />
    </section>
  );
};

export default Posts;

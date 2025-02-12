import { fetchPosts } from "@/actions/post.actions";
import PostCard from "./post-card";

const PostsList = async () => {
  const posts = await fetchPosts();
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostsList;

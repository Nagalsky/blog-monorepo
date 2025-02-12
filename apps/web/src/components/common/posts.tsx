import PostsList from "./posts-list";

const Posts = () => {
  return (
    <section className="py-8 md:py-14">
      <div className="container">
        <h1 className="mb-5 text-center text-3xl leading-normal font-semibold md:text-5xl">
          Latest posts
        </h1>
        <PostsList />
      </div>
    </section>
  );
};

export default Posts;

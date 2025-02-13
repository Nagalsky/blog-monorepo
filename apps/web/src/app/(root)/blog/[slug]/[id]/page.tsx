import Post from "@/components/common/post";
import { Suspense } from "react";

type Props = {
  params: {
    id: string;
  };
};

export default async function Blog({ params }: Props) {
  const postId = (await params).id;

  return (
    <section className="py-8 md:py-14">
      <div className="container">
        <Suspense>
          <Post id={+postId} />
        </Suspense>
      </div>
    </section>
  );
}

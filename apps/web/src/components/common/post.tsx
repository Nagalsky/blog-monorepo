"use client";
import { usePost } from "@/hooks/use-post";
import { formatRelativeTime } from "@/lib/format-relative-time";
import { cn } from "@/lib/utils";
import DOMPurify from "dompurify";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  id: number;
};

const Post = ({ id }: Props) => {
  const { data: post, isLoading } = usePost(id);

  if (isLoading) return <div>Loading...</div>;

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto space-y-5 lg:max-w-9/12 xl:max-w-7/12">
      <h1 className="text-center text-3xl font-bold md:text-5xl">
        {post.title}
      </h1>
      <p>
        By {post.author.name} | created at {formatRelativeTime(post.createdAt)}
      </p>
      <div className="space-y-6">
        <Image
          alt={post.title}
          src={post.thumbnail ?? "/no-image.svg"}
          width={500}
          height={500}
          priority
          className={cn(
            "mx-auto h-60 object-cover shadow-xl md:h-90",
            !post.thumbnail && "dark:invert-100",
          )}
        />

        <div
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
          className="prose"
        />
      </div>
    </div>
  );
};

export default Post;

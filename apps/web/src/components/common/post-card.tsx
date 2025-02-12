import { formatRelativeTime } from "@/lib/format-relative-time";
import { cn } from "@/lib/utils";
import { Post } from "@/types/post.type";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

type Props = Partial<Post>;

const PostCard: FC<Props> = ({
  id,
  title,
  slug,
  thumbnail,
  content,
  createdAt,
}) => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="line-clamp-1 text-xl leading-normal">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Image
          src={thumbnail ?? "/no-image.svg"}
          alt={title ?? ""}
          width={500}
          height={500}
          className={cn("h-60 object-cover", !thumbnail && "dark:invert-100")}
        />
        <p className="line-clamp-3">{content}</p>
        <p>Created {formatRelativeTime(new Date(createdAt ?? ""))}</p>
      </CardContent>
      <CardFooter className="mt-auto justify-end">
        <Button asChild variant={"link"}>
          <Link href={`/blog/${slug}/${id}`}>Read more</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;

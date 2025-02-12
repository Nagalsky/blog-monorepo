import { Post } from "./post.type";
import { User } from "./user.type";

export type Comment = {
  id: number;
  content: string;
  post: Post;
  author: User;
  createdAt: Date;
  updatedAt: Date;
};

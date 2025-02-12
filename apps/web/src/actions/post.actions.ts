"use server";

import { fetchGraphQL } from "@/lib/fetch-graphql";
import { GET_POSTS } from "@/lib/gql-queries";
import { Post } from "@/types/post.type";
import { print } from "graphql";

export const fetchPosts = async () => {
  const data = await fetchGraphQL(print(GET_POSTS));
  return data.posts as Post[];
};

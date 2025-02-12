"use server";

import { fetchGraphQL } from "@/lib/fetch-graphql";
import { GET_POSTS } from "@/lib/gql-queries";
import { transformTakeSkip } from "@/lib/helpers";
import { Post } from "@/types/post.type";
import { print } from "graphql";

export const fetchPosts = async ({
  page,
  pageSize,
}: {
  page?: number;
  pageSize?: number;
}) => {
  const { skip, take } = transformTakeSkip({ page, pageSize });
  const data = await fetchGraphQL(print(GET_POSTS), {
    skip,
    take,
  });

  return {
    posts: data.posts as Post[],
    totalPosts: data.totalPosts as number,
  };
};

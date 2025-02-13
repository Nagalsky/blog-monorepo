"use client";

import { fetchPostById } from "@/actions/post.actions";
import { useQuery } from "@tanstack/react-query";

export function usePost(id: number) {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => fetchPostById(id),
  });
}

const createKeys = (base: string) => ({
  all: [base] as const,
  item: (slug: string) => [base, slug] as const,
});

export const postsKeys = createKeys("posts");

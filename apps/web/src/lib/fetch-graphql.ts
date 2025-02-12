export const fetchGraphQL = async (query: string, variables = {}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    },
  );

  const results = await response.json();

  if (results.errors) {
    console.error("GraphQL errors:", results.errors);
    throw new Error("Failed to fetch the data from GraphQL");
  }

  return results.data;
};

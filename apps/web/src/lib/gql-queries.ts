import qql from "graphql-tag";

export const GET_POSTS = qql`
query {
	posts {
		id
		title
		thumbnail
		content
		createdAt
		updatedAt
		slug
	}
}
`;

import gql from "graphql-tag";

export const userTypeDefs = gql`
	type User {
		id: ID!
		name: String!
		email: String!
		bio: String
		profilePictureUrl: String
	}

	type Query {
		user: User!
		users: [User!]!
	}
`;

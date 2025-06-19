import gql from "graphql-tag";

export const queTypeDefs = gql`
	type Question {
		id: ID!
		body: String!
		authorId: ID!
	}

	type Query {
		question: Question!
		questions: [Question!]!
	}
`;

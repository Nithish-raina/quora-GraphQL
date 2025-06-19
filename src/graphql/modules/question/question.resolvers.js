import { v4 as uuidV4 } from "uuid";

export const queResolvers = {
	Query: {
		question: () => {
			return {
				id: uuidV4(),
				body: "How to start learning GraphQL",
				authorId: uuidV4(),
			};
		},
		questions: () => {
			return [
				{
					id: uuidV4(),
					body: "How to start learning GraphQL",
					authorId: uuidV4(),
				},
				{
					id: uuidV4(),
					body: "Guide to different API Architectural styles",
					authorId: uuidV4(),
				},
			];
		},
	},
};

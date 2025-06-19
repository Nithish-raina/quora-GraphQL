import { v4 as uuidV4 } from "uuid";
export const userResolvers = {
	Query: {
		user: () => {
			return { id: uuidV4(), name: "Alice", email: "alice@example.com" };
		},
		users: () => {
			return [
				{ id: uuidV4(), name: "Alice", email: "alice@example.com" },
				{ id: uuidV4(), name: "Bob", email: "bob@example.com" },
			];
		},
	},
};

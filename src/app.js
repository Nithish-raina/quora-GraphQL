// app.js
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import cors from "cors";
import express from "express";

// Define your GraphQL schema
const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

// Define your resolvers
const resolvers = {
	Query: {
		hello: () => "Hello world!",
	},
};

// Create and return the configured Express app
export async function createApp() {
	const app = express();

	const server = new ApolloServer({
		typeDefs,
		resolvers,
	});

	await server.start();

	app.use("/graphql", cors(), express.json(), expressMiddleware(server));

	return app;
}

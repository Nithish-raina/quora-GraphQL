// app.js
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import cors from "cors";
import express from "express";

import { mergedResolvers, mergedTypeDefs } from "./graphql/schema.js";

// Create and return the configured Express app
export async function createApp() {
	const app = express();

	const server = new ApolloServer({
		typeDefs: mergedTypeDefs, // ✅ correct
		resolvers: mergedResolvers,
	});

	await server.start();

	app.use("/graphql", cors(), express.json(), expressMiddleware(server));

	return app;
}

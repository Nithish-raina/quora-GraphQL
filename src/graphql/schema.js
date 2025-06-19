import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { print } from "graphql";

import {
	queResolvers,
	queTypeDefs,
} from "./modules/question/question.graphql.js";
import { userResolvers, userTypeDefs } from "./modules/user/user.graphql.js";

export const mergedTypeDefs = mergeTypeDefs([userTypeDefs, queTypeDefs]);
// Added for logging purpose
const printedTypeDefs = print(mergedTypeDefs);
export const mergedResolvers = mergeResolvers([userResolvers, queResolvers]);

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import { tokenToString } from "typescript";
var bcrypt = require("bcryptjs");
type Credentials = {
	email: String;
	password: String;
};

export default NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		EmailProvider({
			server: process.env.EMAIL_SERVER,
			from: process.env.EMAIL_FROM,
		}),

		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
		CredentialsProvider({
			name: "Credentials",

			credentials: {
				email: { label: "Email", type: "text", placeholder: "email" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials: Credentials, req) {
				const user = await prisma.user.findFirst({
					where: {
						email: credentials.email,
					},
					select: {
						id: true,
						firstName: true,
						lastName: true,
						password: true,
						email: true,
					},
				});

				if (!user) {
					return null;
				}
				const passwordMatch = await bcrypt.compare(
					credentials.password,
					user.password
				);

				if (!passwordMatch) {
					return null;
				}
				return user;
			},
		}),
	],

	secret: process.env.SECRET,

	session: {
		strategy: "jwt",
	},

	jwt: {
		secret: process.env.SECRET,
	},

	pages: {},

	callbacks: {},

	events: {},

	// Enable debug messages in the console if you are having problems
	debug: false,
});

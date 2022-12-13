import { prisma } from "../../../lib/prisma";
import NextAuth, { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
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
		TwitterProvider({
			clientId: process.env.TWITTER_ID,
			clientSecret: process.env.TWITTER_SECRET,
			version: "2.0",
            
		}),
	],
	secret: process.env.SECRET,
	session: {
		strategy: "jwt",
	},
	jwt: {},

	callbacks: {},
});

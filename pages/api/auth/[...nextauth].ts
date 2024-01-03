import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

type Credentials = {
	email: string;
	password: string;
};

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
	return NextAuth(req, res, {
		adapter: PrismaAdapter(prisma),
		providers: [
			EmailProvider({
				server: process.env.EMAIL_SERVER,
				from: process.env.EMAIL_FROM,
			}),
			CredentialsProvider({
				name: "Credentials",
				credentials: {
					email: {
						label: "Email",
						type: "text",
						placeholder: "email",
					},
					password: {
						label: "Password",
						type: "password",
					},
				},
				async authorize(credentials: Credentials, req) {
					const user =
						await prisma.user.findFirst({
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

					const passwordMatch =
						await bcrypt.compare(
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

		secret: process.env.NEXTAUTH_SECRET,

		session: {
			strategy: "jwt",
		},

		pages: {},

		callbacks: {
			async jwt({
				token,
				user,
				account,
				profile,
				isNewUser,
			}) {
				const existingUser =
					await prisma.user.findUnique({
						where: {
							email: token.email!,
						},
					});

				return { ...existingUser, ...token };
			},
		},

		events: {},

		// Enable debug messages in the console if you are having problems
		debug: false,
	});
}

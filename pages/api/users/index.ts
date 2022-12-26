import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
var bcrypt = require("bcryptjs");

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { method } = req;
	const { firstName, lastName, email, password, avatar } = req.body;

	switch (method) {
		case "GET":
			try {
				const users = await prisma.user.findMany();
				res.status(200).json(users);
			} catch (error) {
				res.status(500).json({ message: "failure" });
			}
			break;
		case "POST":
			try {
				const salt = await bcrypt.genSalt(10);
				const hashedPassword = await bcrypt.hash(password, salt);
				const user = await prisma.user.create({
					data: {
						firstName,
						lastName,
						email,
						password: hashedPassword,
						avatar,
					},
				});
				res.status(200).json(user);
			} catch (error) {
				res.status(500).json({ message: "failure" });
			}
			break;
		default:
			res.setHeader("Allow", ["GET", "POST"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}

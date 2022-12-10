import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { method } = req;
	const { firstName, lastName, email, password, creator, avatar } = req.body;

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
				await prisma.user.create({
					data: {
						firstName,
						lastName,
						email,
						password,
						creator,
						avatar,
					},
				});
				res.status(200).json({ message: "user Created" });
			} catch (error) {
				res.status(500).json({ message: "failure" });
			}
			break;
		default:
			res.setHeader("Allow", ["GET", "POST"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}

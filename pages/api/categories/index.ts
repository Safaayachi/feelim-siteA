import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { method } = req;
	const { Name } = req.body;

	switch (method) {
		case "GET":
			try {
				const categories = await prisma.category.findMany();
				res.status(200).json(categories);
			} catch (error) {
				res.status(500).json({ message: "failure" });
			}
			break;
		case "POST":
			try {
				await prisma.category.create({
					data: {
						Name,
					},
				});
				res.status(200).json({ message: "category Created" });
			} catch (error) {
				res.status(500).json({ message: "failure" });
			}
			break;
		default:
			res.setHeader("Allow", ["GET", "POST"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}

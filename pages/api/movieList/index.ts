import { prisma } from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { method } = req;
	const { title, description, ownerId } = req.body;

	switch (method) {
		case "GET":
			try {
				const lists = await prisma.movieList.findMany();
				res.status(200).json(lists);
			} catch (error) {
				res.status(500).json({ message: "failure" });
			}
			break;
		case "POST":
			try {
				const list = await prisma.movieList.create({
					data: {
						title,
						description,

						owner: {
							connect: {
								id: ownerId,
							},
						},
					},
				});
				res.status(200).json(list);
			} catch (error) {
				res.status(500).json({ message: "failure" });
			}
			break;
		default:
			res.setHeader("Allow", ["GET", "POST"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}

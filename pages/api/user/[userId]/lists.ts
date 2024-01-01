import { prisma } from "../../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function userHandler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const {
		query: { userId },
		method,
	} = req;

	if (method === "GET") {
		// Get contributions by contributorId
		try {
			const lists = await prisma.movieList.findMany({
				where: {
					ownerId: Number(req.query.userId),
				},
			});
			res.status(200).json(lists);
		} catch (error) {
			res.status(500).json({ message: "failure" });
		}
	} else res.status(405).end(`Method ${method} Not Allowed`);
}

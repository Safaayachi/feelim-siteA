import { prisma } from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function userHandler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const {
		query: { id },
		method,
	} = req;
	const { title, description, ownerId } = req.body;
	switch (method) {
		case "GET":
			// Get movieList  by Id
			const list = await prisma.movieList.findUnique({
				where: {
					id: Number(req.query.id),
				},
				include: {
					movies: true,
					owner: true,
				},
			});
			res.status(200).json(list);
			break;
		case "PUT":
			// Update movieList  data
			await prisma.movieList.update({
				where: { id: Number(req.query.id) },
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
			res.status(200).json("movieList updated successfully");
			break;
		case "DELETE":
			await prisma.movieList.delete({
				where: {
					id: Number(req.query.id),
				},
			});
			res.status(200).json("movieList  deleted successfully");
			break;
		default:
			res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}

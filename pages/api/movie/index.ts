import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { method } = req;
	const { title, description, director, duration, list_id } = req.body;

	switch (method) {
		case "GET":
			try {
				const movies = await prisma.movie.findMany();
				res.status(200).json(movies);
			} catch (error) {
				res.status(500).json({ message: "Failure" });
			}
			break;
		case "POST":
			try {
				const movie = await prisma.movie.create({
					data: {
						title,
						description,
						director,
						duration,
						list: {
							connect: {
								id: list_id,
							},
						},
					},
				});
				res.status(200).json({
					message: "Movie Created",
					movie,
				});
			} catch (error) {
				console.error(error);
				res.status(500).json({ message: "Failure" });
			}
			break;
		default:
			res.setHeader("Allow", ["GET", "POST"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}

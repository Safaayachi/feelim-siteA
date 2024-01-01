import { prisma } from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function movieHandler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const {
		query: { id },
		method,
	} = req;
	const { title, description, director, duration, list_id } = req.body;

	switch (method) {
		case "GET":
			try {
				// Get movie by Id
				const movie = await prisma.movie.findUnique({
					where: {
						id: Number(id),
					},
					include: {
						list: true,
					},
				});
				res.status(200).json(movie);
			} catch (error) {
				console.error(error);
				res.status(500).json({ message: "Failure" });
			}
			break;
		case "PUT":
			try {
				// Update movie data
				await prisma.movie.update({
					where: { id: Number(id) },
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
				res.status(200).json(
					"Movie updated successfully"
				);
			} catch (error) {
				console.error(error);
				res.status(500).json({ message: "Failure" });
			}
			break;
		case "DELETE":
			try {
				// Delete movie
				await prisma.movie.delete({
					where: {
						id: Number(id),
					},
				});
				res.status(200).json(
					"Movie deleted successfully"
				);
			} catch (error) {
				console.error(error);
				res.status(500).json({ message: "Failure" });
			}
			break;
		default:
			res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}

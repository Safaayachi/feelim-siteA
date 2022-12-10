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
	const { title, description, country, Budget } = req.body;
	switch (method) {
		case "GET":
			// Get project by Id
			const project = await prisma.project.findUnique({
				where: {
					id: Number(req.query.id),
				},
				include: {
					media: true,
					categories: true,
					rewards: true,
					comments: true,
					user: true,
					contributions: true,
				},
			});
			res.status(200).json(project);
			break;
		case "PUT":
			// Update project data
			await prisma.project.update({
				where: { id: Number(req.query.id) },
				data: {
					title,
					description,
					country,
					Budget,
				},
			});
			res.status(200).json("project updated successfully");
			break;
		case "DELETE":
			await prisma.project.delete({
				where: {
					id: Number(req.query.id),
				},
			});
			res.status(200).json("project deleted successfully");
			break;
		default:
			res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}

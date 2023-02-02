import { prisma } from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { method } = req;
	const { userId, title, description, country, Budget,categoryId } = req.body;

	switch (method) {
		case "GET":
			try {
				const projects = await prisma.project.findMany();
				res.status(200).json(projects);
			} catch (error) {
				res.status(500).json({ message: "failure" });
			}
			break;
		case "POST":
			try {
				const newProject = await prisma.project.create({
					data: {
						title,
						description,
						country,
						Budget,
						user: {
							connect: {
								id: userId,
							},
						},
						categories:{
							connect: {
								id:categoryId,
							},
						},
					},
				});
				res.status(200).json({
					message: "project Created",
					newProject,
				});
			} catch (error) {
				res.status(500).json({ message: "failure" });
			}
			break;
		default:
			res.setHeader("Allow", ["GET", "POST"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}

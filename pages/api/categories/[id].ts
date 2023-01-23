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
	const { Name } = req.body;
	switch (method) {
		case "GET":
			// Get category by Id
			const category = await prisma.category.findUnique({
				where: {
					id: Number(req.query.id),
				},
				include: {
					projects:true,
					
				},
			});
			res.status(200).json(category);
			break;
		case "PUT":
			// Update category data
			await prisma.category.update({
				where: { id: Number(req.query.id) },
				data: {
					Name
				},
			});
			res.status(200).json("category updated successfully");
			break;
		case "DELETE":
			const deleteCategory = await prisma.category.delete({
				where: {
					id: Number(req.query.id),
				},
			});
			res.status(200).json("category deleted successfully");
			break;
		default:
			res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}

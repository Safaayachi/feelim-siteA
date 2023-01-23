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
	const { firstName, lastName, email, password, creator, avatar } = req.body;
	switch (method) {
		case "GET":
			// Get user by Id
			const contributions = await prisma.contribution.findMany({
				where: {
					user: {
						
							id: Number(req.id),
						},
					},
				},
				
			);
			res.status(200).json(contributions);
			break;
		
		case "DELETE":
			const deleteUser = await prisma.user.delete({
				where: {
					id: Number(req.query.id),
				},
			});
			res.status(200).json("user deleted successfully");
			break;
		default:
			res.setHeader("Allow", ["GET", "DELETE"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}

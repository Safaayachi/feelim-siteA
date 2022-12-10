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
			const user = await prisma.user.findUnique({
				where: {
					id: Number(req.query.id),
				},
				include:{
					projects:true,
					contributions:true,
					chats:true
				}
			});
			res.status(200).json(user);
			break;
		case "PUT":
			// Update user data
			await prisma.user.update({
				where: { id: Number(req.query.id) },
				data: {
					firstName,
					lastName,
					email,
					password,
					creator,
					avatar,
				},
			});
			res.status(200).json("user created successfully");
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
			res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}

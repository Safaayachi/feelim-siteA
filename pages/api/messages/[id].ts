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
	switch (method) {
		case "GET":
			// Get chat by Id
			const chat = await prisma.chat.findUnique({
				where: {
					id: Number(req.query.id),
				},
				include: {
					messages:true
				},
			});
			res.status(200).json(chat);
			break;
		
		case "DELETE":
			const deleteChat = await prisma.chat.delete({
				where: {
					id: Number(req.query.id),
				},
			});
			res.status(200).json("chat deleted successfully");
			break;
		default:
			res.setHeader("Allow", ["GET", "DELETE"]);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}
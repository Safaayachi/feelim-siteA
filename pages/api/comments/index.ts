import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { comment, userId, projectId } = req.body;
	const { method } = req;
	if (method === "POST") {
		try {
			const newComment = await prisma.comment.create({
				data: {
					comment,
					user: {
						connect: {
							id: userId,
						},
					},
					project: {
						connect: {
							id: projectId,
						},
					},
				},
			});
			res.status(200).json({
				message: "comment Created",
				newComment,
			});
		} catch (error) {
			res.status(500).json({ message: "failure" });
		}
	} else res.status(405).end(`Method ${method} Not Allowed`);
}

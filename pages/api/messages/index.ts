import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { chatId, senderId, receiverId, message } = req.body;
	const { method } = req;
	let chat;
	if (method == "POST") {
		try {
			const chat = await prisma.chat.upsert({
				create: {
					users: {
						connect: [{ id: senderId }, { id: receiverId }],
					},
					messages: {
						create: {
							message,
							senderId,
							receiverId,
						},
					},
				},
				update: {
					messages: {
						create: {
							message,
							senderId,
							receiverId,
						},
					},
				},
				where: {
					id: chatId,
				},
			});

			res.status(200).json(chat);
		} catch (error) {
			res.status(500).json({ message: "failure" });
		}
	} else res.status(405).end(`Method ${method} Not Allowed`);
}

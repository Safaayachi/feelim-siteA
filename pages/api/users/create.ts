import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { firstName, lastName, email, password, creator, avatar } = req.body;

	try {
		await prisma.user.create({
			data: {
				firstName,
				lastName,
				email,
				password,
				creator,
				avatar,
			},
		});
		res.status(200).json({ message: "user Created" });
	} catch (error) {
		console.log("Failure");
	}
}

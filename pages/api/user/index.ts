import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import bcrypt from "bcryptjs";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { method } = req;
	const { firstName, lastName, email, password, avatar } = req.body;

	switch (method) {
		case "GET":
			try {
				const users = await prisma.user.findMany();
				res.status(200).json(users);
			} catch (error) {
				console.error("Error fetching users:", error);
				res.status(500).json({
					message: "Internal Server Error",
				});
			}
			break;
		case "POST":
			try {
				// Validate input fields (example: check if required fields are present)

				const salt = await bcrypt.genSalt(10);
				const hashedPassword = await bcrypt.hash(
					password,
					salt
				);

				const user = await prisma.user.create({
					data: {
						firstName,
						lastName,
						email,
						password: hashedPassword,
						avatar,
						isAdmin: false, // Provide a default value
					},
				});

				res.status(200).json({
					status: "success",
					data: user,
				});
			} catch (error) {
				console.error("Error creating user:", error);
				res.status(500).json({
					status: "error",
					message: "Internal Server Error",
				});
			}
			break;
		default:
			res.setHeader("Allow", ["GET", "POST"]);
			res.status(405).json({
				status: "error",
				message: `Method ${method} Not Allowed`,
			});
	}
}

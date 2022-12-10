import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { amount, contributorId, projectId } = req.body;
	const { method } = req;
	if (method === "POST") {
		try {
			const contribution = await prisma.contribution.create({
				data: {
					amount,
					user: {
						connect: {
							id: contributorId,
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
				message: "contribution Created",
				contribution,
			});
			await prisma.project.update({
				where: { id: projectId },
				data: {
					moneyRaised: {
						increment: amount,
					},
				},
			});
		} catch (error) {
			res.status(500).json({ message: "failure" });
		}
	} else res.status(405).end(`Method ${method} Not Allowed`);
}

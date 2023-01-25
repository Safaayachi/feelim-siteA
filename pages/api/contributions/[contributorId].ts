import { prisma } from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
export default async function userHandler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const {
		query: { contributorId },
		method,
	} = req;
	
    if (method === "GET") {
			// Get contributions by contributorId
			try{
                const contributions = await prisma.contribution.findMany({
                    where: {
                        contributorId: Number(req.query.contributorId),
                      },
					include:{
						project:true,
					}}
                    
                );
                res.status(200).json(contributions);
            }
            catch (error) {
                res.status(500).json({ message: "failure" });
            }
        } else res.status(405).end(`Method ${method} Not Allowed`);
			
		
		
	}

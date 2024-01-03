import { OpenAI } from "openai";
import dotenv from "dotenv";
import { NextApiRequest, NextApiResponse } from "next";
dotenv.config();
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { method } = req;

	if (method === "POST") {
		const systemPrompt =
			"give me an array 20 movies that perfectly fit with these emotions in a Json format the movies in an array also the main emotions";
		const { userPrompt } = req.body;

		if (!userPrompt) {
			return res.status(400).json({
				error: "Missing userPrompt",
			});
		}

		try {
			const result = await getOpenAICompletionWithEmotion(
				systemPrompt,
				userPrompt
			);

			// Extract movies
			const movies = extractMovies(result);

			res.json({ movies });
		} catch (error) {
			console.error("Error in extracting movies:", error);
			res.status(500).json({
				error: "Internal Server Error",
			});
		}
	} else {
		res.status(405).end(`Method ${method} Not Allowed`);
	}
}

async function getOpenAICompletionWithEmotion(
	systemPrompt: string,
	userPrompt: string,
	temperature = 0
): Promise<string> {
	try {
		const openai = new OpenAI({
			apiKey: OPENAI_API_KEY,
		});
		const completion = await openai.chat.completions.create({
			model: "gpt-3.5-turbo",
			messages: [
				{ role: "system", content: systemPrompt },
				{ role: "user", content: userPrompt },
			],
			max_tokens: 1024,
			temperature,
		});

		let content =
			completion.choices[0]?.message?.content?.trim() ?? "";
		console.log("OpenAI Output: \n", content);

		return content;
	} catch (e) {
		console.error("Error getting data:", e);
		throw e;
	}
}

function extractMovies(output: string): string[] {
	try {
		// Attempt to parse the output as JSON
		const parsedOutput = JSON.parse(output);

		// Ensure the expected structure is present
		if (parsedOutput && parsedOutput.movies) {
			const movies = parsedOutput.movies.map(
				(movie, index) => `${index + 1}. ${movie}`
			);

			return movies;
		} else {
			console.error(
				"Unexpected output structure:",
				parsedOutput
			);
			throw new Error("Unexpected output structure");
		}
	} catch (error) {
		// Handle JSON parsing errors gracefully
		console.error("Error parsing OpenAI output:", error.message);
		throw new Error("Error parsing OpenAI output");
	}
}

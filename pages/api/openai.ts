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
			"give me the main emotions of this text and give me 10 movies that perfectly fit with these emotions in a Json format the movies in an array also the main emotions";
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

			// Extract emotions and movies
			const { emotions, movies } =
				extractEmotionsAndMovies(result);

			res.json({ emotionAnalysis: { emotions, movies } });
		} catch (error) {
			console.error("Error in Emotion Analysis:", error);
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

		const content =
			completion.choices[0]?.message?.content?.trim() ?? "";
		console.log("OpenAI Output: \n", content);

		return content;
	} catch (e) {
		console.error("Error getting data:", e);
		throw e;
	}
}

function extractEmotionsAndMovies(output: string): {
	emotions: string[];
	movies: string[];
} {
	try {
		const parsedOutput = JSON.parse(output);

		// Ensure the expected structure is present
		if (
			parsedOutput &&
			parsedOutput.text &&
			parsedOutput.emotions &&
			parsedOutput.movies
		) {
			const emotions = parsedOutput.emotions; // Extracted emotions
			const movies = parsedOutput.movies; // Extracted list of movies

			return { emotions, movies };
		} else {
			console.error(
				"Unexpected output structure:",
				parsedOutput
			);
			throw new Error("Unexpected output structure");
		}
	} catch (error) {
		console.error("Error parsing OpenAI output:", error);
		throw new Error("Error parsing OpenAI output");
	}
}

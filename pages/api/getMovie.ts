import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import dotenv from "dotenv";

dotenv.config();
const TMDb_API_KEY = process.env.TMDb_API_KEY;

interface Movie {
	title: string;
	description: string;
	director: string;
	duration: number;
	imageUrl: string;
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { method, query } = req;

	if (method === "GET") {
		const movieName = query.name as string;

		if (!movieName) {
			return res.status(400).json({
				error: "Missing movie name in query parameters",
			});
		}

		try {
			const movieDetails = await getMovieDetails(movieName);
			res.json(movieDetails);
		} catch (error) {
			console.error("Error getting movie details:", error);
			res.status(500).json({
				error: "Internal Server Error",
			});
		}
	} else {
		res.status(405).end(`Method ${method} Not Allowed`);
	}
}

async function getMovieDetails(movieName: string): Promise<Movie> {
	const apiKey = TMDb_API_KEY as string; // Replace with your TMDb API key
	const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
		movieName
	)}`;

	try {
		const response = await axios.get(apiUrl);

		if (response.data.results.length > 0) {
			const movieResult = response.data.results[0];
			const movieDetails: Movie = {
				title: movieResult.title,
				description: movieResult.overview,
				director: "", // Director information may not be directly available in the search results
				duration: 0, // Duration information may not be directly available in the search results
				imageUrl: `https://image.tmdb.org/t/p/w500${movieResult.poster_path}`, // Adjust the size as needed
			};

			return movieDetails;
		} else {
			// Handle the case when movie details are not found
			return {
				title: movieName,
				description: "Movie details not found",
				director: "",
				duration: 0,
				imageUrl: "", // You can provide a default image URL if needed
			};
		}
	} catch (error) {
		console.error("Error getting movie details:", error);
		throw error;
	}
}

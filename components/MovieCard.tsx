import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link
import axios from "axios";

interface MovieCardProps {
	movieName: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ movieName }) => {
	const [movieDetails, setMovieDetails] = useState<any>(null);

	useEffect(() => {
		const fetchMovieDetails = async () => {
			try {
				const response = await axios.get(
					`/api/getMovie?name=${encodeURIComponent(
						movieName
					)}`
				);
				if (response.status === 200) {
					setMovieDetails(response.data);
				} else {
					console.error(
						"Error:",
						response.status,
						response.statusText
					);
				}
			} catch (error) {
				console.error("Error:", error);
			}
		};

		fetchMovieDetails();
	}, [movieName]);

	return (
		<Link href={`/movies/${encodeURIComponent(movieName)}`}>
			<div className="relative h-48 rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out overflow-hidden">
				{movieDetails && (
					<>
						<Image
							className="object-cover"
							src={
								movieDetails.imageUrl
							}
							alt={movieDetails.title}
							layout="fill"
						/>
						<div className="absolute z-20 bg-black h-14 opacity-80 bottom-0 left-0 w-full"></div>
						<div className="absolute z-20 h-14 flex items-center bottom-0 left-0 w-full p-2 text-white text-xs font-extrabold">
							<div>
								{
									movieDetails.title
								}
							</div>
						</div>
					</>
				)}
			</div>
		</Link>
	);
};

export default MovieCard;

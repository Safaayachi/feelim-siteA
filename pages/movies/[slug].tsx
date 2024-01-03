import React, { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "../../components/Layout";

import { useRouter } from "next/router";

const Details = () => {
	const router = useRouter();
	const { slug } = router.query; // Use slug instead of id
	const [movieDetails, setMovieDetails] = useState(null);

	useEffect(() => {
		const fetchMovieDetails = async () => {
			try {
				const response = await fetch(
					`/api/getMovie?name=${encodeURIComponent(
						slug
					)}`
				);
				if (response.ok) {
					const result = await response.json();
					setMovieDetails(result);
					console.log(result);
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
	}, [slug]);

	return (
		<div className="relative min-h-screen">
			<Layout hasFooter={false} hasHeader={false}>
				<div className="relative h-screen w-full flex items-end">
					{movieDetails && (
						<>
							<Image
								src={
									movieDetails.imageUrl
								}
								alt={
									movieDetails.title
								}
								fill
								className="absolute object-cover h-full w-full"
							/>
							<div className="absolute h-2/5 w-full bg-black opacity-40"></div>
							<div className="absolute h-2v/5 w-full flex flex-col gap-2 p-16 text-white font-poppins">
								<h1 className="text-2xl font-bold">
									{
										movieDetails.title
									}
								</h1>

								<div className="text-primary-tint items-start flex flex-row gap-2 text-xs"></div>
								<div className="text-xs">
									{
										movieDetails.description
									}
								</div>
							</div>
						</>
					)}
				</div>
			</Layout>
		</div>
	);
};

export default Details;

import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";

import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n/next-i18next.config";
import { Router, useRouter } from "next/router";
import { prisma } from "../../lib/prisma";
import { useState } from "react";

interface props {
	userId: Number;
	projectId: Number;
}
const Details: NextPage<{
	movie: any;
}> = ({ movie }) => {
	const { t, i18n } = useTranslation(["home", "common", "button"]);
	const router = useRouter();
	const { id } = router.query;

	return (
		<div className="relative min-h-screen">
			<Layout hasFooter={false} hasHeader={false}>
				<div className="relative h-screen w-full flex items-end">
					<Image
						src="/pic.jpg"
						alt="Description"
						fill
						className="absolute object-cover h-full w-full"
					/>
					<div className="absolute h-2/5 w-full bg-black opacity-40"></div>
					<div className="absolute h-2v/5 w-full flex flex-col gap-2 p-16 text-white font-poppins">
						<h1 className=" text-2xl  font-bold">
							Napoléon
						</h1>
						<div className="flex flex-row gap-4 text-xs">
							<div>2023</div>
							<div>2h 38min</div>
						</div>
						<div className="text-primary-tint items-start flex flex-row gap-2 text-xs">
							<div className="p-2 bg-primary text-primary-tint rounded-md shadow-md font-bold">
								Drama
							</div>
							<div className="p-2 bg-primary text-primary-tint rounded-md shadow-md font-bold">
								Romance
							</div>
							<div className="p-2 bg-primary text-primary-tint rounded-md shadow-md font-bold">
								Action
							</div>
						</div>
						<div className="text-xs">
							Offre un aperçu
							personnel des origines
							de Napoléon et de son
							ascension rapide et
							impitoyable vers
							l'empire, vu à travers
							le prisme de sa relation
							addictive et souvent
							volatile avec sa femme
							et son véritable amour,
							Joséphine.
						</div>
						<div className="flex flex-row gap-4 text-xs">
							<div className="text-primary">
								Réalisation
							</div>
							<div>Ridley Scott</div>
						</div>
						<div className="flex flex-row gap-4 text-xs">
							<div className="text-primary">
								Scénario
							</div>
							<div>David Scarpa</div>
						</div>
						<div className="flex flex-row gap-4 text-xs">
							<div className="text-primary">
								Casting
								principal
							</div>
							<div>
								Joaquin Phoenix
							</div>
							<div>Vanessa Kirby</div>
							<div>Tahar Rahim</div>
						</div>
						<div className="flex flex-row gap-2">
							<div className="h-8 w-8 border border-solid border-primary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out flex justify-center items-center">
								<div className="text-xs">
									Link
								</div>
							</div>
							<div className="h-8 w-8 border border-solid border-primary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out flex justify-center items-center">
								<div className="text-xs">
									Link
								</div>
							</div>
							<div className="h-8 w-8 border border-solid border-primary rounded-md shadow-md cursor-pointer hover:scale-125 transition duration-700 ease-in-out flex justify-center items-center">
								<div className="text-xs">
									Link
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</div>
	);
};
export const getServerSideProps: GetServerSideProps = async (context) => {
	const queries = context.query;
	console.log(queries.id);
	const movie = await prisma.movie.findUnique({
		where: {
			id: Number(queries.id),
		},
	});
	console.log(movie);
	return {
		props: {
			movie,
			...(await serverSideTranslations(
				context.locale as string,
				["home", "common", "button"],
				nextI18NextConfig
			)),
		},
	};
};
export default Details;

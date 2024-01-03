import React, { useState } from "react";
import Layout from "../../components/Layout";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n/next-i18next.config";
import { useRouter } from "next/router";
import MovieCard from "../../components/MovieCard";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Formik, Form, Field } from "formik";
import Image from "next/image";

const Search: NextPage<{}> = () => {
	const { t } = useTranslation(["common", "home", "button"]);
	const router = useRouter();
	const [active, setActive] = React.useState(1);
	const [emotionAnalysisData, setEmotionAnalysisData] =
		useState<any>(null);
	console.log(emotionAnalysisData);

	const next = () => {
		if (active === 10) return;
		setActive(active + 1);
	};

	const prev = () => {
		if (active === 1) return;
		setActive(active - 1);
	};

	const startIndex = (active - 1) * 6;
	const endIndex = active * 6;

	const displayedMovies = emotionAnalysisData?.slice(
		startIndex,
		endIndex
	);

	const handleSubmit = async (data: { userPrompt: string }) => {
		try {
			const response = await fetch("/api/openai", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				const result = await response.json();
				setEmotionAnalysisData(result.movies);
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

	return (
		<div className=" bg-black ">
			<Layout hasFooter={false} hasHeader={false}>
				<div className=" flex flex-col  container sm:mx-auto px-4 py-24">
					<div className=" flex flex-col-reverse md:flex-col gap-16 items-center px-2 md:px-32">
						<div className="py-10 px-16 md:px-8 md:w-2/3 w-full  border border-solid rounded-md h-full md:h-[600px]">
							{emotionAnalysisData && (
								<div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-10 p-6">
									{displayedMovies?.map(
										(
											movie: any,
											index: any
										) => (
											<>
												<MovieCard
													movieName={
														movie
													}
												/>
											</>
										)
									)}
								</div>
							)}
							<div className="flex flex-row gap-4 justify-center items-center py-4">
								<div className="flex items-center justify-center gap-8">
									<IconButton
										size="sm"
										variant="outlined"
										onClick={
											prev
										}
										disabled={
											active ===
											1
										}
										className="flex justify-center items-center bg-secondary-tint cursor-pointer"
									>
										<ArrowLeftIcon
											strokeWidth={
												2
											}
											className="h-4 w-4 text-primary "
										/>
									</IconButton>
									<Typography
										color="gray"
										className="font-normal text-primary-tint"
									>
										Page{" "}
										<strong className="text-primary">
											{
												active
											}
										</strong>{" "}
										of{" "}
										<strong className="text-primary">
											10
										</strong>
									</Typography>
									<IconButton
										size="sm"
										variant="outlined"
										onClick={
											next
										}
										disabled={
											active ===
											10
										}
										className="flex justify-center items-center bg-secondary-tint cursor-pointer "
									>
										<ArrowRightIcon
											strokeWidth={
												2
											}
											className="h-4 w-4 text-primary "
										/>
									</IconButton>
								</div>
							</div>
						</div>
						<div className="relative w-full md:w-2/3">
							<Formik
								initialValues={{
									userPrompt: "",
								}}
								onSubmit={
									handleSubmit
								}
							>
								{() => (
									<Form className="flex flex-row items-center justify-end group shadow-md relative bg-black rounded-full">
										<Field
											type="text"
											className="bg-shade px-4 text-white focus:outline-primary font-poppins"
											placeholder="Type anything"
											name="userPrompt"
											id="userPrompt"
										/>
										<button
											type="submit"
											className="absolute px-3 py-2 rounded-full h-3/4 flex items-center bg-secondary-tint font-poppins text-xs cursor-pointer mr-1 text-white"
										>
											Search
										</button>
									</Form>
								)}
							</Formik>
						</div>
					</div>
				</div>
			</Layout>
		</div>
	);
};

export const getStaticProps: GetStaticProps = async (context) => {
	return {
		props: {
			...(await serverSideTranslations(
				context.locale as string,
				["common", "button", "input"],
				nextI18NextConfig
			)),
		},
	};
};
export default Search;

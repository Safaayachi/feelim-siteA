import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/Layout";
import RewardCard from "../../../components/RewardCard";
import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../../i18n/next-i18next.config";
import { Router, useRouter } from "next/router";
import { prisma } from "../../../lib/prisma";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
interface FormData {
	comment: String;
}
interface props {
	userId: Number;
	projectId: Number;
}
const Details: NextPage<{
	project: any;
}> = ({ project }) => {
	const handleSubmit = async (data: FormData) => {
		const userId = 1;
		const projectId = project.id;
		try{
			const res = await fetch("/api/comments", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...data, userId, projectId }),
			});
		}catch(err){}
	};
	const { t, i18n } = useTranslation(["home", "common", "button"]);
	const router = useRouter();
	const { id } = router.query;

	return (
		<div className="bg-primary-tint ">
			<Layout hasFooter={false} hasHeader={false}>
				<div className=" flex flex-col">
					<div className="relative h-52">
						<Image
							alt={"logo"}
							src={"/images/cover.jpg"}
							fill
							objectFit="cover"
							className="brightness-75 opacity-90"
						></Image>
					</div>
					<div className="bg-white flex flex-col gap-2 md:flex-row md:justify-around py-4 border-b border-solid border-dark-tint">
						<div className="flex flex-col gap-2">
							<div className="text-xs text-secondary-shade text-center">
								{t("common:contributions")}
							</div>
							<div className="text-xs text-primary font-semibold text-center">
								250
							</div>
						</div>
						<div className="flex flex-col gap-2">
							<div className="text-xs text-secondary-shade text-center">
								{t("common:amount-raised")}
							</div>
							<div className="text-xs text-primary font-semibold text-center">
								{project.moneyRaised} $
							</div>
						</div>
						<div className="flex flex-col gap-2">
							<div className="text-xs text-secondary-shade text-center">
								{t("common:budget")}
							</div>
							<div className="text-xs text-primary font-semibold text-center">
								{project.Budget} $
							</div>
						</div>
					</div>
					<div className="flex md:flex-row flex-col gap-6 ">
						<div className="flex flex-col gap-4 w-full lg:w-2/3 px-8 py-4">
							<div className="relative w-full   border border-solid border-dark-tint rounded-md flex flex-col  bg-white p-4">
								<h1 className="text-lg font-semibold text-secondary">
									{project.title}
								</h1>

								<p className="text-sm font-light py-2">
									{project.description}
								</p>
							</div>
							<div className="relative w-full  border border-solid border-dark-tint rounded-md flex flex-col  bg-white p-4">
								<div className="relative h-80">
									<Image
										alt={"logo"}
										src={"/images/cover.jpg"}
										fill
										objectFit="cover"
										className="brightness-75 opacity-90"
									></Image>
								</div>
							</div>
							<div className="relative w-full   border border-solid border-dark-tint rounded-md flex flex-col  bg-white p-4">
								<Formik
									initialValues={{ comment: "" }}
									onSubmit={handleSubmit}
								>
									{() => (
										<Form className="py-4">
											<Field
												type="text"
												name="comment"
												id="comment"
											/>

											<button type="submit"></button>
										</Form>
									)}
								</Formik>

								{project.comments?.map(
									(comment: any, idx: number) => (
										<div
											className="flex flex-col  "
											key={idx}
										>
											<div className="relative w-full flex flex-row justify-between items-start gap-3 border-b border-solid border-primary-tint py-2">
												<div className="relative h-8 w-8 ">
													<Image
														alt={"logo"}
														src={
															"/images/cover.jpg"
														}
														fill
														objectFit="cover"
														className="rounded-full"
													></Image>
												</div>
												<div className="flex-1 flex-col gap-1">
													<Link
														href={{
															pathname: `/contributor/users/[id]`,
															query: {
																id: comment.userId,
															},
														}}
													>
														<div className="flex-1 text-xs font-bold">
															username
														</div>
													</Link>
													<div className="flex-1 text-xs font-normal">
														{comment.comment}
													</div>
												</div>
											</div>
										</div>
									)
								)}
							</div>
						</div>
						{project.rewards?.map((reward: any, idx: number) => (
							<div
								className="flex flex-col gap-4 w-full lg:w-1/3 px-8 py-4"
								key={idx}
							>
								<RewardCard reward={reward} />
							</div>
						))}
					</div>
				</div>
			</Layout>
		</div>
	);
};
export const getServerSideProps: GetServerSideProps = async (context) => {
	const queries = context.query;
	console.log(queries.id);
	const project = await prisma.project.findUnique({
		where: {
			id: Number(queries.id),
		},
		include: {
			media: true,
			categories: true,
			rewards: true,
			comments: true,
			contributions: true,
		},
	});
	console.log(project);
	return {
		props: {
			project,
			...(await serverSideTranslations(
				context.locale as string,
				["home", "common", "button"],
				nextI18NextConfig
			)),
		},
	};
};
export default Details;

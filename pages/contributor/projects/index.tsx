import React, { Fragment, useState } from "react";
import Layout from "../../../components/Layout";
import ProjectCard from "../../../components/ProjectCard";
import SearchBar from "../../../components/SearchBar";
import { prisma } from "../../../lib/prisma";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../../i18n/next-i18next.config";
import { useCategories } from "../../../hooks/useCategories";

const Home: NextPage = ({ category }) => {
	const { t, i18n } = useTranslation(["home", "common", "button"]);
	const router = useRouter();
	const categoriesFetch = useCategories();
	const redirect = (categoryId: any) => {
		router.push(
			{
				pathname: "/contributor/projects/",
				query: { value: categoryId },
			},
			"/contributor/projects/"
		);
	};

	return (
		<div>
			<Layout hasFooter={false} hasHeader={false} hasSideBar={true}>
				<div className="container max-auto px-10 py-6 flex flex-col">
					<div className="md:w-1/3 xl:w-1/4 w-full self-end">
						<SearchBar />
					</div>
					<div className="flex flex-col gap-2 py-16">
						<div className="text-4xl font-semibold ">
							{t("home:contributor-home-title1")}
						</div>
						<div className="text-4xl font-semibold">
							{" "}
							{t("home:contributor-home-title2")}
						</div>
						<div className="text-xs text-secondary-shade">
							$47.345.6476 {t("home:contributions-amount")}
						</div>
					</div>
					<Tab.Group>
						<Tab.List
							className={
								"flex flex-row overflow-x-auto gap-4 py-2"
							}
						>
							{categoriesFetch.data?.map(
								(category: any, idx: number) => (
									<Tab key={idx} as={Fragment}>
										{({ selected }) => (
											<button
												className={
													selected
														? "btn btn-primary w-fit"
														: "btn btn-primary-outline w-fit"
												}
												onClick={() => {
													redirect(category.id);
												}}
											>
												{category.Name}
											</button>
										)}
									</Tab>
								)
							)}
						</Tab.List>
						<div className={"py-8"}>
							<div
								className={
									'className=" grid lg:grid-cols-4 md:grid-cols-3  gap-8 "'
								}
							>
								<div className="grid grid-cols-3 ">
									{category.projects.map(
										(project: any, idx: number) => (
											<Link
												href={{
													pathname: `/contributor/projects/[id]`,
													query: {
														id: project.id,
													},
												}}
												key={idx}
											>
												<ProjectCard
													project={project}
												/>
											</Link>
										)
									)}
								</div>
							</div>
						</div>
					</Tab.Group>
				</div>
			</Layout>
		</div>
	);
};
export const getServerSideProps: GetServerSideProps = async (context) => {
	const queries = context.query;
	let categoryId = 1;
	if (queries.value) {
		categoryId = Number(queries.value);
	}

	const category = await prisma.category.findUnique({
		where: {
			id: categoryId,
		},
		include: {
			projects: true,
		},
	});
	return {
		props: {
			category,
			...(await serverSideTranslations(
				context.locale as string,
				["home", "common", "button"],
				nextI18NextConfig
			)),
		},
	};
};
export default Home;

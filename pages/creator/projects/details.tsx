import React from "react";
import Link from "next/link";
import Layout from "../../../components/Layout";
import Image from "next/image";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import ProgressBar from "../../../components/ProgressBar";
import type { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../../i18n/next-i18next.config";

const Details: NextPage<{}> = () => {
	const { t, i18n } = useTranslation(["home", "common", "button"]);
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
					<div className="py-6 flex flex-row justify-between items-center px-4">
						<div className="text-secondary font-semibold text-lg">
							Project Title
						</div>
						<div className="flex flex-row gap-4 text-lg text-secondary">
							<i className="icon-eye p-2 bg-white rounded-md border border-solid border-dark-tint cursor-pointer"></i>
							<i className="icon-write p-2 bg-white rounded-md border border-solid border-dark-tint cursor-pointer"></i>
						</div>
					</div>
					<Tab.Group>
						<Tab.List
							className={
								"relative border-b border-dark-tint font-semibold text-xs border-solid flex  justify-center h-10 gap-6"
							}
						>
							<Tab as={Fragment}>
								{({ selected }) => (
									<button
										className={
											selected
												? " text-primary border-b border-solid border-primary"
												: " text-secondary-shade border-b border-solid border-transparent"
										}
									>
										{t("common:contributions")}
									</button>
								)}
							</Tab>
							<Tab as={Fragment}>
								{({ selected }) => (
									<button
										className={
											selected
												? " text-primary border-b border-solid border-primary"
												: " text-secondary-shade border-b border-solid border-transparent"
										}
									>
										{t("common:contributors")}
									</button>
								)}
							</Tab>
							<Tab as={Fragment}>
								{({ selected }) => (
									<button
										className={
											selected
												? " text-primary border-b border-solid border-primary"
												: " text-secondary-shade border-b border-solid border-transparent"
										}
									>
										{t("common:amount-raised")}
									</button>
								)}
							</Tab>
							<Tab as={Fragment}>
								{({ selected }) => (
									<button
										className={
											selected
												? " text-primary border-b border-solid border-primary"
												: " text-secondary-shade border-b border-solid border-transparent"
										}
									>
										{t("common:analytics")}
									</button>
								)}
							</Tab>
						</Tab.List>
						<Tab.Panels className={"py-12"}>
							<Tab.Panel>
								<div className="flex justify-center container max-auto px-8">
									<div className="relative w-full lg:w-2/3  border border-solid border-dark-tint rounded-md flex flex-col  bg-white">
										<div className="flex text-xs font-medium flex-row justify-around py-4 border-b border-solid border-dark-tint">
											<div>{t("common:contributor")}</div>
											<div>{t("common:amount")}</div>
											<div>{t("common:date")}</div>
										</div>
									</div>
								</div>
							</Tab.Panel>
							<Tab.Panel>
								<div className="flex justify-center container max-auto px-8">
									<div className="relative w-full lg:w-2/3  border border-solid border-dark-tint rounded-md flex flex-col  bg-white">
										<div className="text-xs font-medium p-4 border-b border-solid border-dark-tint">
										{t("common:contributor")}
										</div>
									</div>
								</div>
							</Tab.Panel>
							<Tab.Panel>
								<div className="flex flex-col  items-center gap-10 container max-auto px-8">
									<div className="relative w-full lg:w-2/3  border border-solid border-dark-tint rounded-md flex flex-col  bg-white">
										<div className="text-xs font-medium p-4 border-b border-solid border-dark-tint flex flex-col">
											<div className="flex flex-row justify-between py-2 font-semibold text-xs text-secondary-shade">
												<div>{t("common:amount-raised")}</div>
												<div>{t("common:budget")}</div>
											</div>
											<div className="relative h-4">
												<ProgressBar
													percentage={70}
												></ProgressBar>
											</div>
											<div className="flex flex-row justify-between py-2 font-semibold text-sm text-secondary">
												<div>150 $</div>
												<div>180$</div>
											</div>
										</div>
									</div>
									<div className="relative w-full lg:w-2/3  border border-solid border-dark-tint rounded-md flex justify-center py-4  bg-white">
										<div className="flex flex-col">
											<div className="text-center text-3xl">
												30$
											</div>
											<div className="text-sm text-secondary-shade">
											{t("common:money-left")}
											</div>
										</div>
									</div>
								</div>
							</Tab.Panel>
							<Tab.Panel>
								<div className="flex flex-col items-center gap-10 container max-auto px-8">
									<div className="relative w-full lg:w-2/3  border border-solid border-dark-tint rounded-md flex flex-col  bg-white">
										<div className="text-xs font-medium p-4 border-b border-solid border-dark-tint flex flex-col">
											<div className="flex flex-row justify-between py-2 font-semibold text-xs text-secondary-shade">
												<div>{t("common:amount-raised")}</div>
												<div>{t("common:budget")}</div>
											</div>
											<div className="relative h-4">
												<ProgressBar
													percentage={70}
												></ProgressBar>
											</div>
											<div className="flex flex-row justify-between py-2 font-semibold text-sm text-secondary">
												<div>150 $</div>
												<div>180$</div>
											</div>
										</div>
									</div>
									<div className="relative w-full lg:w-2/3  border border-solid border-dark-tint rounded-md flex flex-col  bg-white">
										<div className="text-xs font-medium p-4 border-b border-solid border-dark-tint flex flex-col">
											<div className="flex flex-row justify-between py-2 font-semibold text-xs text-secondary-shade">
												<div>{t("common:contributors")}</div>
												<div>{t("common:total-views")}</div>
											</div>
											<div className="relative h-4">
												<ProgressBar
													percentage={30}
												></ProgressBar>
											</div>
											<div className="flex flex-row justify-between py-2 font-semibold text-sm text-secondary">
												<div>600</div>
												<div>2500</div>
											</div>
										</div>
									</div>
									<div className="relative w-full lg:w-2/3  border border-solid border-dark-tint rounded-md flex flex-col  bg-white">
										<div className="text-xs font-medium p-4 border-b border-solid border-dark-tint flex flex-col">
											<div className="flex flex-row justify-between py-2 font-semibold text-xs text-secondary-shade">
												<div>{t("common:new-contributors")}</div>
												<div>{t("common:contributions")}</div>
											</div>
											<div className="relative h-4">
												<ProgressBar
													percentage={10}
												></ProgressBar>
											</div>
											<div className="flex flex-row justify-between py-2 font-semibold text-sm text-secondary">
												<div>100</div>
												<div>2500</div>
											</div>
										</div>
									</div>
								</div>
							</Tab.Panel>
						</Tab.Panels>
					</Tab.Group>
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
				["home", "common", "button"],
				nextI18NextConfig
			)),
		},
	};
};
export default Details;

import React from "react";
import Link from "next/link";
import Layout from "../../../components/Layout";
import type { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../../i18n/next-i18next.config";

const ProjectRewards:NextPage<{}> = () => {
	const { t } = useTranslation(["common", "home", "button", "input"]);
	return (
		<div className="bg-primary-tint">
			<Layout hasFooter={false} hasHeader={false}>
				<div className="py-32  flex justify-center container max-auto px-4 ">
					<form className="relative w-full lg:w-2/3  lg:shadow-md p-8 border corder-solid border-dark-tint rounded-md flex flex-col gap-4 bg-white">
						<div className="flex flex-row justify-between items-center">
							<label
								htmlFor="title"
								className=" text-dark font-semibold text-xs"
							>
								{t("input:title")}
							</label>
							<input type="text" className="input w-2/3" />
						</div>
						<div className="flex flex-row justify-between items-center">
							<label
								htmlFor="level"
								className=" text-dark font-semibold text-xs"
							>
								{t("input:level")}
							</label>
							<input type="text" className="input w-2/3" />
						</div>
						<div className="flex flex-row justify-between items-center">
							<label
								htmlFor="description"
								className=" text-dark font-semibold text-xs"
							>
								{t("input:description")}
							</label>
							<textarea className=" w-2/3 " />
						</div>
						<div className="flex flex-row justify-between items-center">
							<label
								htmlFor="value"
								className=" text-dark font-semibold text-xs"
							>
								{t("input:value")}
							</label>
							<input type="text" className="input w-2/3" />
						</div>
						<div className="flex flex-row justify-between items-center">
							<label
								htmlFor="quantity"
								className=" text-dark font-semibold text-xs"
							>
								{t("input:quantity")}
							</label>
							<input type="text" className="input w-2/3 px-6" />
						</div>
						<div className="flex flex-row justify-between items-center">
							<label
								htmlFor="shipping"
								className=" text-dark font-semibold text-xs"
							>
								{t("input:shipping")}
							</label>
							<input type="text" className="input w-2/3" />
						</div>
						<div className="flex flex-row justify-between items-center">
							<label
								htmlFor="image"
								className=" text-dark font-semibold text-xs"
							>
								{t("input:image")}
							</label>
							<input type="file" className=" w-2/3 " />
						</div>

						<div className="flex flex-row justify-between">
							<Link href={"/creator/createProject/media"}>
								<button className="btn btn-primary-outline my-6">
								{t("button:back")}
								</button>
							</Link>

							<div>
								<button className="btn btn-primary my-6">
								{t("button:create")}
								</button>
							</div>
						</div>
					</form>
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
				["common", "home", "button", "input"],
				nextI18NextConfig
			)),
		},
	};
};
export default ProjectRewards;

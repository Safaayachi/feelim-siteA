import React from "react";
import Link from "next/link";
import type { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n/next-i18next.config";

const addProjectInfo: NextPage<{}> = () => {
	const { t } = useTranslation(["common", "home", "button"]);
	return (
		<div className="py-32  flex justify-center container max-auto px-4">
			<form className="relative w-full lg:w-2/3  lg:shadow-md p-8 border corder-solid border-dark-tint rounded-md flex flex-col gap-4">
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
						htmlFor="description"
						className=" text-dark font-semibold text-xs"
					>
						{t("input:description")}
					</label>
					<textarea className=" w-2/3 " />
				</div>
				<div className="flex flex-row justify-between items-center">
					<label
						htmlFor="country"
						className=" text-dark font-semibold text-xs"
					>
						{t("input:country")}
					</label>
					<input type="text" className="input w-2/3" />
				</div>
				<div className="flex flex-row justify-between items-center">
					<label
						htmlFor="budget"
						className=" text-dark font-semibold text-xs"
					>
						{t("input:budget")}
					</label>
					<input type="text" className="input w-2/3 px-6" />
				</div>
				<div className="flex flex-row justify-between items-center">
					<label
						htmlFor="categories"
						className=" text-dark font-semibold text-xs"
					>
						{t("input:categories")}
					</label>
					<input type="text" className="input w-2/3" />
				</div>

				<Link href={"/projects/addProjectMedia"} className="self-end">
					<button className="btn btn-primary my-6">Next</button>
				</Link>
			</form>
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
export default addProjectInfo;

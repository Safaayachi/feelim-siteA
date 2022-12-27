import React from "react";
import Link from "next/link";
import Layout from "../../../components/Layout";
import type { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../../i18n/next-i18next.config";
import { SubmitHandler, useForm } from "react-hook-form";
type Inputs = {
	title: String;
	description: String;
	country: String;
	budget: String;
	category: String;
	rewardTitle: String;
	rewardDescription: String;
	rewardValue: Number;
	rewardQuantity: Number;
	rewardShipping: Date;
	rewardImage: String;
};
const Update: NextPage<{}> = () => {
	const { t } = useTranslation(["common", "home", "button"]);
	return (
		<div className="bg-primary-tint">
			<Layout hasFooter={false} hasHeader={false}>
				<div className="py-32  flex justify-center container max-auto px-4">
					<form className="w-full lg:w-2/3 flex flex-col gap-10">
						<div className="relative lg:shadow-md p-8 border border-solid border-dark-tint rounded-md flex flex-col gap-4 bg-white">
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
								<input
									type="text"
									className="input w-2/3 px-6"
								/>
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
						</div>

						<div className="relative lg:shadow-md p-8 border border-solid border-dark-tint rounded-md flex flex-col gap-4 bg-white">
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
								<input
									type="text"
									className="input w-2/3 px-6"
								/>
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
								<input
									type="file"
									className=" w-2/3 text-xs text-slate-500
                                                file:mr-4 file:py-1 file:px-4
                                                file:rounded-full file:border-0
                                                file:text-xs file:font-semibold
                                              file:bg-violet-50 file:text-primary
                                              hover:file:bg-violet-100
                                              "
								/>
							</div>

							<div className="flex  justify-end">
								<button className="btn btn-primary w-fit my-6">
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
				["common", "button", "input"],
				nextI18NextConfig
			)),
		},
	};
};
export default Update;

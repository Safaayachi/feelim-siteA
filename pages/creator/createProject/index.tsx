import React, { useState } from "react";
import Layout from "../../../components/Layout";
import type { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../../i18n/next-i18next.config";
import { useRouter } from "next/router";
import { Formik, Form, Field } from "formik";
import Image from "next/image";
type Inputs = {
	title: String;
	description: String;
	country: String;
	Budget: Number;
	categoryId: Number;
};

const Create: NextPage<{}> = () => {
	const { t } = useTranslation(["common", "home", "button"]);
	const router = useRouter();

	const handleSubmit = async (data: Inputs) => {
		const userId = 4;
		try {
			const res = await fetch("/api/projects", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...data, userId }),
			});

			if (res.ok) {
				const { id} = await res.json();
				router.push(`/projects/${id}`);
			}
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="bg-primary-tint">
			<Layout hasFooter={false} hasHeader={false}>
				<div className="py-32  flex justify-center container max-auto px-4">
					<Formik
						initialValues={{
							title: "",
							description: "",
							country: "",
							Budget: 0,
							categoryId: 0,
						}}
						onSubmit={handleSubmit}
					>
						{() => (
							<Form className="w-full lg:w-2/3 flex flex-col gap-10">
								<div className="relative lg:shadow-md p-8 border border-solid border-dark-tint rounded-md flex flex-col gap-4 bg-white">
									<div className="flex flex-row justify-between items-center">
										<label
											htmlFor="title"
											className=" text-dark font-semibold text-xs"
										>
											{t("input:title")}
										</label>
										<Field
											type="text"
											className="input w-2/3"
											id="title"
											name="title"
										/>
									</div>
									<div className="flex flex-row justify-between items-center">
										<label
											htmlFor="description"
											className=" text-dark font-semibold text-xs"
										>
											{t("input:description")}
										</label>
										<Field
											className=" w-2/3 "
											id="description"
											type="text"
											name="description"
										/>
									</div>
									<div className="flex flex-row justify-between items-center">
										<label
											htmlFor="country"
											className=" text-dark font-semibold text-xs"
										>
											{t("input:country")}
										</label>
										<Field
											type="text"
											className="input w-2/3"
											id="country"
											name="country"
										/>
									</div>
									<div className="flex flex-row justify-between items-center">
										<label
											htmlFor="budget"
											className=" text-dark font-semibold text-xs"
										>
											{t("input:budget")}
										</label>
										<Field
											type="number"
											className="input w-2/3 px-6"
											id="Budget"
											name="Budget"
										/>
									</div>
									<div className="flex flex-row justify-between items-center">
										<label
											htmlFor="categories"
											className=" text-dark font-semibold text-xs"
										>
											{t("input:category")}
										</label>
										<Field
											type="number"
											className="input w-2/3"
											id="categoryId"
											name="categoryId"
										/>
									</div>
									<div className="flex  justify-end">
										<button
											className="btn btn-primary w-fit my-6"
											type="submit"
										>
											{t("button:next")}
										</button>
									</div>
								</div>
							</Form>
						)}
					</Formik>
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
export default Create;

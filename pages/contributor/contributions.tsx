import React from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import type { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n/next-i18next.config";

const Contributions: NextPage = () => {
	const { t, i18n } = useTranslation(["home", "common", "button"]);
	return (
		<div className="bg-primary-tint ">
			<Layout hasFooter={false} hasHeader={false}>
				<div className="flex justify-center container max-auto px-8 py-12">
					<div className="relative w-full lg:w-2/3  border border-solid border-dark-tint rounded-md flex flex-col  bg-white">
						<div className="flex text-sm font-bold flex-row justify-around py-3 border-b border-solid text-secondary border-dark-tint">
							<div>{t("common:project")}</div>
							<div>{t("common:amount")}</div>
							<div>{t("common:date")}</div>
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
				["common", "button", "home"],
				nextI18NextConfig
			)),
		},
	};
};
export default Contributions;

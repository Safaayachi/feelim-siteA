import type { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../i18n/next-i18next.config.js";
import Link from "next/link.js";
import Image from "next/image.js";
import React from "react";
import Layout from "../components/Layout";

const Home: NextPage = () => {
	const { t, i18n } = useTranslation([
		"home",
		"common",
		"button",
		"auth",
		"input",
	]);
	return (
		<div>
			<Layout hasSideBar={false}>
				<section className="relative h-full w-full flex md:flex-row flex-col md:justify-between container sm:mx-auto md:px-10 px-6">
					<div className="md:py-72 py-32 w-1/2 flex flex-col gap-8">
						<div>
							<div className="md:text-5xl text-3xl font-bold text-secondary">
								{t("home:home-title1")}
							</div>
							<div className="md:text-5xl text-3xl font-bold text-secondary">
								{t("home:home-title2")}
							</div>
						</div>
						<div className="text-lg font-light ">
							{t("home:home-desc")}
						</div>
						<div className="btn btn-primary w-1/2">
							{t("button:get-started")}
						</div>
					</div>
					<div className="relative md:w-1/2">
						<Image
							alt={"logo"}
							src={"/images/home.svg"}
							fill
						></Image>
					</div>
				</section>
			</Layout>
		</div>
	);
};
export const getStaticProps: GetStaticProps = async (context) => {
	return {
		props: {
			...(await serverSideTranslations(
				context.locale as string,
				["home", "common", "button", "auth", "input"],
				nextI18NextConfig
			)),
		},
	};
};
export default Home;

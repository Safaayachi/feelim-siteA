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
			<Layout>
				<section className="relative h-full pt-20 flex flex-row">
					<div className="relative h-full w-full">
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

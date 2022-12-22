import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../../components/Layout";
import RewardCard from "../../../components/RewardCard";
import type { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../../i18n/next-i18next.config";

const Details: NextPage = () => {
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
					<div className="bg-white flex justify-around py-4 border-b border-solid border-dark-tint">
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
								1450 $
							</div>
						</div>
						<div className="flex flex-col gap-2">
							<div className="text-xs text-secondary-shade text-center">
							{t("common:budget")}
							</div>
							<div className="text-xs text-primary font-semibold text-center">
								5760 $
							</div>
						</div>
					</div>
					<div className="flex md:flex-row flex-col gap-6 ">
						<div className="flex flex-col gap-4 w-full lg:w-2/3 px-8 py-4">
							<div className="relative w-full   border border-solid border-dark-tint rounded-md flex flex-col  bg-white p-4">
								<h1 className="text-sm font-semibold text-secondary">
								{t("common:description")}
								</h1>
								<p className="text-sm font-light py-2">
									Lorem, ipsum dolor sit amet consectetur
									adipisicing elit. Mollitia eaque iusto
									nostrum assumenda similique doloremque rem,
									dolore esse autem repudiandae neque natus!
									Repellat perspiciatis adipisci odio
									delectus? Facere, fuga ullam.
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
						</div>
						<div className="flex flex-col gap-4 w-full lg:w-1/3 px-8 py-4">
							<RewardCard />
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
				["home", "common", "button"],
				nextI18NextConfig
			)),
		},
	};
};
export default Details;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../../components/Layout";

import type { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../../i18n/next-i18next.config";

const Details: NextPage = () => {
	const { t, i18n } = useTranslation(["home", "common", "button"]);
	return (
		<div className="bg-primary-tint ">
			<Layout hasFooter={false} hasHeader={false}>
				<div className="relative flex flex-col">
					<div className="relative h-52">
						<Image
							alt={"logo"}
							src={"/images/useCover.jpg"}
							fill
							objectFit="cover"
							className="brightness-75 opacity-90"
						></Image>
					</div>
					<div className="bg-white flex flex-row px-20 gap-10 justify-end py-4 border-b border-solid border-dark-tint">
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
								Projects
							</div>
							<div className="text-xs text-primary font-semibold text-center">
								57
							</div>
						</div>
					</div>
					<div className="absolute z-10 bottom-0 px-4 left-0 pb-4">
						<div className="relative h-32 w-32 drop-shadow-full">
							<Image
								alt={"logo"}
								src={"/images/avatar.jpg"}
								fill
								objectFit="cover"
								className="rounded-full"
							></Image>
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

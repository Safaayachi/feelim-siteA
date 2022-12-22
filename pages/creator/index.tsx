import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import type { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n/next-i18next.config.js";

const index: NextPage<{}> = () => {
	const { t } = useTranslation(["common", "button", "home", "input", "auth"]);
	return (
		<div>
			<Layout hasFooter={false} hasHeader={false} hasSideBar={true}>
				<div className="flex flex-col gap-32 ">
					<div className="flex flex-row gap-4">
						<button className="btn btn-primary w-32">
							Fashion
						</button>
						<button className="btn btn-secondary w-32">
							Fashion
						</button>
						<input type="text" className="" />
					</div>
					<div className="flex flex-row gap-4">
						<button className="btn btn-primary w-32">
							Fashion
						</button>
						<button className="btn btn-secondary w-32">
							Fashion
						</button>
						<input type="text" className="" />
					</div>
					<div className="flex flex-row gap-4">
						<button className="btn btn-primary w-32">
							Fashion
						</button>
						<button className="btn btn-secondary w-32">
							Fashion
						</button>
						<input type="text" className="" />
					</div>
					<div className="flex flex-row gap-4">
						<button className="btn btn-primary w-32">
							Fashion
						</button>
						<button className="btn btn-secondary w-32">
							Fashion
						</button>
						<input type="text" className="" />
					</div>
					<div className="flex flex-row gap-4">
						<button className="btn btn-primary w-32">
							Fashion
						</button>
						<button className="btn btn-secondary w-32">
							Fashion
						</button>
						<input type="text" className="" />
					</div>
					<div className="flex flex-row gap-4">
						<button className="btn btn-primary w-32">
							Fashion
						</button>
						<button className="btn btn-secondary w-32">
							Fashion
						</button>
						<input type="text" className="" />
					</div>
					<div className="flex flex-row gap-4">
						<button className="btn btn-primary w-32">
							Fashion
						</button>
						<button className="btn btn-secondary w-32">
							Fashion
						</button>
						<input type="text" className="" />
					</div>
					<div className="flex flex-row gap-4">
						<button className="btn btn-primary w-32">
							Fashion
						</button>
						<button className="btn btn-secondary w-32">
							Fashion
						</button>
						<input type="text" className="" />
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
				["common", "button", "home", "input", "auth"],
				nextI18NextConfig
			)),
		},
	};
};
export default index;

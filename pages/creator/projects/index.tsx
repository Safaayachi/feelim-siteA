import React from "react";
import Layout from "../../../components/Layout";
import Link from "next/link";
import type { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { getToken } from "next-auth/jwt";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../../i18n/next-i18next.config";
import {useUserProjects} from "../../../hooks/useUserProjects"

const ProjectsOverview:NextPage<{}> = ({token}) => {
	const { t, i18n } = useTranslation(["home", "common", "button"]);
	const userId = token.id;
	const projectsFetch = useUserProjects(userId);
	console.log(projectsFetch);
	return (
		<div className="bg-primary-tint ">
			<Layout hasFooter={false} hasHeader={false}>
				<div className="py-20 flex justify-center container max-auto px-4">
					<div className="relative w-full lg:w-2/3  lg:shadow-md p-8 border border-solid border-dark-tint rounded-md flex flex-col gap-4 bg-white">
						<div className="relative flex flex-row items-center w-full gap-6 border-b border-solid border-dark-tint py-2">
							<div className="flex w-4/5 flex-row justify-around text-xs">
								<div>{t("common:project")}</div>
								<div>{t("common:creation-date")}</div>
							</div>
							<div className="flex flex-row gap-4">
								<Link
									passHref
									href={"/creator/projects/details"}
								>
									<div className="btn btn-secondary-outline text-xs  px-6">
									{t("button:view")}
									</div>
								</Link>
								<div className="btn btn-primary-outline text-xs  px-4">
								{t("common:delete")}
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</div>
	);
};
export async function getServerSideProps(context) {
	const token = await getToken({ req: context.req });

	return {
		props: { token },
	};
}
export default ProjectsOverview;

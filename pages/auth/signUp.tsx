import React from "react";
import Layout from "../../components/Layout";
import type { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n/next-i18next.config.js";

const SignUp: NextPage<{}> = () => {
	const { t } = useTranslation(["common", "button", "home", "input", "auth"]);
	return (
		<div>
			<Layout>
				<section className=" flex justify-center py-32  min-h-screen w-full md:bg-primary-tint">
					<form className="relative w-full lg:w-1/3 md:w-1/2  md:shadow-md p-8  flex flex-col gap-4 bg-white rounded-md px-8">
						<div className="flex flex-col gap-4">
							<input
								type="text"
								className="input "
								placeholder="First Name"
							/>
							<input
								type="text"
								className="input"
								placeholder="Last Name"
							/>
                            <input
								type="text"
								className="input"
								placeholder="Email"
							/>
                            <input
								type="text"
								className="input"
								placeholder="Password"
							/>
                            <input
								type="password"
								className="input"
								placeholder="Confirm Password"
							/>
						</div>
						<button type="submit" className="btn btn-secondary ">
							Sign Up
						</button>
					</form>
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
				["common", "button", "home", "input", "auth"],
				nextI18NextConfig
			)),
		},
	};
};
export default SignUp;

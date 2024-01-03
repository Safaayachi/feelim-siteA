// Import statements
import { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../i18n/next-i18next.config.js";
import Link from "next/link.js";
import React from "react";
import Layout from "../components/Layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

// Home component
const Home: NextPage = () => {
	const { t, i18n } = useTranslation([
		"home",
		"common",
		"button",
		"auth",
		"input",
	]);

	const { data: session } = useSession();
	const router = useRouter();

	const handleGetStarted = () => {
		console.log("Session:", session);
		router.push(session ? "/movies" : "/auth/signUp");
	};

	return (
		<div className=" bg-black ">
			<Layout>
				<div className="relative flex flex-col  container sm:mx-auto px-4">
					<div className="py-32 px-24 text-white font-poppins text-sm w-3/4">
						<div className="font-extrabold text-transparent text-3xl md:text-8xl  bg-clip-text bg-gradient-to-r from-primary to-secondary-tint">
							Unlock the magic of
							movies
						</div>
						<h1 className="py-6 tracking-widest leading-relaxed italic inline-block text-xs">
							Dive into a world where
							your emotions shape your
							film experience.
							Navigate your cinematic
							dreams with personalized
							recommendations, save
							your favorites, and
							embrace the power of
							feeling every frame.
						</h1>

						<div className="flex justify-start py-2">
							<div className="py-12">
								<div className="grid gap-8 items-start justify-center">
									<div className="relative group">
										<div className="absolute -inset-0.5 bg-gradient-to-r from-secondary-tint to-primary rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
										<button
											onClick={
												handleGetStarted
											}
											className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600"
										>
											<span className="flex items-center space-x-5">
												<span className="pr-6 text-gray-100">
													Your
													movie
													adventure
													starts
													now!
												</span>
											</span>
											<span className="pl-6 text-primary group-hover:text-gray-100 transition duration-200">
												Get
												Started
												Now
												&rarr;
											</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</div>
	);
};

// Server-side props
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

// Export the component
export default Home;

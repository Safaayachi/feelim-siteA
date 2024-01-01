import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import type { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../i18n/next-i18next.config";

const About: NextPage<{ token: any }> = ({ token }) => {
	const { t, i18n } = useTranslation(["home", "common", "button"]);

	return (
		<>
			<div className=" bg-black min-h-screen">
				<Layout>
					<div className="relative flex flex-col  container sm:mx-auto px-4">
						<div className="py-32 px-24 text-white font-poppins text-sm ">
							<div className="grid grid-rows-1 md:grid-cols-2  w-full gap-16 p-6 ">
								<div className="relative border border-solid rounded-md md:h-52 h-56">
									<div className="bg-black absolute z-20 -inset-0.5 border-primary p-4 border border-solid rounded-md shadow-xl flex flex-col justify-start">
										<div className="font-extrabold  text-xs text-primary ">
											Navigate
											Your
											Cinematic
											Dreams
										</div>
										<p className="py-2  leading-loose  inline-block text-xxs  overflow-hidden">
											Embark
											on
											a
											journey
											through
											the
											vast
											landscape
											of
											cinema,
											where
											your
											emotions
											take
											center
											stage.
											Our
											intuitive
											navigation
											allows
											you
											to
											seamlessly
											explore
											a
											curated
											collection
											of
											films
											that
											align
											with
											your
											current
											state
											of
											mind.
											From
											joyous
											highs
											to
											contemplative
											lows,
											let
											the
											magic
											of
											movies
											guide
											your
											emotional
											voyage.
										</p>
									</div>

									<div className="absolute -inset-0.5 bg-gradient-to-r from-secondary-tint to-primary rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
								</div>
								<div className="relative border border-solid rounded-md md:h-52 h-56">
									<div className="bg-black absolute z-20 -inset-0.5 border-primary p-4 border border-solid rounded-md shadow-xl flex flex-col justify-start ">
										<div className="font-extrabold  text-xs text-primary ">
											Personalized
											Recommendations
										</div>
										<p className="py-2  leading-loose  inline-block text-xxs overflow-hidden">
											Say
											goodbye
											to
											generic
											movie
											suggestions!
											Feelim
											understands
											that
											each
											viewer
											is
											unique,
											and
											so
											are
											their
											emotions.
											Our
											advanced
											recommendation
											system
											analyzes
											your
											viewing
											history,
											preferences,
											and
											current
											mood
											to
											offer
											personalized
											suggestions
											that
											resonate
											with
											you
											on
											a
											deeper
											level.
											Rediscover
											the
											joy
											of
											watching
											films
											that
											truly
											speak
											to
											your
											heart.
										</p>
									</div>

									<div className="absolute -inset-0.5 bg-gradient-to-r from-secondary-tint to-primary rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
								</div>

								<div className="relative  rounded-md md:h-52 h-56">
									<div className="bg-black absolute z-20 -inset-0.5 border-primary p-4 border border-solid rounded-md shadow-xl flex flex-col justify-start">
										<div className="font-extrabold  text-xs text-primary ">
											Save
											Your
											Favorites
										</div>
										<p className="py-2  leading-loose  inline-block text-xxs overflow-hidden">
											Create
											your
											personal
											haven
											of
											cinematic
											treasures
											by
											saving
											your
											favorite
											movies.
											Whether
											it's
											a
											feel-good
											classic,
											an
											adrenaline-pumping
											thriller,
											or
											a
											tear-jerking
											drama,
											curate
											your
											own
											collection
											of
											films
											that
											reflect
											the
											essence
											of
											your
											emotions.
											Your
											favorites,
											your
											way.
										</p>
									</div>

									<div className="absolute -inset-0.5 bg-gradient-to-r from-secondary-tint to-primary rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
								</div>
								<div className="relative border border-solid rounded-md md:h-52 h-56">
									<div className="bg-black absolute z-20 -inset-0.5 border-primary p-4 border border-solid rounded-md shadow-xl flex flex-col justify-start">
										<div className="font-extrabold  text-xs text-primary ">
											Embrace
											the
											Power
											of
											Feeling
											Every
											Frame
										</div>
										<p className="py-2  leading-loose  inline-block text-xxs overflow-hidden">
											Immerse
											yourself
											in
											the
											art
											of
											storytelling
											as
											you
											embrace
											the
											power
											of
											feeling
											every
											frame.
											Feelim
											celebrates
											the
											emotional
											connection
											between
											viewers
											and
											movies,
											making
											each
											viewing
											experience
											a
											memorable
											and
											soul-stirring
											adventure
										</p>
									</div>

									<div className="absolute -inset-0.5 bg-gradient-to-r from-secondary-tint to-primary rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
								</div>
							</div>
						</div>
					</div>
				</Layout>
			</div>
		</>
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
export default About;

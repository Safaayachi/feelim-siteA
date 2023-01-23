import React from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import type { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n/next-i18next.config.js";
import { SubmitHandler, useForm } from "react-hook-form";
type Inputs = {
	email: String;
	password: String;
	firstName: String;
	lastName: String;
	avatar: String;
};

const SignUp: NextPage<{}> = () => {
	const { t } = useTranslation(["common", "button", "home", "input", "auth"]);
	const router = useRouter();
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
	} = useForm<Inputs>({
		reValidateMode: "onChange",
		mode: "all",
	});
	const onSubmit: SubmitHandler<Inputs> = async (formData) => {
		try {
			const res = await fetch("/api/users", {
				body: JSON.stringify(formData),
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
			});
			const data = await res.json();
			if (data) {
				router.push("/auth/signIn");
			}
		} catch (err) {}
	};
	return (
		<div>
			<Layout>
				<section className=" flex justify-center py-32  min-h-screen w-full md:bg-primary-tint">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="relative w-full lg:w-1/3 md:w-1/2  md:shadow-md p-8  flex flex-col gap-4 bg-white rounded-md px-8"
					>
						<div className="flex flex-col gap-4">
							<input
								type="text"
								className="input "
								placeholder="First Name"
								{...(register("firstName"),
								{
									required: "this is error message",
								})}
							/>
							{errors.firstName && (
								<div className="text-danger text-xxs">
									wrong
								</div>
							)}
							<input
								type="text"
								className="input"
								placeholder="Last Name"
								{...register("lastName")}
							/>
							{errors.lastName && (
								<div className="text-danger text-xxs">
									wrong
								</div>
							)}
							<input
								type="text"
								className="input"
								placeholder="Email"
								{...register("email")}
							/>
							{errors.email && (
								<div className="text-danger text-xxs">
									wrong
								</div>
							)}
							<input
								type="password"
								className="input"
								placeholder="Password"
								{...register("password")}
							/>
							{errors.password && (
								<div className="text-danger text-xxs">
									wrong
								</div>
							)}
							<input
								type="text"
								className="input"
								placeholder="Avatar"
								{...register("avatar")}
							/>
							{errors.password && (
								<div className="text-danger text-xxs">
									wrong
								</div>
							)}
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

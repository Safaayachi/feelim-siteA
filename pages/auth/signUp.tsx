import React from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../../i18n/next-i18next.config.js";
import { SubmitHandler, useForm } from "react-hook-form";
import bcrypt from "bcryptjs";

type Inputs = {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	avatar: string;
};

const SignUp: NextPage<{}> = () => {
	const { t } = useTranslation([
		"common",
		"button",
		"home",
		"input",
		"auth",
	]);
	const router = useRouter();
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<Inputs>({
		reValidateMode: "onChange",
		mode: "all",
	});

	const onSubmit: SubmitHandler<Inputs> = async (formData) => {
		try {
			// Validate input fields
			const { email, password, firstName, lastName } =
				formData;

			if (!email || !password || !firstName || !lastName) {
				console.error("Missing required fields");
				return;
			}

			const salt = await bcrypt.genSalt(10);
			const hashedPassword = await bcrypt.hash(
				password,
				salt
			);

			const res = await fetch("/api/user", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					firstName,
					lastName,
					email,
					password: hashedPassword,
					avatar: formData.avatar || "", // Use provided avatar or default to an empty string
					isAdmin: false, // Provide a default value
				}),
			});

			const data = await res.json();

			if (res.ok) {
				console.log("User successfully created:", data);
				router.push("/");
			} else {
				console.error("Failed to create user:", data);
			}
		} catch (err) {
			console.error("Error submitting form:", err);
		}
	};

	return (
		<div>
			<Layout>
				<section className="flex justify-center py-32 min-h-screen bg-black w-full">
					<form
						onSubmit={handleSubmit(
							onSubmit
						)}
						className="relative w-full lg:w-1/3 md:w-1/2 md:shadow-md p-8 flex flex-col gap-4 bg-dark opacity-90 rounded-md px-8"
					>
						<div className="flex flex-col gap-4">
							<input
								type="text"
								className="input input bg-primary-tint focus:outline-primary outline-none"
								placeholder="First Name"
								{...register(
									"firstName",
									{
										required: "This field is required",
									}
								)}
							/>
							{errors.firstName && (
								<div className="text-danger text-xxs">
									{
										errors
											.firstName
											.message
									}
								</div>
							)}
							<input
								type="text"
								className="input bg-primary-tint focus:outline-primary outline-none"
								placeholder="Last Name"
								{...register(
									"lastName"
								)}
							/>
							{errors.lastName && (
								<div className="text-danger text-xxs">
									{
										errors
											.lastName
											.message
									}
								</div>
							)}
							<input
								type="text"
								className="input input bg-primary-tint focus:outline-primary outline-none"
								placeholder="Email"
								{...register(
									"email",
									{
										required: "This field is required",
									}
								)}
							/>
							{errors.email && (
								<div className="text-danger text-xxs">
									{
										errors
											.email
											.message
									}
								</div>
							)}
							<input
								type="password"
								className="input input bg-primary-tint focus:outline-primary outline-none"
								placeholder="Password"
								{...register(
									"password",
									{
										required: "This field is required",
									}
								)}
							/>
							{errors.password && (
								<div className="text-danger text-xxs">
									{
										errors
											.password
											.message
									}
								</div>
							)}
							<input
								type="text"
								className="input hidden"
								placeholder="Avatar"
								{...register(
									"avatar"
								)}
							/>
							{errors.avatar && (
								<div className="text-danger text-xxs">
									{
										errors
											.avatar
											.message
									}
								</div>
							)}
						</div>
						<button
							type="submit"
							className="btn btn-primary"
						>
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

import React from "react";
import { getCsrfToken } from "next-auth/react";
import {
	useSession,
	getProviders,
	signOut,
	signIn,
	ClientSafeProvider,
	LiteralUnion,
} from "next-auth/react";

import Layout from "../../components/Layout";
import Image from "next/image";
import { NextPage } from "next";

const SignIn: NextPage = ({ csrfToken, providers }) => {
	const { data: session, status } = useSession();

	if (status === "loading") {
		return <h1>Loading...</h1>;
	}
	if (session) {
		return (
			<>
				signed in as {session?.user?.email}
				<button onClick={() => signOut()}>signOut</button>
			</>
		);
	}
	return (
		<div>
			<Layout>
				<section className=" flex justify-center py-32  min-h-screen w-full md:bg-primary-tint ">
					<div className="relative w-full md:w-1/3  md:shadow-md p-8 gap-6 flex flex-col  bg-white rounded-md">
						<form
							className="flex flex-col gap-4"
							method="post"
							action="/api/auth/callback/credentials"
						>
							<input
								name="csrfToken"
								type="hidden"
								defaultValue={csrfToken}
							/>
							<input
								type="text"
								className="input py-3"
								placeholder="Email"
							/>
							<input
								type="password"
								className="input py-3 "
								placeholder="Password"
							/>
							<button
								type="submit"
								className="btn btn-secondary py-3 "
							>
								Login
							</button>
						</form>

						<div className="flex flex-row justify-around items-center">
							<div className="h-1 w-1/3 border-b border-solid border-primary-tint"></div>
							<div className="text-secondary-shade">or</div>
							<div className="h-1  w-1/3 border-b  border-solid border-primary-tint"></div>
						</div>

						<form
							className="flex flex-col gap-4"
							method="post"
							action="/api/auth/signin/email"
						>
							<input
								name="csrfToken"
								type="hidden"
								defaultValue={csrfToken}
							/>
							<input
								type="text"
								className="input py-3"
								placeholder="Email"
							/>

							<button
								type="submit"
								className="btn btn-secondary-outline py-3 "
							>
								Login with email
							</button>
						</form>

						{Object.values(providers).map((provider) => (
							<div
								className="btn btn-primary-outline flex flex-row gap-4 cursor-pointer py-3"
								key={provider.name}
								onClick={() => signIn(provider.id)}
							>
								<div className={`relative`}>
									<Image
										alt={"logo"}
										src={"/images/google.svg"}
										width={20}
										height={20}
									></Image>
								</div>
								Login with {provider.name}
							</div>
						))}
					</div>
				</section>
			</Layout>
		</div>
	);
};
export async function getServerSideProps(context) {
	const providers = await getProviders();
	const csrfToken = await getCsrfToken(context);
	return {
		props: { providers, csrfToken },
	};
}
export default SignIn;

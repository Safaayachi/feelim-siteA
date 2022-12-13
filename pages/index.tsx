import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { prisma } from "../lib/prisma";
import { useSession, signIn, signOut } from "next-auth/react";

const Home = () => {
	const { data: session, status } = useSession();
	if (status === "loading") {
		return <h1>Loading...</h1>;
	}
	if (session) {
		return (
			<>
				Signed as {session.user?.email}
				<button type="button" onClick={() => signOut()}>
					signOut
				</button>
			</>
		);
	}
	return (
		<>
			Not signed in{" "}
			<button type="button" onClick={() => signIn()}>signIn</button>
		</>
	);
};

export default Home;

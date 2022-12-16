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
			<button type="button" onClick={() => signIn()}>
				signIn
			</button>
			<p className="text-3xl font-bold underline text-primary">hello</p>
			<p className="text-3xl font-bold underline text-primary-tint">
				hello
			</p>
			<p className="text-3xl font-bold underline text-primary-shade">
				hello
			</p>
			<p className="text-3xl font-bold underline text-secondary">hello</p>
			<p className="text-3xl font-bold underline text-secondary-shade">
				hello
			</p>
			<p className="text-3xl font-bold underline text-dark">hello</p>
			<p className="text-3xl font-bold underline text-dark-tint">hello</p>
			<p className="text-3xl font-bold underline text-danger">hello</p>
		</>
	);
};

export default Home;

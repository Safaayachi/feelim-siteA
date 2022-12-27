import { useSession, signIn, signOut } from "next-auth/react";

const LogIn = () => {
	const { data: session, status } = useSession();
	if (status === "loading") {
		return <h1>Loading...</h1>;
	}
	console.log(session)
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
			
		</>
	);
};

export default LogIn;

import { GetServerSideProps } from "next";
import { getToken } from "next-auth/jwt";
import { useSession, signIn, signOut } from "next-auth/react";
const LogIn = ({ token }) => {
	const { data: session, status } = useSession();
	console.log(token);
	if (status === "loading") {
		return <h1>Loading...</h1>;
	}
	console.log(session);
	if (session) {
		return (
			<>
				id:  {token.id}
				firstName: {token.firstName}
				lastName: {token.lastName}
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
export async function getServerSideProps(context) {
	const token = await getToken({ req: context.req });

	return {
		props: { token },
	};
}
export default LogIn;

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Fragment } from "react";
import { useTranslation } from "next-i18next";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
	const { t } = useTranslation(["home", "auth"]);
	const [isScrolled, setIsScrolled] = useState(false);
	const { data: session } = useSession();
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			setIsScrolled(scrollPosition > 0);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		// Fetch user data based on the session email when session changes
		const fetchUserData = async () => {
			if (session?.user?.email) {
				try {
					const response = await fetch(
						`/api/user?email=${session.user.email}`
					);
					const userData = await response.json();
					setUserData(userData);
				} catch (error) {
					console.error(
						"Error fetching user data:",
						error
					);
				}
			}
		};

		fetchUserData();
	}, [session]);

	return (
		<Fragment>
			<header
				className={`h-16 fixed z-30 font-poppins w-full ${
					isScrolled
						? "border border-b border-solid bg-black"
						: "bg-transparent"
				} transition-all duration-0`}
			>
				<nav className="flex flex-row justify-between h-full items-center container sm:mx-auto px-6">
					<Link passHref href="/">
						<div className="text-white font-dancingscript text-2xl">
							Feelim
						</div>
					</Link>
					<div className="flex flex-row gap-6 text-white items-center">
						<Link passHref href="/Movies">
							<div className="cursor-pointer w-full font-semibold text-xs">
								MyLists
							</div>
						</Link>
						<Link passHref href="/About">
							<div className="cursor-pointer w-full font-semibold text-xs">
								About
							</div>
						</Link>
						{session ? (
							// If user is signed in, show user's name and sign-out button
							<div className="flex items-center">
								<div
									className="cursor-pointer w-full font-semibold text-xs"
									onClick={() =>
										signOut()
									}
								>
									Sign Out
								</div>
							</div>
						) : (
							// If user is not signed in, show sign-in button
							<div
								className="cursor-pointer w-full font-semibold text-xs"
								onClick={() =>
									signIn()
								}
							>
								Sign In
							</div>
						)}
					</div>
				</nav>
			</header>
		</Fragment>
	);
};

export default Header;

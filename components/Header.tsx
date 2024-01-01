import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { useTranslation } from "next-i18next";
import Language from "./Lang";

const Header = () => {
	const { t } = useTranslation(["home", "auth"]);
	const [isScrolled, setIsScrolled] = useState(false);

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

						<Link passHref href="/SignIn">
							<div className=" items-center justify-center hidden">
								<div className="h-8 w-full rounded-full bg-gradient-to-r from-primary to-secondary-tint p-0.5">
									<div className="flex h-full w-full items-center justify-center rounded-full bg-black back p-2 px-4">
										<h1 className="text-xxs font-black text-white">
											Sign
											In
										</h1>
									</div>
								</div>
							</div>
						</Link>
					</div>
				</nav>
			</header>
		</Fragment>
	);
};

export default Header;

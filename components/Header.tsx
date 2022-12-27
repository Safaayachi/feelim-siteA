import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { useTranslation } from "next-i18next";
import Language from "./Lang";

const Header = () => {
	const { t } = useTranslation(["home", "auth"]);
	return (
		<Fragment>
			<header className="flex items-center z-20 w-full bg-white fixed shadow-sm">
				<nav className="relative flex  items-center container sm:mx-auto  py-3 md:px-10 px-6 justify-between ">
					<Link passHref href={"/"}>
						<div className={`relative cursor-pointer`}>
							<Image
								alt={"logo"}
								src={"/images/logoo.svg"}
								width={50}
								height={50}
							></Image>
						</div>
					</Link>
					<div className="hidden md:flex flex-row gap-10 items-center text-center text-secondary ">
						<Link passHref href={"/"}>
							<div className="cursor-pointer w-full font-bold text-xs py-5">
								{t("home:about-us")}
							</div>
						</Link>
						<Link passHref href={"/"}>
							<div className="cursor-pointer w-full font-bold text-xs py-5">
								{t("home:services")}
							</div>
						</Link>
						<Language />
						<Link passHref href={"/auth/signIn"}>
							<div className="cursor-pointer w-full font-bold text-xs  btn btn-primary-outline">
								{t("auth:login")}
							</div>
						</Link>
					</div>
					<div className="flex md:hidden flex-row gap-4 items-center text-center text-secondary">
						<Link passHref href={"/auth/signIn"}>
							<div className="cursor-pointer w-fit font-bold text-xs  btn btn-primary-outline">
								{t("auth:login")}
							</div>
						</Link>
						<Language />
					</div>
				</nav>
			</header>
		</Fragment>
	);
};

export default Header;

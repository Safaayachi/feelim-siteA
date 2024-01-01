import React, { Fragment } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
const Footer = () => {
	const { t } = useTranslation(["home"]);
	return (
		<footer className="w-full bg-black text-white font-poppins border-t ">
			<div className="w-full container sm:mx-auto  md:px-10 px-6 py-16 lg:pt-10 flex flex-col items-center border-solid border-primary-shade border-opacity-40">
				<div className="flex flex-row  items-center py-4 space-x-4 ">
					<div className="font-poppins text-xs text-primary-tint cursor-pointer hover:text-primary ">
						About
					</div>
					<div className="font-poppins text-xs text-primary-tint cursor-pointer hover:text-primary">
						Privacy Policy
					</div>
					<div className="font-poppins text-xs text-primary-tint cursor-pointer hover:text-primary">
						Licensing
					</div>
					<div className="font-poppins text-xs  text-primary-tint cursor-pointer hover:text-primary">
						Contact
					</div>
				</div>
				<hr className="my-2 border-primary-tint " />
				<div className="text-xxs text-primary-tint tracking-widest  font-poppins">
					Feelim <span>&copy;</span> 2023 All
					rights reserved
				</div>
			</div>
		</footer>
	);
};

export default Footer;

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Language from "./Lang";

const SideBar = () => {
	const router = useRouter();
	const { t, i18n } = useTranslation(["common", "home"]);
	const [modeMenuIsOpen, setModeMenuIsOpen] = useState(false);
	const [settingMenuIsOpen, setSettingMenuIsOpen] = useState(false);

	return (
		<div className="px-3 flex flex-col h-full relative">
			<Link passHref href={"/"}>
				<div className={`relative cursor-pointer py-6 `}>
					<Image
						alt={"logo"}
						src={"/images/logoo.svg"}
						width={40}
						height={40}
					></Image>
				</div>
			</Link>
			{router.pathname.startsWith("/creator") ? (
				<>
					<div className="flex flex-col h-3/6">
						<ul className="flex flex-col gap-2">
							<Link passHref href={"/creator/projects/"}>
								<li className="py-3 text-xs  font-medium bg-primary-tint rounded-lg px-2 ">
									<div className="flex flex-row gap-2 items-center">
										<i className="icon-folder"></i>
										<div>Projects</div>
									</div>
								</li>
							</Link>
							<Link passHref href={"/chats"}>
								<li className="py-3 text-xs text-secondary-shade rounded-lg bg-transparent font-medium px-2">
									<div>
										<div className="flex flex-row gap-2 items-center">
											<i className="icon-box"></i>
											<div>Chats</div>
										</div>
									</div>
								</li>
							</Link>

							
							<Link passHref href={"/creator/createProject"}>
								<li className="py-3 text-xs text-secondary-shade rounded-lg bg-transparent font-medium px-2">
									<div className="flex flex-row gap-2 items-center">
										<i className="icon-plus"></i>
										<div>Create</div>
									</div>
								</li>
							</Link>
						</ul>
					</div>
				</>
			) : (
				<>
					<div className="flex flex-col h-3/6">
						<ul className="flex flex-col gap-2">
							<Link passHref href={"/contributor/projects"}>
								<li className="py-3 text-xs  font-medium bg-primary-tint rounded-lg px-2 ">
									<div className="flex flex-row gap-2 items-center">
										<i className="icon-home"></i>
										<div>Home</div>
									</div>
								</li>
							</Link>
							<Link passHref href={"/chats"}>
								<li className="py-3 text-xs text-secondary-shade rounded-lg bg-transparent font-medium px-2">
									<div>
										<div className="flex flex-row gap-2 items-center">
											<i className="icon-box"></i>
											<div>Chats</div>
										</div>
									</div>
								</li>
							</Link>

							<Link passHref href={"/contributor/contributions"}>
								<li className="py-3 text-xs text-secondary-shade rounded-lg bg-transparent font-medium px-2">
									<div className="flex flex-row gap-2 items-center">
										<i className="icon-users"></i>
										<div>Contributions</div>
									</div>
								</li>
							</Link>
						</ul>
					</div>
				</>
			)}

			<div className="relative flex h-3/6 flex-row justify-between  py-4">
				<div className="flex h-fit w-full flex-row justify-between items-center self-end py-4">
					<button
						className="flex flex-row gap-2 items-center py-2 px-4 rounded-full hover:bg-primary-tint "
						disabled={settingMenuIsOpen}
						onClick={() => setModeMenuIsOpen(!modeMenuIsOpen)}
					>
						<div className="relative h-8 w-8 ">
							<Image
								alt={"logo"}
								src={"/images/cover.jpg"}
								fill
								objectFit="cover"
								className="brightness-75 opacity-90 rounded-full"
							></Image>
						</div>
						<div className="flex flex-col">
							<div className="font-semibold text-xs">
								Safa AYACHI
							</div>
							{router.pathname === "/contributor" ? (
								<div className="font-light text-xs text-start">
									Contributor
								</div>
							) : (
								<div className="font-light text-nxs text-start">
									Creator
								</div>
							)}
						</div>
					</button>

					<button
						className=" py-2 "
						disabled={modeMenuIsOpen}
						onClick={() => {
							setSettingMenuIsOpen(!settingMenuIsOpen);
						}}
					>
						<i className="icon-cog font-medium text-primary text-md"></i>
					</button>
				</div>
				{settingMenuIsOpen ? (
					<div className="absolute pt-28  w-full z-30">
						<div className="flex flex-col bg-white rounded-md drop-shadow-xl w-full py-2 border border-solid border-primary-tint">
							<div className="text-xs py-3 px-4 hover:bg-primary-tint cursor-pointer">
								<Language />
							</div>
							<Link passHref href={"/profile"}>
								<div
									className="text-nxs py-2 px-4 hover:bg-primary-tint cursor-pointer font-medium text-secondary "
									onClick={() => {
										setSettingMenuIsOpen(false);
									}}
								>
									Profile
								</div>
							</Link>
							<Link passHref href={"/"}>
								<div
									className=" py-2 px-4 text-nxs hover:bg-primary-tint border-t border-solid border-primary-tint cursor-pointer font-medium text-secondary"
									onClick={() => {
										setSettingMenuIsOpen(false);
									}}
								>
									Sign Out
								</div>
							</Link>
						</div>
					</div>
				) : (
					<></>
				)}
				{modeMenuIsOpen ? (
					<div className="absolute pt-28  w-full z-30">
						<div className="flex flex-col bg-white rounded-md drop-shadow-xl  w-full py-2 border border-solid border-primary-tint">
							<Link href={"/contributor"}>
								<div
									className="flex flex-row gap-2 items-center py-2 px-4 hover:bg-primary-tint cursor-pointer "
									onClick={() => {
										setModeMenuIsOpen(false);
									}}
								>
									<div className="relative h-8 w-8 ">
										<Image
											alt={"logo"}
											src={"/images/cover.jpg"}
											fill
											objectFit="cover"
											className="brightness-75 opacity-90 rounded-full"
										></Image>
									</div>
									<div className="flex flex-col ">
										<div className="font-semibold text-xs">
											Safa AYACHI
										</div>
										<div className="font-light text-nxs text-start">
											Contributor
										</div>
									</div>
								</div>
							</Link>
							<Link href={"/creator"}>
								<div
									className="flex flex-row gap-2 items-center py-2 px-4  hover:bg-primary-tint cursor-pointer "
									onClick={() => {
										setModeMenuIsOpen(false);
									}}
								>
									<div className="relative h-8 w-8 ">
										<Image
											alt={"logo"}
											src={"/images/cover.jpg"}
											fill
											objectFit="cover"
											className="brightness-75 opacity-90 rounded-full"
										></Image>
									</div>
									<div className="flex flex-col">
										<div className="font-semibold text-xs">
											Safa AYACHI
										</div>
										<div className="font-light text-nxs text-start">
											creator
										</div>
									</div>
								</div>
							</Link>
						</div>
					</div>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default SideBar;

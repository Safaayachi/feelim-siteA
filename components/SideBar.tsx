import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Popover } from "@headlessui/react";
import { useRouter } from "next/router";

const SideBar = () => {
	const router = useRouter();

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

							<Link passHref href={"/"}>
								<li className="py-3 text-xs text-secondary-shade rounded-lg bg-transparent font-medium px-2">
									<div className="flex flex-row gap-2 items-center">
										<i className="icon-chart"></i>
										<div>Analytics</div>
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
			) :  (
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
			) }

			<div className="flex h-3/6 flex-row justify-between items-end py-4">
				<Popover className="relative">
					<Popover.Button>
						<div className="flex flex-row gap-2 items-center py-2 px-4 rounded-full bg-primary-tint cursor-pointer">
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
									username
								</div>
								<div className="font-light text-xs text-start">
									Creator
								</div>
							</div>
						</div>
					</Popover.Button>

					<Popover.Panel className="absolute z-10 top-0 p-4 bg-primary ">
						<div className="  h-full flex flex-col gap-4">
							<Link passHref href={"/creator"}>
								<div className="flex flex-row gap-2 items-center py-2 px-4 rounded-full bg-primary-tint cursor-pointer">
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
											username
										</div>
										<div className="font-light text-xs">
											Creator
										</div>
									</div>
								</div>
							</Link>
							<Link passHref href={"/contributor"}>
								<div className="flex flex-row gap-2 items-center py-2 px-4 rounded-full bg-primary-tint cursor-pointer">
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
											username
										</div>
										<div className="font-light text-xs ">
											Contributor
										</div>
									</div>
								</div>
							</Link>
						</div>
					</Popover.Panel>
				</Popover>
				<div className="cursor-pointer py-2">
					<i className="icon-cog font-medium text-secondary text-md"></i>
				</div>
			</div>
		</div>
	);
};

export default SideBar;

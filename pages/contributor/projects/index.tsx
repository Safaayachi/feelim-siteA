import React, { Fragment } from "react";
import Layout from "../../../components/Layout";
import ProjectCard from "../../../components/ProjectCard";
import SearchBar from "../../../components/SearchBar";
import { Tab } from "@headlessui/react";
import Link from "next/link";

const home = () => {
	return (
		<div>
			<Layout hasFooter={false} hasHeader={false} hasSideBar={true}>
				<div className="container max-auto px-10 py-6 flex flex-col">
					<div className="md:w-1/3 xl:w-1/4 self-end">
						<SearchBar />
					</div>
					<div className="flex flex-col gap-2 py-16">
						<div className="text-4xl font-semibold ">
							We help people make their
						</div>
						<div className="text-4xl font-semibold">
							{" "}
							dream come true.
						</div>
						<div className="text-xs text-secondary-shade">
							$47.345.6476 generated around the world.
						</div>
					</div>
					<Tab.Group>
						<Tab.List
							className={
								"flex flex-row overflow-x-auto gap-4 py-2"
							}
						>
							<Tab as={Fragment}>
								{({ selected }) => (
									<button
										className={
											selected
												? "btn btn-primary w-fit"
												: "btn btn-primary-outline w-fit"
										}
									>
										Design
									</button>
								)}
							</Tab>
							<Tab as={Fragment}>
								{({ selected }) => (
									<button
										className={
											selected
												? "btn btn-primary w-fit"
												: "btn btn-primary-outline w-fit"
										}
									>
										Gaming
									</button>
								)}
							</Tab>
							<Tab as={Fragment}>
								{({ selected }) => (
									<button
										className={
											selected
												? "btn btn-primary w-fit"
												: "btn btn-primary-outline w-fit"
										}
									>
										Art
									</button>
								)}
							</Tab>
							<Tab as={Fragment}>
								{({ selected }) => (
									<button
										className={
											selected
												? "btn btn-primary w-fit"
												: "btn btn-primary-outline w-fit"
										}
									>
										Technologie
									</button>
								)}
							</Tab>
						</Tab.List>
						<Tab.Panels className={"py-8"}>
							<Tab.Panel
								className={
									'className=" grid lg:grid-cols-4 md:grid-cols-3  gap-8 "'
								}
							>
								<Link
									passHref
									href={"/contributor/projects/details"}
								>
									<ProjectCard percentage={60} />
								</Link>
								<ProjectCard percentage={60} />
								<ProjectCard percentage={60} />
								<ProjectCard percentage={60} />
								<ProjectCard percentage={60} />
								<ProjectCard percentage={60} />
								<ProjectCard percentage={60} />
								<ProjectCard percentage={60} />
							</Tab.Panel>
							<Tab.Panel
								className={
									'className=" grid lg:grid-cols-4 md:grid-cols-3  gap-8 "'
								}
							>
								<ProjectCard percentage={20} />
								<ProjectCard percentage={10} />
								<ProjectCard percentage={45} />
								<ProjectCard percentage={90} />
							</Tab.Panel>
							<Tab.Panel
								className={
									'className=" grid lg:grid-cols-4 md:grid-cols-3  gap-8 "'
								}
							>
								<ProjectCard percentage={60} />
								<ProjectCard percentage={60} />
								<ProjectCard percentage={60} />
								<ProjectCard percentage={60} />
								<ProjectCard percentage={60} />
								<ProjectCard percentage={60} />
								<ProjectCard percentage={60} />
								<ProjectCard percentage={60} />
							</Tab.Panel>
						</Tab.Panels>
						<Tab.Panel
							className={
								'className=" grid lg:grid-cols-4 md:grid-cols-3  gap-8 "'
							}
						>
							<div className="text-sm text-secondary-shade">
								No project created yet !{" "}
							</div>
						</Tab.Panel>
					</Tab.Group>
				</div>
			</Layout>
		</div>
	);
};

export default home;

import React from "react";
import Link from "next/link";
import Layout from "../../../components/Layout";
import Image from "next/image";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import ProgressBar from "../../../components/ProgressBar";

const Details = () => {
	return (
		<div className="bg-primary-tint ">
			<Layout hasFooter={false} hasHeader={false}>
				<div className=" flex flex-col">
					<div className="relative h-52">
						<Image
							alt={"logo"}
							src={"/images/cover.jpg"}
							fill
							objectFit="cover"
							className="brightness-75 opacity-90"
						></Image>
					</div>
					<div className="py-6 flex flex-row justify-between items-center px-4">
						<div className="text-secondary font-semibold text-lg">
							Project Title
						</div>
						<div className="flex flex-row gap-4 text-lg text-secondary">
							<i className="icon-eye p-2 bg-white rounded-md border border-solid border-dark-tint cursor-pointer"></i>
							<i className="icon-write p-2 bg-white rounded-md border border-solid border-dark-tint cursor-pointer"></i>
						</div>
					</div>
					<Tab.Group>
						<Tab.List
							className={
								"relative border-b border-dark-tint font-semibold text-xs border-solid flex  justify-center h-10 gap-6"
							}
						>
							<Tab as={Fragment}>
								{({ selected }) => (
									<button
										className={
											selected
												? " text-primary border-b border-solid border-primary"
												: " text-secondary-shade border-b border-solid border-transparent"
										}
									>
										Contributions
									</button>
								)}
							</Tab>
							<Tab as={Fragment}>
								{({ selected }) => (
									<button
										className={
											selected
												? " text-primary border-b border-solid border-primary"
												: " text-secondary-shade border-b border-solid border-transparent"
										}
									>
										Contributors
									</button>
								)}
							</Tab>
							<Tab as={Fragment}>
								{({ selected }) => (
									<button
										className={
											selected
												? " text-primary border-b border-solid border-primary"
												: " text-secondary-shade border-b border-solid border-transparent"
										}
									>
										Amount Raised
									</button>
								)}
							</Tab>
							<Tab as={Fragment}>
								{({ selected }) => (
									<button
										className={
											selected
												? " text-primary border-b border-solid border-primary"
												: " text-secondary-shade border-b border-solid border-transparent"
										}
									>
										Analytics
									</button>
								)}
							</Tab>
						</Tab.List>
						<Tab.Panels className={"py-12"}>
							<Tab.Panel>
								<div className="flex justify-center container max-auto px-8">
									<div className="relative w-full lg:w-2/3  border border-solid border-dark-tint rounded-md flex flex-col  bg-white">
										<div className="flex text-xs font-medium flex-row justify-around py-4 border-b border-solid border-dark-tint">
											<div>Contributor</div>
											<div>Amount</div>
											<div>Date</div>
										</div>
										<div className="flex text-xs font-medium flex-row justify-around py-4 border-b border-solid border-dark-tint">
											<div>Contributor</div>
											<div>Amount</div>
											<div>Date</div>
										</div>
										<div className="flex text-xs font-medium flex-row justify-around py-4 border-b border-solid border-dark-tint">
											<div>Contributor</div>
											<div>Amount</div>
											<div>Date</div>
										</div>
										<div className="flex text-xs font-medium flex-row justify-around py-4 border-b border-solid border-dark-tint">
											<div>Contributor</div>
											<div>Amount</div>
											<div>Date</div>
										</div>
										<div className="flex text-xs font-medium flex-row justify-around py-4 border-b border-solid border-dark-tint">
											<div>Contributor</div>
											<div>Amount</div>
											<div>Date</div>
										</div>
										<div className="flex text-xs font-medium flex-row justify-around py-4 border-b border-solid border-dark-tint">
											<div>Contributor</div>
											<div>Amount</div>
											<div>Date</div>
										</div>
										<div className="flex text-xs font-medium flex-row justify-around py-4 border-b border-solid border-dark-tint">
											<div>Contributor</div>
											<div>Amount</div>
											<div>Date</div>
										</div>
										<div className="flex text-xs font-medium flex-row justify-around py-4 border-b border-solid border-dark-tint">
											<div>Contributor</div>
											<div>Amount</div>
											<div>Date</div>
										</div>
										<div className="flex text-xs font-medium flex-row justify-around py-4 border-b border-solid border-dark-tint">
											<div>Contributor</div>
											<div>Amount</div>
											<div>Date</div>
										</div>
										<div className="flex text-xs font-medium flex-row justify-around py-4 border-b border-solid border-dark-tint">
											<div>Contributor</div>
											<div>Amount</div>
											<div>Date</div>
										</div>
										<div className="flex text-xs font-medium flex-row justify-around py-4 border-b border-solid border-dark-tint">
											<div>Contributor</div>
											<div>Amount</div>
											<div>Date</div>
										</div>
										<div className="flex text-xs font-medium flex-row justify-around py-4 border-b border-solid border-dark-tint">
											<div>Contributor</div>
											<div>Amount</div>
											<div>Date</div>
										</div>
										<div className="flex text-xs font-medium flex-row justify-around py-4 border-b border-solid border-dark-tint">
											<div>Contributor</div>
											<div>Amount</div>
											<div>Date</div>
										</div>
										<div className="flex text-xs font-medium flex-row justify-around py-4 border-b border-solid border-dark-tint">
											<div>Contributor</div>
											<div>Amount</div>
											<div>Date</div>
										</div>

										<div className="flex text-xs font-medium flex-row justify-around py-4 border-b border-solid border-dark-tint">
											<div>Contributor</div>
											<div>Amount</div>
											<div>Date</div>
										</div>
										<div className="flex text-xs font-medium flex-row justify-around py-4 border-b border-solid border-dark-tint">
											<div>Contributor</div>
											<div>Amount</div>
											<div>Date</div>
										</div>
										<div className="flex text-xs font-medium flex-row justify-around py-4 border-b border-solid border-dark-tint">
											<div>Contributor</div>
											<div>Amount</div>
											<div>Date</div>
										</div>
										<div className="flex text-xs font-medium flex-row justify-around py-4 ">
											<div>Contributor</div>
											<div>Amount</div>
											<div>Date</div>
										</div>
									</div>
								</div>
							</Tab.Panel>
							<Tab.Panel>
								<div className="flex justify-center container max-auto px-8">
									<div className="relative w-full lg:w-2/3  border border-solid border-dark-tint rounded-md flex flex-col  bg-white">
										<div className="text-xs font-medium p-4 border-b border-solid border-dark-tint">
											Contributor
										</div>
										<div className="text-xs font-medium p-4 border-b border-solid border-dark-tint">
											Contributor
										</div>
										<div className="text-xs font-medium p-4 border-b border-solid border-dark-tint ">
											Contributor
										</div>
										<div className="text-xs font-medium p-4 border-b border-solid border-dark-tint">
											Contributor
										</div>
										<div className="text-xs font-medium p-4 border-b border-solid border-dark-tint">
											Contributor
										</div>
										<div className="text-xs font-medium p-4 border-b border-solid border-dark-tint">
											Contributor
										</div>
									</div>
								</div>
							</Tab.Panel>
							<Tab.Panel>
								<div className="flex flex-col  items-center gap-10 container max-auto px-8">
									<div className="relative w-full lg:w-2/3  border border-solid border-dark-tint rounded-md flex flex-col  bg-white">
										<div className="text-xs font-medium p-4 border-b border-solid border-dark-tint flex flex-col">
											<div className="flex flex-row justify-between py-2 font-semibold text-xs text-secondary-shade">
												<div>Amount Raised</div>
												<div>Budget</div>
											</div>
											<div className="relative h-4">
												<ProgressBar
													percentage={70}
												></ProgressBar>
											</div>
											<div className="flex flex-row justify-between py-2 font-semibold text-sm text-secondary">
												<div>150 $</div>
												<div>180$</div>
											</div>
										</div>
									</div>
									<div className="relative w-full lg:w-2/3  border border-solid border-dark-tint rounded-md flex justify-center py-4  bg-white">
										<div className="flex flex-col">
											<div className="text-center text-3xl">30$</div>
											<div className="text-sm text-secondary-shade">Left to go</div>
										</div>
									</div>
								</div>
							</Tab.Panel>
							<Tab.Panel>
								<div className="flex flex-col items-center gap-10 container max-auto px-8">
									<div className="relative w-full lg:w-2/3  border border-solid border-dark-tint rounded-md flex flex-col  bg-white">
										<div className="text-xs font-medium p-4 border-b border-solid border-dark-tint flex flex-col">
											<div className="flex flex-row justify-between py-2 font-semibold text-xs text-secondary-shade">
												<div>Amount Raised</div>
												<div>Budget</div>
											</div>
											<div className="relative h-4">
												<ProgressBar
													percentage={70}
												></ProgressBar>
											</div>
											<div className="flex flex-row justify-between py-2 font-semibold text-sm text-secondary">
												<div>150 $</div>
												<div>180$</div>
											</div>
										</div>
									</div>
									<div className="relative w-full lg:w-2/3  border border-solid border-dark-tint rounded-md flex flex-col  bg-white">
										<div className="text-xs font-medium p-4 border-b border-solid border-dark-tint flex flex-col">
											<div className="flex flex-row justify-between py-2 font-semibold text-xs text-secondary-shade">
												<div>Contributors</div>
												<div>Total Views</div>
											</div>
											<div className="relative h-4">
												<ProgressBar
													percentage={30}
												></ProgressBar>
											</div>
											<div className="flex flex-row justify-between py-2 font-semibold text-sm text-secondary">
												<div>600</div>
												<div>2500</div>
											</div>
										</div>
									</div>
									<div className="relative w-full lg:w-2/3  border border-solid border-dark-tint rounded-md flex flex-col  bg-white">
										<div className="text-xs font-medium p-4 border-b border-solid border-dark-tint flex flex-col">
											<div className="flex flex-row justify-between py-2 font-semibold text-xs text-secondary-shade">
												<div>New Contributors</div>
												<div>Contributions</div>
											</div>
											<div className="relative h-4">
												<ProgressBar
													percentage={10}
												></ProgressBar>
											</div>
											<div className="flex flex-row justify-between py-2 font-semibold text-sm text-secondary">
												<div>100</div>
												<div>2500</div>
											</div>
										</div>
									</div>
								</div>
							</Tab.Panel>
						</Tab.Panels>
					</Tab.Group>
				</div>
			</Layout>
		</div>
	);
};

export default Details;

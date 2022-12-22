import React from "react";
import Link from "next/link";
import Layout from "../../../components/Layout";

const ProjectMedia = () => {
	return (
		<div className="bg-primary-tint">
			<Layout hasFooter={false} hasHeader={false}>
				<div className="py-32 flex justify-center container max-auto px-4">
					<form className="relative w-full lg:w-2/3  lg:shadow-md p-8 border corder-solid border-dark-tint rounded-md flex flex-col gap-4 bg-white">
						<div className="flex flex-row justify-between items-center">
							<label
								htmlFor="image"
								className=" text-dark font-semibold text-xs"
							>
								Image
							</label>
							<input type="file" className=" w-2/3 " />
						</div>
						<div className="flex flex-row justify-between items-center">
							<label
								htmlFor="video"
								className=" text-dark font-semibold text-xs"
							>
								Video
							</label>
							<input type="file" className=" w-2/3 " />
						</div>

						<div className="flex flex-row justify-between">
							<Link href={"/creator/createProject"}>
								<button className="btn btn-primary-outline my-6">
									Back
								</button>
							</Link>
							<Link href={"/creator/createProject/rewards"}>
								<button className="btn btn-primary my-6">
									Next
								</button>
							</Link>
						</div>
					</form>
				</div>
			</Layout>
		</div>
	);
};

export default ProjectMedia;

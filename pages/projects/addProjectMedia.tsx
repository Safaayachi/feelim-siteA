import React from "react";
import Link from "next/link";

const addProjectMedia = () => {
	return (
		<div className="py-32  flex justify-center container max-auto px-4">
			<form className="relative w-full lg:w-2/3  lg:shadow-md p-8 border corder-solid border-dark-tint rounded-md flex flex-col gap-4">
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
					<Link href={"/projects/addProjectInfo"}>
						<button className="btn btn-primary-outline my-6">Back</button>
					</Link>
					<Link href={"/projects/addProjectRewards"}>
						<button className="btn btn-primary my-6">Next</button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default addProjectMedia;

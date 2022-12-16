import React from "react";
import Link from "next/link";

const addProjectRewards = () => {
	return (
		<div className="py-32  flex justify-center container max-auto px-4">
			<form className="relative w-full lg:w-2/3  lg:shadow-md p-8 border corder-solid border-dark-tint rounded-md flex flex-col gap-4">
				<div className="flex flex-row justify-between items-center">
					<label
						htmlFor="title"
						className=" text-dark font-semibold text-xs"
					>
						Title
					</label>
					<input type="text" className="input w-2/3" />
				</div>
				<div className="flex flex-row justify-between items-center">
					<label
						htmlFor="level"
						className=" text-dark font-semibold text-xs"
					>
						Level
					</label>
					<input type="text" className="input w-2/3" />
				</div>
				<div className="flex flex-row justify-between items-center">
					<label
						htmlFor="description"
						className=" text-dark font-semibold text-xs"
					>
						Description
					</label>
					<textarea className=" w-2/3 " />
				</div>
				<div className="flex flex-row justify-between items-center">
					<label
						htmlFor="value"
						className=" text-dark font-semibold text-xs"
					>
						Value
					</label>
					<input type="text" className="input w-2/3" />
				</div>
				<div className="flex flex-row justify-between items-center">
					<label
						htmlFor="quantity"
						className=" text-dark font-semibold text-xs"
					>
						Quantity
					</label>
					<input type="text" className="input w-2/3 px-6" />
				</div>
				<div className="flex flex-row justify-between items-center">
					<label
						htmlFor="shipping"
						className=" text-dark font-semibold text-xs"
					>
						Shipping Duration
					</label>
					<input type="text" className="input w-2/3" />
				</div>
				<div className="flex flex-row justify-between items-center">
					<label
						htmlFor="image"
						className=" text-dark font-semibold text-xs"
					>
						Image
					</label>
					<input type="file" className=" w-2/3 " />
				</div>

				<div className="flex flex-row justify-between">
					<Link href={"/projects/addProjectMedia"}>
						<button className="btn btn-primary-outline my-6">
							Back
						</button>
					</Link>

					<div>
						<button className="btn btn-primary my-6">Create</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default addProjectRewards;

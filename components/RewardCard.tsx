import React from "react";
import Image from "next/image";
import Link from "next/link";

const RewardCard = () => {
	return (
		<div className="relative rounded-lg border border-solid border-dark-tint  min-w-1/4 h-fit bg-white cursor-pointer p-4">
			<div className="relative h-52 ">
				<Image
					alt={"logo"}
					src={"/images/cover.jpg"}
					fill
					objectFit="cover"
					className="brightness-75 opacity-90 rounded-t-lg"
				></Image>
			</div>
			<div className=" p-2 flex flex-col gap-3">
				<h1 className="font-semibold text-secondary">Reword</h1>
				<p className="text-xs font-normal">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Iusto, aspernatur distinctio architecto amet sequi
				</p>

				<div className="flex flex-row items-center justify-between">
					<div className="text-lg font-bold text-secondary">534$</div>
					<div className="btn btn-primary-outline hover:btn-primary px-4 w-fit ">
						{" "}
						Contribute
					</div>
				</div>
			</div>
            <div className="absolute top-0 right-0 bg-green-500 p-2 shadow-full rounded-tr-md text-sm text-white font-semibold">First Level</div>
		</div>
	);
};

export default RewardCard;

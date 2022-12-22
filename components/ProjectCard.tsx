import React from "react";
import ProgressBar from "./ProgressBar";
import Image from "next/image";

const ProjectCard = ({percentage}) => {
	return (
		<div className="relative shadow-md rounded-lg  min-w-1/4 h-full bg-white cursor-pointer">
			<div className="relative h-52 ">
				<Image
					alt={"logo"}
					src={"/images/cover.jpg"}
					fill
					objectFit="cover"
					className="brightness-75 opacity-90 rounded-t-lg"
				></Image>
			</div>
			<div className="h-3/5 p-2 flex flex-col gap-3">
				<h1 className="font-semibold text-secondary">Project</h1>
				<p className="text-xs font-normal">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Iusto, aspernatur distinctio architecto amet sequi
				</p>
				<div className="relative h-0.5">
					<ProgressBar percentage={percentage}></ProgressBar>
				</div>
				<div className="flex flex-row justify-between">
					<div className="text-xs font-medium text-secondary">
						TARGET
					</div>
					<div className="text-xs font-bold text-secondary">
						{" "}
						43,534$
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;

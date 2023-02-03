import React from "react";
import ProgressBar from "./ProgressBar";
import Image from "next/image";
interface ProjectCardProps {
	project: any;
}
const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<div className="relative shadow-md rounded-lg  w-full h-full bg-white cursor-pointer">
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
				<h1 className="font-semibold text-secondary">{project.title}</h1>
				<p className="text-xs font-normal">
				{project.description}
				</p>
				<div className="relative h-0.5">
					<ProgressBar percentage={40}></ProgressBar>
				</div>
				<div className="flex flex-row justify-between">
					<div className="text-xs font-medium text-secondary">
						TARGET
					</div>
					<div className="text-xs font-bold text-secondary">
						{" "}
						{project.Budget}$
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;

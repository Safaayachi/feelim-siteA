import React from "react";
interface ProgressBarProps {
	percentage: number;
}

const ProgressBar = ({ percentage }: ProgressBarProps) => {
	return (
		<div className="h-full w-full rounded-full bg-dark-tint ">
			<div style={{ width: `${percentage}%` }} className={`h-full`}>
				<div className="bg-primary h-full rounded-full"></div>
			</div>
		</div>
	);
};

export default ProgressBar;

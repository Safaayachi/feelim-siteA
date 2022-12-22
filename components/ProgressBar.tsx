import React from "react";

const ProgressBar = ({ percentage }) => {
	return (
		<div className="h-full w-full rounded-full bg-dark-tint ">
			<div style={{ width: `${percentage}%` }} className={`h-full`}>
				<div className="bg-primary h-full rounded-full"></div>
			</div>
		</div>
	);
};

export default ProgressBar;

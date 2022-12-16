import React from "react";

const ProgressBar = ({ percentage }) => {
	return (
		<div className="h-0.5 w-full  bg-secondary ">
			<div style={{ width: `${percentage}%` }} className={`h-full`}>
				<div className="bg-primary h-full"></div>
			</div>
		</div>
	);
};

export default ProgressBar;

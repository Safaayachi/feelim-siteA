import React from "react";
import Layout from "../../components/Layout";


const index = () => {
	return (
		<div>
			<Layout hasFooter={false} hasHeader={false} hasSideBar={true}>
				<div className="container max-auto px-10 py-6 flex flex-col"></div>
			</Layout>
		</div>
	);
};

export default index;

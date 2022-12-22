import React from "react";

const SearchBar = () => {
	return (
		<>
			<form
				action=""
				className="relative w-full flex flex-row items-center"
			>
				<input
					type="text"
					className="bg-shade px-14"
					placeholder="search"
				/>
				<div className="absolute px-3 py-2 rounded-full flex items-center bg-primary cursor-pointer ml-1">
					<i className="icon-search text-white "></i>
				</div>
			</form>
		</>
	);
};

export default SearchBar;

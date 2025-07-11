import React from "react";

const BgComponent = () => {
	return (
		<div className="relative -z-40">
			<div className="absolute bg-green w-60 h-60 rounded-full translate-x-30 translate-y-30 blur-3xl opacity-30"></div>
			<div className="absolute bg-green w-60 h-60 rounded-full translate-x-270 translate-y-100 blur-3xl opacity-40"></div>
		</div>
	);
};

export default BgComponent;

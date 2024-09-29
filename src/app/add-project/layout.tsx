import React from "react";

const AddProjectComponentLayout = ({
	children,
}: {
	children: React.ReactElement;
}) => {
	const isAuthenticated = false;

	return isAuthenticated ? <div>{children}</div> : <p>Sign In First</p>;
};

export default AddProjectComponentLayout;

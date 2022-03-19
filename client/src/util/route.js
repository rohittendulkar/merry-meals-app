import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const AuthRoute = ({ component: Component, ...rest }) => {
	const { authenticated } = useSelector((state) => state.auth);

	return (
		<Route
			{...rest}
			render={(props) =>
				authenticated === true ? <Redirect to="/" /> : <Component {...props} />
			}
		/>
	);
};

export const UserRoute = ({ component: Component, ...rest }) => {
	const {
		authenticated,
		account: { role },
	} = useSelector((state) => state.auth);

	return (
		<Route
			{...rest}
			render={(props) =>
				authenticated === true && role === "ROLE_PARTNER" ? (
					<Redirect to="/partner/dashboard" />
				) : (
					<Component {...props} />
				)
			}
		/>
	);
};

export const PartnerRoute = ({ component: Component, ...rest }) => {
	const {
		authenticated,
		account: { role },
	} = useSelector((state) => state.auth);

	return (
		<Route
			{...rest}
			render={(props) =>
				authenticated === true && role === "ROLE_USER" ? (
					<Redirect to="/" />
				) : (
					<Component {...props} />
				)
			}
		/>
	);
};

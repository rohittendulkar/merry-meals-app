import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//redux
import { Provider } from "react-redux";
import store from "./redux/store";

import { SET_AUTHENTICATED } from "./redux/types";
import { logoutAction, getUserData } from "./redux/actions/authActions";

//axios
import axios from "./util/axios";

//jwt-decode
import jwtDecode from "jwt-decode";

//material-ui
import {
    ThemeProvider as MuiThemeProvider,
    StyledEngineProvider,
    adaptV4Theme,
    createTheme,
} from "@mui/material/styles";

//theme
import themeFile from "./util/theme";

//components
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";

//util
import ScrollToTop from "./util/scrollToTop";

//restrict routes
import { AuthRoute, PartnerRoute, UserRoute } from "./util/route";

//pages
import home from "./pages/home";
import error404 from "./pages/404";
import signup from "./pages/sign-up";
import login from "./pages/login";
import addRestaurant from "./pages/addRestaurant";
import restaurant from "./pages/restaurant";
import partnerDash from "./pages/partnerDashboard";
import cart from "./pages/cart";
import orders from "./pages/orders";

const theme = createTheme(adaptV4Theme(themeFile));

const token = localStorage.jwt;

if (token) {
	const decodedToken = jwtDecode(token);
	// console.log(decodedToken);
	if (decodedToken.exp * 1000 < Date.now()) {
		store.dispatch(logoutAction());
		window.location.href = "/login";
	} else {
		store.dispatch({ type: SET_AUTHENTICATED });
		axios.defaults.headers.common["Authorization"] = token;
		store.dispatch(getUserData());
	}
}

function App() {
	return (
        <StyledEngineProvider injectFirst>
            <MuiThemeProvider theme={theme}>
                <Provider store={store}>
                    <Router>
                        <AppBar />
                        <ScrollToTop />
                        <Switch>
                            <Route exact path="/" component={home} />
                            <AuthRoute exact path="/login" component={login} />
                            <AuthRoute exact path="/register" component={signup} />
                            <AuthRoute exact path="/addrestaurant" component={addRestaurant} />
                            <UserRoute exact path="/order/:restName" component={restaurant} />
                            <PartnerRoute
                                exact
                                path="/partner/dashboard"
                                component={partnerDash}
                            />
                            <UserRoute exact path="/cart" component={cart} />
                            <UserRoute exact path="/orders" component={orders} />
                            <PartnerRoute exact path="/partner/orders" component={orders} />
                            <Route component={error404} />
                        </Switch>
                        <Footer />
                    </Router>
                </Provider>
            </MuiThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;

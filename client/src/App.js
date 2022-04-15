import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import ResponsiveAppBar from "./components/Navbar";
import { About, Home, LogIn, Register } from "./imports";
import PageNotFound from "./routes/PageNotFound";
import PartnerRegister from "./routes/PartnerRegister";

const theme = createTheme({
	palette: {
		type: "light",
		primary: {
			main: "#74c35e",
		},
		secondary: {
			main: "#457B9D",
			light: "#A8DADC",
			dark: "#1D3557",
		},
		background: {
			default: "#F1FAEE",
		},
		error: {
			main: "#E63946",
		},
		warning: {
			main: "#FFC300",
		},
		success: {
			main: "#40916C",
		},
	},
	typography: {
		h1: {
			fontFamily: "Merriweather",
			letterSpacing: "2%",
		},
		fontFamily: "Oxygen",
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<ResponsiveAppBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/register/member" element={<Register />} />
					<Route path="/login" element={<LogIn />} />
					<Route path="/about" element={<About />} />
					<Route path="/register/partner" element={<PartnerRegister />} />
					<Route path="/404-not-found" element={<PageNotFound />} />
					<Route path="*" element={<Navigate to="/404-not-found" />} />
				</Routes>

				<Footer />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;

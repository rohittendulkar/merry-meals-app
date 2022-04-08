import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/Navbar";
import { About, Home, LogIn, Register } from "./imports";

function App() {
	return (
		<div>
			<BrowserRouter>
				<ResponsiveAppBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<LogIn />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

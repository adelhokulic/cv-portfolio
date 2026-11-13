import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<main className="main">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/projects/:slug" element={<ProjectDetail />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;

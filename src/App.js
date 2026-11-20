import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

const App = () => {
	return (
		<LanguageProvider>
			<ThemeProvider>
				<BrowserRouter>
					<Navbar />
					<main className="page-main">
						<Container>
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/projects" element={<Projects />} />
								<Route path="/projects/:slug" element={<ProjectDetail />} />
								<Route path="/about" element={<About />} />
								<Route path="/contact" element={<Contact />} />
								<Route path="*" element={<NotFound />} />
							</Routes>
						</Container>
					</main>
					<Footer />
				</BrowserRouter>
			</ThemeProvider>
		</LanguageProvider>
	);
};

export default App;

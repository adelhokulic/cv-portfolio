import { useState } from "react";
import { NavLink } from "react-router-dom";
import BootstrapNavbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navbar__toggle = () => {
		if (isOpen) setIsOpen(false);
		if (!isOpen) setIsOpen(true);
	};
	const { theme, toggleTheme } = useTheme();
	const { language, toggleLanguage, t } = useLanguage();
	return (
		<BootstrapNavbar
			expand="md"
			sticky="top"
			className="app-navbar py-3"
			expanded={isOpen}
			onToggle={() => navbar__toggle()}
		>
			<Container>
				<BootstrapNavbar.Brand
					as={NavLink}
					to="/"
					onClick={() => setIsOpen(false)}
				>
					Adel<span className="brand-dot">.</span>
				</BootstrapNavbar.Brand>

				<BootstrapNavbar.Toggle
					aria-controls="main-nav"
					aria-label={t.nav.openMenu}
				/>

				<BootstrapNavbar.Collapse id="main-nav">
					<Nav className="ms-auto mt-3 mt-md-0 gap-md-1">
						<Nav.Link
							as={NavLink}
							to="/"
							end
							onClick={() => {
								setIsOpen(false);
							}}
						>
							{t.nav.home}
						</Nav.Link>
						<Nav.Link
							as={NavLink}
							to="/projects"
							onClick={() => {
								setIsOpen(false);
							}}
						>
							{t.nav.projects}
						</Nav.Link>
						<Nav.Link
							as={NavLink}
							to="/about"
							onClick={() => {
								setIsOpen(false);
							}}
						>
							{t.nav.about}
						</Nav.Link>
						<Nav.Link
							as={NavLink}
							to="/contact"
							onClick={() => {
								setIsOpen(false);
							}}
						>
							{t.nav.contact}
						</Nav.Link>
					</Nav>

					<div className="d-flex gap-2 ms-md-3 mt-3 mt-md-0">
						<Button
							variant="outline-secondary"
							className="icon-btn"
							onClick={() => toggleLanguage()}
							aria-label={t.nav.toggleLanguage}
						>
							{language === "de" ? "EN" : "DE"}
						</Button>
						<Button
							variant="outline-secondary"
							className="icon-btn"
							onClick={() => toggleTheme()}
							aria-label={t.nav.toggleTheme}
						>
							{theme === "light" ? "🌙" : "☀️"}
						</Button>
					</div>
				</BootstrapNavbar.Collapse>
			</Container>
		</BootstrapNavbar>
	);
};

export default Navbar;

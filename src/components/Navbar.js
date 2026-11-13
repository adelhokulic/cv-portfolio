import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navbar__toggle = () => {
		if (isOpen) setIsOpen(false);
		if (!isOpen) setIsOpen(true);
	};
	const { theme, toggleTheme } = useTheme();
	return (
		<header className="navbar">
			<div className="navbar__inner">
				<NavLink to="/" className="navbar__logo">
					Adel<span>.</span>
				</NavLink>

				<button
					className={`navbar__toggle ${isOpen ? "navbar__toggle--open" : ""}`}
					aria-label="Menü öffnen"
					aria-expanded={isOpen}
					onClick={() => navbar__toggle()}
				>
					<span></span>
					<span></span>
					<span></span>
				</button>

				<nav className={`navbar__menu ${isOpen ? "navbar__menu--open" : ""}`}>
					<NavLink
						onClick={() => {
							setIsOpen(false);
						}}
						to="/"
						end
						className="navbar__link"
					>
						Start
					</NavLink>
					<NavLink
						onClick={() => {
							setIsOpen(false);
						}}
						to="/projects"
						className="navbar__link"
					>
						Projekte
					</NavLink>
					<NavLink
						onClick={() => {
							setIsOpen(false);
						}}
						to="/about"
						className="navbar__link"
					>
						Über mich
					</NavLink>
					<NavLink
						onClick={() => {
							setIsOpen(false);
						}}
						to="/contact"
						className="navbar__link"
					>
						Kontakt
					</NavLink>

					<button
						onClick={() => toggleTheme()}
						className="theme-toggle"
						aria-label="Theme wechseln"
					>
						{theme === "light" ? "🌙" : "☀️"}
					</button>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;

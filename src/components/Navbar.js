import { useState } from "react";
import { NavLink } from "react-router-dom";
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
		<header className="navbar">
			<div className="navbar__inner">
				<NavLink to="/" className="navbar__logo">
					Adel<span>.</span>
				</NavLink>

				<button
					className={`navbar__toggle ${isOpen ? "navbar__toggle--open" : ""}`}
					aria-label={t.nav.openMenu}
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
						{t.nav.home}
					</NavLink>
					<NavLink
						onClick={() => {
							setIsOpen(false);
						}}
						to="/projects"
						className="navbar__link"
					>
						{t.nav.projects}
					</NavLink>
					<NavLink
						onClick={() => {
							setIsOpen(false);
						}}
						to="/about"
						className="navbar__link"
					>
						{t.nav.about}
					</NavLink>
					<NavLink
						onClick={() => {
							setIsOpen(false);
						}}
						to="/contact"
						className="navbar__link"
					>
						{t.nav.contact}
					</NavLink>

					<div className="navbar__actions">
						<button
							onClick={() => toggleLanguage()}
							className="theme-toggle language-toggle"
							aria-label={t.nav.toggleLanguage}
						>
							{language === "de" ? "EN" : "DE"}
						</button>
						<button
							onClick={() => toggleTheme()}
							className="theme-toggle"
							aria-label={t.nav.toggleTheme}
						>
							{theme === "light" ? "🌙" : "☀️"}
						</button>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;

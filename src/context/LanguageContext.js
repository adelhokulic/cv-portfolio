import { createContext, useContext, useEffect, useState } from "react";
import translations from "../data/translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(() => {
		if (localStorage.getItem("language") === null) {
			return "de";
		} else return localStorage.getItem("language");
	});
	useEffect(() => {
		document.documentElement.setAttribute("lang", language);
		localStorage.setItem("language", language);
	}, [language]);

	const toggleLanguage = () => {
		if (language === "en") {
			setLanguage("de");
		}
		if (language === "de") {
			setLanguage("en");
		}
	};

	return (
		<LanguageContext.Provider
			value={{ language, toggleLanguage, t: translations[language] }}
		>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => useContext(LanguageContext);

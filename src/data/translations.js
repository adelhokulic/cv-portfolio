// All texts of the site in German and English.
// Usage: const t = translations[language];  then  t.home.greeting
// Every key must exist in both languages.

const translations = {
	de: {
		nav: {
			home: "Start",
			projects: "Projekte",
			about: "Über mich",
			contact: "Kontakt",
			openMenu: "Menü öffnen",
			toggleTheme: "Theme wechseln",
			toggleLanguage: "Switch to English",
		},
		home: {
			greeting: "Hallo, ich bin",
			role: "Junior Frontend Developer",
			intro:
				"Ursprünglich aus Bosnien und Herzegowina, heute in Berlin zu Hause. Ich baue schnelle, responsive React-Anwendungen mit sauberem State-Management und echten APIs.",
			viewProjects: "Projekte ansehen",
			contactMe: "Kontakt aufnehmen",
			featuredTitle: "Ausgewählte Projekte",
			allProjects: "Alle Projekte →",
			aboutTitle: "Über mich",
			aboutText:
				"Aufgewachsen in Bosnien und Herzegowina, angekommen in Berlin. Ich verbinde gern Design und Logik und lerne jeden Tag dazu, von HTML und CSS bis zu React, Next.js und Firebase.",
			moreAboutMe: "Mehr über mich →",
			ctaTitle: "Lass uns sprechen!",
			ctaText:
				"Du suchst einen motivierten Junior Frontend Developer in Berlin oder remote? Ich freue mich auf deine Nachricht.",
		},
		projects: {
			title: "Projekte",
			intro:
				"Eine Auswahl meiner Projekte. Filtere nach Technologie, um zu sehen, wo ich was eingesetzt habe.",
			all: "Alle",
			empty: "Keine Projekte mit dieser Technologie gefunden.",
			details: "Details",
			demo: "Live-Demo",
		},
		projectDetail: {
			back: "← Alle Projekte",
			code: "Code auf GitHub",
			demo: "Live-Demo",
			features: "Funktionen",
			notFoundTitle: "Projekt nicht gefunden.",
			notFoundText: "Dieses Projekt existiert nicht oder wurde umbenannt.",
			backToProjects: "Zurück zu den Projekten",
		},
		github: {
			title: "Neu auf GitHub",
			allRepos: "Alle Repositories →",
			intro: "Woran ich gerade arbeite, automatisch geladen über die GitHub API.",
			loading: "Repositories werden geladen…",
			error: "GitHub-Repositories konnten nicht geladen werden.",
			noDescription: "Keine Beschreibung vorhanden.",
			updated: "Aktualisiert am",
			dateLocale: "de-DE",
		},
		about: {
			title: "Über mich",
			lead: "Ich komme aus Bosnien und Herzegowina, einem Land, in dem sich Ost und West seit Jahrhunderten begegnen, und lebe heute in Berlin, einer Stadt, die sich ständig neu erfindet. Vielleicht verbinde ich deshalb so gern Dinge: Design und Logik, Idee und Code.",
			text1:
				"Meinen Weg ins Frontend habe ich über das Mentoring-Programm ITMentorstva gefunden, Schritt für Schritt von HTML und CSS bis zu React, Next.js und Firebase. Am Frontend begeistert mich, dass man das Ergebnis sofort sieht: Jede Zeile Code wird zu etwas, das ein Mensch anklicken kann.",
			text2:
				"Jetzt suche ich meine erste Stelle als Junior Frontend Developer, in einem Team, von dem ich lernen und dem ich etwas zurückgeben kann.",
			cta: "Lass uns reden",
			skills: "Skills",
		},
		contact: {
			title: "Kontakt",
			intro:
				"Du hast eine Stelle, ein Projekt oder einfach eine Frage? Schreib mir, ich antworte so schnell wie möglich.",
			locationLabel: "Standort",
			location: "Berlin, Deutschland",
			availabilityLabel: "Verfügbarkeit",
			availability: "Offen für Junior-Stellen",
			nameLabel: "Name",
			namePlaceholder: "Max Mustermann",
			emailLabel: "E-Mail",
			emailPlaceholder: "max@beispiel.de",
			messageLabel: "Nachricht",
			messagePlaceholder: "Worum geht es?",
			submit: "Nachricht senden",
			errorName: "Bitte gib deinen Namen ein.",
			errorEmailEmpty: "Bitte gib deine E-Mail-Adresse ein.",
			errorEmailInvalid: "Bitte gib eine gültige E-Mail-Adresse ein.",
			errorMessage: "Die Nachricht muss mindestens 10 Zeichen lang sein.",
			thanks: "Danke",
			successText: "Deine Nachricht ist angekommen. Ich melde mich so bald wie möglich bei dir.",
		},
		notFound: {
			title: "Seite nicht gefunden.",
			text: "Die Seite, die du suchst, existiert nicht oder wurde verschoben.",
			backHome: "Zur Startseite",
		},
	},

	en: {
		nav: {
			home: "Home",
			projects: "Projects",
			about: "About",
			contact: "Contact",
			openMenu: "Open menu",
			toggleTheme: "Toggle theme",
			toggleLanguage: "Auf Deutsch wechseln",
		},
		home: {
			greeting: "Hi, I'm",
			role: "Junior Frontend Developer",
			intro:
				"Originally from Bosnia and Herzegovina, now at home in Berlin. I build fast, responsive React applications with clean state management and real APIs.",
			viewProjects: "View projects",
			contactMe: "Get in touch",
			featuredTitle: "Featured projects",
			allProjects: "All projects →",
			aboutTitle: "About me",
			aboutText:
				"Grew up in Bosnia and Herzegovina, settled in Berlin. I enjoy combining design and logic and learn something new every day, from HTML and CSS to React, Next.js and Firebase.",
			moreAboutMe: "More about me →",
			ctaTitle: "Let's talk!",
			ctaText:
				"Looking for a motivated Junior Frontend Developer in Berlin or remote? I'm looking forward to your message.",
		},
		projects: {
			title: "Projects",
			intro: "A selection of my projects. Filter by technology to see where I used what.",
			all: "All",
			empty: "No projects found with this technology.",
			details: "Details",
			demo: "Live demo",
		},
		projectDetail: {
			back: "← All projects",
			code: "Code on GitHub",
			demo: "Live demo",
			features: "Features",
			notFoundTitle: "Project not found.",
			notFoundText: "This project does not exist or has been renamed.",
			backToProjects: "Back to projects",
		},
		github: {
			title: "Latest on GitHub",
			allRepos: "All repositories →",
			intro: "What I'm working on right now, loaded automatically from the GitHub API.",
			loading: "Loading repositories…",
			error: "GitHub repositories could not be loaded.",
			noDescription: "No description available.",
			updated: "Updated on",
			dateLocale: "en-GB",
		},
		about: {
			title: "About me",
			lead: "I come from Bosnia and Herzegovina, a country where East and West have met for centuries, and today I live in Berlin, a city that keeps reinventing itself. Maybe that's why I love connecting things: design and logic, idea and code.",
			text1:
				"I found my way into frontend development through the ITMentorstva mentorship program, step by step from HTML and CSS to React, Next.js and Firebase. What I love about frontend is that you see the result right away: every line of code becomes something a person can click.",
			text2:
				"Now I'm looking for my first role as a Junior Frontend Developer, in a team I can learn from and give something back to.",
			cta: "Let's talk",
			skills: "Skills",
		},
		contact: {
			title: "Contact",
			intro:
				"Do you have a job opening, a project or just a question? Write to me and I'll get back to you as soon as possible.",
			locationLabel: "Location",
			location: "Berlin, Germany",
			availabilityLabel: "Availability",
			availability: "Open to junior roles",
			nameLabel: "Name",
			namePlaceholder: "Jane Doe",
			emailLabel: "Email",
			emailPlaceholder: "jane@example.com",
			messageLabel: "Message",
			messagePlaceholder: "What is it about?",
			submit: "Send message",
			errorName: "Please enter your name.",
			errorEmailEmpty: "Please enter your email address.",
			errorEmailInvalid: "Please enter a valid email address.",
			errorMessage: "The message must be at least 10 characters long.",
			thanks: "Thank you",
			successText: "Your message has arrived. I'll get back to you as soon as possible.",
		},
		notFound: {
			title: "Page not found.",
			text: "The page you are looking for does not exist or has been moved.",
			backHome: "Back to home",
		},
	},
};

export default translations;

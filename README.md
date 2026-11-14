# Portfolio – Adel Hokulic

My personal portfolio website, built with React. It presents who I am, the projects I have built, and a way to get in touch. The site is available in German (default) and English, as I live in Berlin and am looking for my first role as a Junior Frontend Developer in Germany.

**Live site:** [adelhokulic.de](https://adelhokulic.de)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS-Grid_%26_Flexbox-1572B6?logo=css&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)

Built as a project in the ITMentorstva frontend mentorship program.

## Features

**Pages**
- **Home** – introduction and a selection of featured projects
- **Projects** – all projects with a technology filter
- **Project details** – description, key features, technologies and links to the code and the live demo (`/projects/:slug`)
- **About** – a short story and a list of skills
- **Contact** – a contact form with validation
- **404 pages** – a custom page for unknown routes and a separate message for unknown projects, both with a link back

**Projects from JSON**
- All project data lives in one file, [`src/data/projects.json`](src/data/projects.json)
- The filter buttons are generated from the data, so a new technology gets its own button automatically
- Featured projects on the home page are selected with a `featured` flag
- The "Live demo" button is shown only when a project has a demo URL

**German and English**
- Language switch (DE / EN) in the navbar, German by default
- All texts live in one file, [`src/data/translations.js`](src/data/translations.js), and are provided through `LanguageContext`
- The choice is saved in `localStorage`, and the `lang` attribute on `<html>` follows the selected language
- Form errors store a translation key instead of a text, so they switch language together with the page

**Dark and light theme**
- Global theme state through React Context (`ThemeContext` with a `useTheme` hook)
- The choice is saved in `localStorage` and restored on the next visit
- All colors are CSS custom properties, so switching the theme only changes one attribute on `<html>`

**Contact form**
- Controlled inputs for name, email and message
- Validation through React state, with an error message under each field and a red border on invalid fields
- Whitespace-only input is rejected (`trim`)
- After a successful submit, the form is replaced with a personal thank-you message (no data is actually sent)

**Latest GitHub repositories**
- The projects page loads my most recently updated repositories live from the public GitHub API
- Forks are filtered out, and loading and error states are handled
- Requests are cancelled with `AbortController` when the component unmounts

**Scroll animations**
- Sections and cards fade in when they scroll into view, using `IntersectionObserver` in a reusable `Reveal` component
- Cards in a grid appear one after another with a small delay
- Animations are turned off for users who enable "Reduce motion" in their system settings

**Responsive design**
- Mobile-first CSS with Grid and Flexbox, no UI framework
- Hamburger menu on small screens that closes after navigation
- Project grid with 1, 2 or 3 columns depending on the screen width

## Tech Stack

| Area | Technology |
| --- | --- |
| UI | React 19 (function components and hooks) |
| Routing | React Router 7 |
| Global state | Context API (`createContext`, `useContext`, custom hook) |
| Persistence | Browser `localStorage` |
| Data | Local JSON file, public GitHub REST API with Axios |
| Styling | CSS with custom properties, Grid, Flexbox and BEM-style class names |
| Tooling | Create React App, ESLint, Prettier, Git |
| Hosting | Vercel with automatic deployments from GitHub, custom domain with HTTPS |

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/projects` | All projects with the technology filter |
| `/projects/:slug` | Details of one project |
| `/about` | About me |
| `/contact` | Contact form |
| `*` | "Page not found" |

## Project Structure

```text
src/
├── components/
│   ├── Navbar.js          # Navigation, mobile menu and theme toggle
│   ├── ProjectCard.js     # One project as a card
│   ├── ProjectList.js     # Grid of cards, or an empty state
│   ├── GithubRepos.js     # Latest repositories from the GitHub API
│   ├── RepoCard.js        # One repository as a card
│   └── Reveal.js          # Fade-in animation when scrolled into view
├── context/
│   ├── LanguageContext.js # LanguageProvider and useLanguage hook
│   └── ThemeContext.js    # ThemeProvider and useTheme hook
├── data/
│   ├── projects.json      # All project data (descriptions in DE and EN)
│   └── translations.js    # All texts of the site in DE and EN
├── pages/
│   ├── Home.js
│   ├── Projects.js
│   ├── ProjectDetail.js
│   ├── About.js
│   ├── Contact.js
│   └── NotFound.js
├── App.js                 # Routes
├── App.css                # Component and page styles
└── index.css              # Theme colors and base styles
public/
└── images/                # Project screenshots
```

## How It Works

### Technology filter

The list of technologies is built from the project data instead of being written by hand. The selected technology is the only piece of state; the filtered list is calculated from it on every render, so it can never get out of sync:

```js
const filteredProjects =
	selectedTechnology === "Alle"
		? projects
		: projects.filter((project) => project.technologies.includes(selectedTechnology));
```

`ProjectList` does not know anything about the filter. It only renders the projects it receives, which is why the same component is reused on the home page for the featured projects.

### Theme

`ThemeProvider` reads the saved theme from `localStorage` once, with a lazy initial value in `useState`. A `useEffect` then writes every change to the `data-theme` attribute on `<html>` and back to `localStorage`. The CSS defines the colors for `[data-theme="dark"]`, so no component needs its own dark styles.

### Contact form validation

On submit, each field is checked and its error message is stored in state. A local `isValid` flag decides whether the form was sent. This avoids reading state right after setting it, as the new state value is only available in the next render.

## Adding a Project

Add an object to [`src/data/projects.json`](src/data/projects.json) and a screenshot to `public/images/`:

```json
{
	"title": "Project name",
	"slug": "project-name",
	"description": {
		"de": "Zwei Sätze für die Karte und die Detailseite.",
		"en": "Two sentences shown on the card and the detail page."
	},
	"highlights": {
		"de": ["Wichtige Funktion eins", "Wichtige Funktion zwei"],
		"en": ["Key feature one", "Key feature two"]
	},
	"technologies": ["React", "CSS"],
	"image": "/images/project-name.png",
	"github": "https://github.com/adelhokulic/project-name",
	"demo": "https://project-name.vercel.app",
	"featured": false
}
```

- `slug` becomes the URL: `/projects/project-name`
- Use the exact spelling of existing technologies (e.g. `Axios`, not `axios`), otherwise the filter shows two buttons
- Leave `demo` as an empty string `""` if there is no live version yet

## Getting Started

**Requirements:** Node.js 18+ and npm.

```bash
git clone https://github.com/adelhokulic/cv-portfolio.git
cd cv-portfolio
npm install
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000).

| Command | Description |
| --- | --- |
| `npm start` | Runs the app in development mode |
| `npm run build` | Creates a production build in `build/` |

## Deployment

The site is hosted on [Vercel](https://vercel.com) under the custom domain [adelhokulic.de](https://adelhokulic.de) and connected to this GitHub repository:

- Every push to `main` automatically triggers a new build and deployment
- Vercel builds with `CI=true`, so ESLint warnings fail the build. The code is kept warning-free.
- The domain points to Vercel through an A record (apex) and a CNAME record (`www`, redirected to the apex domain). Vercel issues the SSL certificate automatically.
- A rewrite rule in `vercel.json` sends every route to `index.html`, so opening a subpage directly (e.g. `/projects/web-shop`) or refreshing it does not return a 404

## What I Learned

- Building a multi-page app with React Router, including dynamic routes and a catch-all 404 route
- Creating global state with Context and a custom hook
- Persisting user preferences in `localStorage` with a lazy initial state
- Deriving values from state instead of storing them twice
- Building reusable components that work in more than one place
- Writing controlled forms with validation through state
- Fetching data from a public API with loading, error and cancellation handling
- Building a multilingual site with Context and a translations object
- Using the `IntersectionObserver` API with `useRef` for scroll animations
- Deploying a React app to Vercel, setting up automatic deployments and reading build logs
- Connecting a custom domain through DNS records

## Possible Improvements

- Tests with React Testing Library
- Migration to TypeScript

## Contact

- GitHub: [github.com/adelhokulic](https://github.com/adelhokulic)
- Location: Berlin, Germany

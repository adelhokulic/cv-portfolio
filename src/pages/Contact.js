import { useState } from "react";

const Contact = () => {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [isFormSent, setIsFormSent] = useState(false);
	const [nameError, setNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [messageError, setMessageError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		let isValid = true;

		if (form.name.trim() === "") {
			setNameError("Bitte gib deinen Namen ein.");
			isValid = false;
		} else setNameError("");
		if (form.email.trim() === "") {
			setEmailError("Bitte gib deine E-Mail-Adresse ein.");
			isValid = false;
		} else if (!form.email.includes("@") || !form.email.includes(".")) {
			setEmailError("Bitte gib eine gültige E-Mail-Adresse ein.");
			isValid = false;
		} else setEmailError("");
		if (form.message.trim().length < 10) {
			setMessageError("Die Nachricht muss mindestens 10 Zeichen lang sein.");
			isValid = false;
		} else setMessageError("");

		if (isValid) {
			setIsFormSent(true);
		}
	};
	return (
		<section className="contact">
			<header className="page-header">
				<h1 className="page-header__title">Kontakt</h1>
				<p className="page-header__text">
					Du hast eine Stelle, ein Projekt oder einfach eine Frage? Schreib mir,
					ich antworte so schnell wie möglich.
				</p>
			</header>

			<div className="contact__grid">
				<aside className="contact__info">
					<div className="contact__info-item">
						<span className="contact__info-label">Standort</span>
						<span>Berlin, Deutschland</span>
					</div>
					<div className="contact__info-item">
						<span className="contact__info-label">GitHub</span>
						<a
							href="https://github.com/adelhokulic"
							target="_blank"
							rel="noreferrer"
						>
							github.com/adelhokulic
						</a>
					</div>
					<div className="contact__info-item">
						<span className="contact__info-label">Verfügbarkeit</span>
						<span>Offen für Junior-Stellen</span>
					</div>
				</aside>

				{isFormSent ? (
					<div className="success">
						<div className="success__icon">✓</div>
						<h2 className="success__title">Danke, {form.name}!</h2>
						<p className="success__text">
							Deine Nachricht ist angekommen. Ich melde mich so bald wie möglich
							bei dir.
						</p>
					</div>
				) : (
					<form onSubmit={handleSubmit} className="form" noValidate>
						<div className="form__group">
							<label htmlFor="name" className="form__label">
								Name
							</label>
							<input
								id="name"
								name="name"
								type="text"
								className={`form__input ${nameError ? "form__input--error" : ""}`}
								placeholder="Max Mustermann"
								value={form.name}
								onChange={(e) => setForm({ ...form, name: e.target.value })}
							/>
							{nameError && <p className="form__error">{nameError}</p>}
						</div>

						<div className="form__group">
							<label htmlFor="email" className="form__label">
								E-Mail
							</label>
							<input
								id="email"
								name="email"
								type="email"
								className={`form__input ${emailError ? "form__input--error" : ""}`}
								placeholder="max@beispiel.de"
								value={form.email}
								onChange={(e) => setForm({ ...form, email: e.target.value })}
							/>
							{emailError && <p className="form__error">{emailError} </p>}
						</div>

						<div className="form__group">
							<label htmlFor="message" className="form__label">
								Nachricht
							</label>
							<textarea
								id="message"
								name="message"
								rows="6"
								className={`form__input form__textarea ${messageError ? "form__input--error form__textarea-error" : ""}`}
								placeholder="Worum geht es?"
								value={form.message}
								onChange={(e) => setForm({ ...form, message: e.target.value })}
							/>
							{messageError && <p className="form__error">{messageError} </p>}
						</div>

						<button
							type="submit"
							className="btn btn--primary btn--large form__submit"
						>
							Nachricht senden
						</button>
					</form>
				)}
			</div>
		</section>
	);
};

export default Contact;

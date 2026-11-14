import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
	const { t } = useLanguage();
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [isFormSent, setIsFormSent] = useState(false);
	// Errors store the translation KEY (e.g. "errorName"), not the text,
	// so the message switches language together with the rest of the page.
	const [nameError, setNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [messageError, setMessageError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		let isValid = true;

		if (form.name.trim() === "") {
			setNameError("errorName");
			isValid = false;
		} else setNameError("");
		if (form.email.trim() === "") {
			setEmailError("errorEmailEmpty");
			isValid = false;
		} else if (!form.email.includes("@") || !form.email.includes(".")) {
			setEmailError("errorEmailInvalid");
			isValid = false;
		} else setEmailError("");
		if (form.message.trim().length < 10) {
			setMessageError("errorMessage");
			isValid = false;
		} else setMessageError("");

		if (isValid) {
			setIsFormSent(true);
		}
	};
	return (
		<section className="contact">
			<header className="page-header">
				<h1 className="page-header__title">{t.contact.title}</h1>
				<p className="page-header__text">{t.contact.intro}</p>
			</header>

			<div className="contact__grid">
				<aside className="contact__info">
					<div className="contact__info-item">
						<span className="contact__info-label">{t.contact.locationLabel}</span>
						<span>{t.contact.location}</span>
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
						<span className="contact__info-label">
							{t.contact.availabilityLabel}
						</span>
						<span>{t.contact.availability}</span>
					</div>
				</aside>

				{isFormSent ? (
					<div className="success">
						<div className="success__icon">✓</div>
						<h2 className="success__title">
							{t.contact.thanks}, {form.name}!
						</h2>
						<p className="success__text">{t.contact.successText}</p>
					</div>
				) : (
					<form onSubmit={handleSubmit} className="form" noValidate>
						<div className="form__group">
							<label htmlFor="name" className="form__label">
								{t.contact.nameLabel}
							</label>
							<input
								id="name"
								name="name"
								type="text"
								className={`form__input ${nameError ? "form__input--error" : ""}`}
								placeholder={t.contact.namePlaceholder}
								value={form.name}
								onChange={(e) => setForm({ ...form, name: e.target.value })}
							/>
							{nameError && (
								<p className="form__error">{t.contact[nameError]}</p>
							)}
						</div>

						<div className="form__group">
							<label htmlFor="email" className="form__label">
								{t.contact.emailLabel}
							</label>
							<input
								id="email"
								name="email"
								type="email"
								className={`form__input ${emailError ? "form__input--error" : ""}`}
								placeholder={t.contact.emailPlaceholder}
								value={form.email}
								onChange={(e) => setForm({ ...form, email: e.target.value })}
							/>
							{emailError && (
								<p className="form__error">{t.contact[emailError]}</p>
							)}
						</div>

						<div className="form__group">
							<label htmlFor="message" className="form__label">
								{t.contact.messageLabel}
							</label>
							<textarea
								id="message"
								name="message"
								rows="6"
								className={`form__input form__textarea ${messageError ? "form__input--error" : ""}`}
								placeholder={t.contact.messagePlaceholder}
								value={form.message}
								onChange={(e) => setForm({ ...form, message: e.target.value })}
							/>
							{messageError && (
								<p className="form__error">{t.contact[messageError]}</p>
							)}
						</div>

						<button
							type="submit"
							className="btn btn--primary btn--large form__submit"
						>
							{t.contact.submit}
						</button>
					</form>
				)}
			</div>
		</section>
	);
};

export default Contact;

import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
	const { t } = useLanguage();
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [isFormSent, setIsFormSent] = useState(false);
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
		<section>
			<header className="mb-4">
				<h1 className="page-title mb-2">{t.contact.title}</h1>
				<p className="lead-muted mb-0">{t.contact.intro}</p>
			</header>

			<Row className="g-4">
				<Col lg={4}>
					<div className="bento-card h-auto d-flex flex-column gap-4">
						<div>
							<p className="bento-label mb-1">{t.contact.locationLabel}</p>
							<p className="fw-semibold mb-0">📍 {t.contact.location}</p>
						</div>
						<div>
							<p className="bento-label mb-1">GitHub</p>
							<a
								href="https://github.com/adelhokulic"
								target="_blank"
								rel="noreferrer"
							>
								github.com/adelhokulic
							</a>
						</div>
						<div>
							<p className="bento-label mb-1">{t.contact.availabilityLabel}</p>
							<span className="status-badge">
								<span className="status-dot" aria-hidden="true"></span>
								{t.contact.availability}
							</span>
						</div>
					</div>
				</Col>

				<Col lg={8}>
					<div className="bento-card h-auto p-4 p-lg-5">
						{isFormSent ? (
							<div className="text-center py-4">
								<div className="success-icon mb-3">✓</div>
								<h2 className="h3 fw-bold mb-2">
									{t.contact.thanks}, {form.name}!
								</h2>
								<p className="text-body-secondary mb-0">
									{t.contact.successText}
								</p>
							</div>
						) : (
							<Form onSubmit={handleSubmit} noValidate>
								<Form.Group className="mb-3" controlId="name">
									<Form.Label className="fw-semibold">
										{t.contact.nameLabel}
									</Form.Label>
									<Form.Control
										type="text"
										name="name"
										placeholder={t.contact.namePlaceholder}
										value={form.name}
										isInvalid={nameError !== ""}
										onChange={(e) => setForm({ ...form, name: e.target.value })}
									/>
									<Form.Control.Feedback type="invalid">
										{t.contact[nameError]}
									</Form.Control.Feedback>
								</Form.Group>

								<Form.Group className="mb-3" controlId="email">
									<Form.Label className="fw-semibold">
										{t.contact.emailLabel}
									</Form.Label>
									<Form.Control
										type="email"
										name="email"
										placeholder={t.contact.emailPlaceholder}
										value={form.email}
										isInvalid={emailError !== ""}
										onChange={(e) =>
											setForm({ ...form, email: e.target.value })
										}
									/>
									<Form.Control.Feedback type="invalid">
										{t.contact[emailError]}
									</Form.Control.Feedback>
								</Form.Group>

								<Form.Group className="mb-4" controlId="message">
									<Form.Label className="fw-semibold">
										{t.contact.messageLabel}
									</Form.Label>
									<Form.Control
										as="textarea"
										rows={6}
										name="message"
										placeholder={t.contact.messagePlaceholder}
										value={form.message}
										isInvalid={messageError !== ""}
										onChange={(e) =>
											setForm({ ...form, message: e.target.value })
										}
									/>
									<Form.Control.Feedback type="invalid">
										{t.contact[messageError]}
									</Form.Control.Feedback>
								</Form.Group>

								<div className="d-grid d-md-block">
									<Button type="submit" size="lg" className="px-4">
										{t.contact.submit}
									</Button>
								</div>
							</Form>
						)}
					</div>
				</Col>
			</Row>
		</section>
	);
};

export default Contact;

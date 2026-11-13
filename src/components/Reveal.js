import { useEffect, useRef, useState } from "react";

const Reveal = ({ children, delay = 0 }) => {
	const divRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.15 },
		);
		observer.observe(divRef.current);

		return () => observer.disconnect();
	}, []);

	return (
		<div
			className={`reveal ${isVisible ? "reveal--visible" : ""}`}
			style={{ transitionDelay: `${delay}ms` }}
			ref={divRef}
		>
			{children}
		</div>
	);
};

export default Reveal;

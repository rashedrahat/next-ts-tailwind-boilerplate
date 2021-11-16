module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			tablet: "768px",
			// => @media (min-width: 768px) and (max-width: 1023px) { ... }

			desktop: "1024px",
			// => @media (min-width: 1024px) { ... }
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

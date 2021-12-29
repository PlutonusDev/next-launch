module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}"
	],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				Quicksand: ["Quicksand", "sans-serif"],
				Nanum: ["Nanum_Pen_Script", "cursive"],
				Caveat: ["Caveat", "cursive"]
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [
		require("daisyui")
	]
}
